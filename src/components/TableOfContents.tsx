import { ALL_CATEGORIES } from '../data/projects'
import FadeIn from './FadeIn'

export default function TableOfContents() {
  return (
    <section className="relative px-[5vw] py-20 border-t border-border overflow-hidden">
      {/* Faded watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-display font-semibold text-gradient leading-none tracking-[0.02em] uppercase"
          style={{ fontSize: 'clamp(80px, 22vw, 320px)', opacity: 0.06 }}
        >
          CONTENTS
        </span>
      </div>

      <div className="relative z-10">
        <FadeIn>
          <h2
            className="font-display font-semibold text-gradient leading-none tracking-[0.02em] uppercase mb-12"
            style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}
          >
            Contents
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2" style={{ gap: '0' }}>
          {ALL_CATEGORIES.map((cat, i) => (
            <FadeIn key={cat.number} delay={i * 80} anim={i % 2 === 0 ? 'left' : 'right'}>
              <div
                className="flex items-baseline gap-4 border-b border-border py-4"
                style={{ paddingRight: i % 2 === 0 ? '3rem' : '0' }}
              >
                <span
                  className="font-display font-semibold text-gradient shrink-0"
                  style={{ fontSize: 'clamp(14px, 1.5vw, 20px)' }}
                >
                  {cat.number}
                </span>
                <span
                  className="font-display font-semibold text-[#1a1a2e]"
                  style={{ fontSize: 'clamp(14px, 1.5vw, 20px)' }}
                >
                  {cat.label}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
