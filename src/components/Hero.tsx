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
      <div className="relative z-10 w-full flex justify-center">
        <div className="flex flex-col items-start">
        {/* Row 1: Name | 2026 — left-aligned above the P in PORTFOLIO */}
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

        {/* PORT stays gradient; FOLIO is white — blob lives inside the span
            so CSS left/top 50% always hits the exact rendered center */}
        <h1
          className="font-display font-black leading-none tracking-[-0.02em]"
          style={{ fontSize: 'clamp(58px, 13.5vw, 210px)' }}
        >
          <span style={textStyle}>PORT</span>
          <span
            style={{
              color: 'white',
              display: 'inline-block',
              position: 'relative',
              isolation: 'isolate',
            }}
          >
            FOLIO
            <div
              className="pointer-events-none"
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                width: '44vw',
                height: '90vh',
                background: fixedGradient,
                WebkitMaskImage:
                  'radial-gradient(ellipse 70% 60% at 50% 50%, black 0%, black 5%, transparent 98%)',
                maskImage:
                  'radial-gradient(ellipse 70% 60% at 50% 50%, black 0%, black 5%, transparent 98%)',
                transform: 'translate(-50%, -50%)',
                filter: 'blur(60px)',
                opacity: 0.85,
                zIndex: -1,
              }}
            />
          </span>
        </h1>
        </div>
      </div>
    </section>
  )
}
