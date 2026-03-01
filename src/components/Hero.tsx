import type React from 'react'

const fixedGradient = 'linear-gradient(90deg, var(--accent-color) 0%, var(--primary-color) 100%)'

const textStyle: React.CSSProperties = {
  background: fixedGradient,
  backgroundAttachment: 'fixed',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-white flex items-center"
      style={{ height: '100vh' }}
    >
      {/* Full-screen cover — same gradient, fades out as blob shrinks */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: fixedGradient,
          backgroundAttachment: 'fixed',
          animation: 'blobScreenCover 2.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        }}
      />

      {/* Gradient blob — full-screen on load, shrinks to right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%',
          right: '-18%',
          width: '58%',
          height: '110%',
          background: fixedGradient,
          backgroundAttachment: 'fixed',
          WebkitMaskImage:
            'radial-gradient(ellipse 55% 75% at 45% 50%, black 0%, black 20%, transparent 70%)',
          maskImage:
            'radial-gradient(ellipse 55% 75% at 45% 50%, black 0%, black 20%, transparent 70%)',
          animation: 'blobReveal 2.8s cubic-bezier(0.22, 1, 0.36, 1) both, blobFade 1s ease-out 2.8s both',
        }}
      />

      <div className="relative z-10 w-full px-[5vw]">
        {/* Row 1: Name | 2026 */}
        <p
          className="font-display font-semibold tracking-[0.18em] uppercase leading-none"
          style={{
            fontSize: 'clamp(13px, 1.8vw, 28px)',
            marginBottom: '0.2em',
            ...textStyle,
          }}
        >
          SASHA GRANGER
          <span style={{ fontWeight: 300, padding: '0 0.5em' }}>|</span>
          2026
        </p>

        {/* Row 2: PORTFOLIO massive */}
        <h1
          className="font-display font-black leading-none tracking-[-0.02em]"
          style={{ fontSize: 'clamp(58px, 13.5vw, 210px)', ...textStyle }}
        >
          PORTFOLIO
        </h1>
      </div>
    </section>
  )
}
