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
      {/* Mobile only: name pinned to top of section */}
      <p
        className="sm:hidden absolute top-64 left-0 right-0 text-center z-10
                   font-display font-semibold tracking-[0.18em] uppercase leading-none"
        style={{ fontSize: '18px', ...textStyle }}
      >
        SASHA GRANGER
        <span style={{ fontWeight: 300, padding: '0 0.5em' }}>|</span>
        2026
      </p>

      <div className="relative z-10 w-full flex justify-center">
        <div className="flex flex-col items-start">
        {/* Desktop only: name left-aligned above PORTFOLIO */}
        <p
          className="hidden sm:block font-display font-semibold tracking-[0.18em] uppercase leading-none"
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
              className="pointer-events-none w-[45vmin] h-[45vmin] sm:w-[70vmin] sm:h-[70vmin]"
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                borderRadius: '50%',
                background: fixedGradient,
                filter: 'blur(72px)',
                opacity: 1.0,
                zIndex: -1,
                animation:
                  'blobScale 1.4s cubic-bezier(0.22, 1, 0.36, 1) 3.8s both',
              }}
            />
          </span>
        </h1>
        </div>
      </div>
    </section>
  )
}
