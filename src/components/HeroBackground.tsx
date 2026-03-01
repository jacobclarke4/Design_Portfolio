import { useEffect, useRef } from 'react'

const VERT = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`

const FRAG = `
  precision highp float;
  uniform float time;
  uniform vec2 resolution;
  uniform vec3 accentColor;
  uniform vec3 primaryColor;

  void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    float x = uv.x;
    float y = uv.y; /* 0 = bottom, 1 = top in WebGL */

    /* Diagonal band coordinate.
       d = 0 along the line from top-right corner (1,1) → bottom-centre (0.5,0).
       d > 0  →  top-left  (white zone)
       d < 0  →  bottom-right (primary/yellow zone)               */
    float d = y - 2.0 * x + 1.0;

    /* Wave perturbation — oscillates horizontally, moves over time */
    float amp = 0.14;
    float wave = amp        * sin(x * 13.0 - time * 0.55)
               + amp * 0.5  * sin(x * 22.0  + time * 0.40 + 1.2)
               + amp * 0.28 * sin(x * 35.0  - time * 0.70 + 2.5);

    /* Band boundaries in d-space */
    float b1 =  0.40 + wave;  /* white  ↔ accent  */
    float b2 = -0.40 + wave;  /* accent ↔ primary */

    /* Sharp edges: 0.005 in d-space ≈ 1-2 px at typical viewport sizes */
    float soft = 0.005;
    float inAccent  = smoothstep(b1 + soft, b1 - soft, d) *
                      smoothstep(b2 - soft, b2 + soft, d);
    float inPrimary = smoothstep(b2 + soft, b2 - soft, d);

    vec3 col = vec3(1.0);
    col = mix(col, accentColor,  inAccent);
    col = mix(col, primaryColor, inPrimary);

    gl_FragColor = vec4(col, 1.0);
  }
`

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace(/[^0-9a-fA-F]/g, '')
  return [
    parseInt(h.slice(0, 2), 16) / 255,
    parseInt(h.slice(2, 4), 16) / 255,
    parseInt(h.slice(4, 6), 16) / 255,
  ]
}

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext('webgl')
    if (!gl) return

    const compileShader = (type: number, src: string) => {
      const s = gl.createShader(type)!
      gl.shaderSource(s, src)
      gl.compileShader(s)
      return s
    }
    const program = gl.createProgram()!
    gl.attachShader(program, compileShader(gl.VERTEX_SHADER, VERT))
    gl.attachShader(program, compileShader(gl.FRAGMENT_SHADER, FRAG))
    gl.linkProgram(program)
    gl.useProgram(program)

    // Full-screen quad
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)
    const posLoc = gl.getAttribLocation(program, 'position')
    gl.enableVertexAttribArray(posLoc)
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0)

    const uTime    = gl.getUniformLocation(program, 'time')
    const uRes     = gl.getUniformLocation(program, 'resolution')
    const uAccent  = gl.getUniformLocation(program, 'accentColor')
    const uPrimary = gl.getUniformLocation(program, 'primaryColor')

    // Read CSS custom properties for colors
    const style = getComputedStyle(document.documentElement)
    gl.uniform3fv(uAccent,  hexToRgb(style.getPropertyValue('--accent-color').trim()))
    gl.uniform3fv(uPrimary, hexToRgb(style.getPropertyValue('--primary-color').trim()))

    const resize = () => {
      const dpr = window.devicePixelRatio ?? 1
      canvas.width  = canvas.offsetWidth  * dpr
      canvas.height = canvas.offsetHeight * dpr
      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.uniform2f(uRes, canvas.width, canvas.height)
    }
    resize()
    window.addEventListener('resize', resize)

    const start = performance.now()
    const render = () => {
      gl.uniform1f(uTime, (performance.now() - start) / 1000)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      rafRef.current = requestAnimationFrame(render)
    }
    render()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(rafRef.current)
      gl.deleteProgram(program)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}
