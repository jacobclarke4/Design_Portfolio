import FadeIn from './FadeIn'
import sashaPhoto from '../Photos/Sasha.jpg'

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#262626', flexShrink: 0 }}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#262626" style={{ flexShrink: 0 }}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function BehanceIcon() {
  return (
    <svg width="17" height="16" viewBox="0 0 24 24" fill="#262626" style={{ flexShrink: 0 }}>
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.726zm-7.726-3h3.957c-.005-1.09-.868-1.977-2.026-1.977-1.32 0-1.869.845-1.931 1.977zM6.756 14h2.805c1.517 0 2.29-.705 2.29-1.979 0-1.219-.687-1.949-2.29-1.949H6.756V14zm0-5.5h2.604c1.297 0 1.972-.61 1.972-1.725 0-1.222-.755-1.775-1.972-1.775H6.756V8.5zM2 19V5h7.682c2.283 0 4.214 1.13 4.214 3.498 0 1.426-.705 2.477-1.895 3.054C13.383 12.04 14 13.3 14 14.876 14 17.542 12.055 19 9.432 19H2z" />
    </svg>
  )
}

function NavyMailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-navy)', flexShrink: 0 }}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function NavyLinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--color-navy)" style={{ flexShrink: 0 }}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function NavyBehanceIcon() {
  return (
    <svg width="20" height="18" viewBox="0 0 24 24" fill="var(--color-navy)" style={{ flexShrink: 0 }}>
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.726zm-7.726-3h3.957c-.005-1.09-.868-1.977-2.026-1.977-1.32 0-1.869.845-1.931 1.977zM6.756 14h2.805c1.517 0 2.29-.705 2.29-1.979 0-1.219-.687-1.949-2.29-1.949H6.756V14zm0-5.5h2.604c1.297 0 1.972-.61 1.972-1.725 0-1.222-.755-1.775-1.972-1.775H6.756V8.5zM2 19V5h7.682c2.283 0 4.214 1.13 4.214 3.498 0 1.426-.705 2.477-1.895 3.054C13.383 12.04 14 13.3 14 14.876 14 17.542 12.055 19 9.432 19H2z" />
    </svg>
  )
}

function DotsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#262626">
      <circle cx="5" cy="12" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="19" cy="12" r="1.5" />
    </svg>
  )
}

function InstagramPost() {
  return (
    <div
      className="bg-white flex flex-col"
      style={{
        width: 'clamp(280px, 28vw, 400px)',
        borderRadius: 12,
        border: '1px solid #dbdbdb',
        boxShadow: '0 8px 40px rgba(0,0,0,0.10)',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2">
        <div className="flex items-center gap-2">
          <div style={{ padding: 2, borderRadius: '50%', background: 'linear-gradient(45deg, var(--primary-color), var(--accent-color))' }}>
            <div style={{ padding: 2, borderRadius: '50%', background: 'white' }}>
              <img
                src={sashaPhoto}
                alt="avatar"
                style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
              />
            </div>
          </div>
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, color: '#262626', lineHeight: 1.2 }}>sasha.granger</p>
            <p style={{ fontSize: 11, color: '#8e8e8e', lineHeight: 1.2 }}>East Lansing, Michigan</p>
          </div>
        </div>
        <DotsIcon />
      </div>

      {/* Photo */}
      <div style={{ aspectRatio: '4/5', overflow: 'hidden' }}>
        <img
          src={sashaPhoto}
          alt="Sasha Granger"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
        />
      </div>

      {/* Contact links — vertical */}
      <div className="flex flex-col" style={{ padding: '10px 12px', gap: 8, borderBottom: '1px solid #efefef' }}>
        <div className="flex items-center gap-2">
          <MailIcon />
          <span style={{ fontSize: 12, color: '#262626' }}>sasha@example.com</span>
        </div>
        <div className="flex items-center gap-2">
          <LinkedInIcon />
          <span style={{ fontSize: 12, color: '#262626' }}>linkedin.com/in/sasha-granger</span>
        </div>
        <div className="flex items-center gap-2">
          <BehanceIcon />
          <span style={{ fontSize: 12, color: '#262626' }}>behance.net/sashagranger</span>
        </div>
      </div>

      {/* Caption */}
      <p style={{ fontSize: 13, color: '#262626', padding: '8px 12px 4px', lineHeight: 1.5 }}>
        <span style={{ fontWeight: 600 }}>sasha.granger</span>
        {' '}Graphic designer & visual storyteller ✨
      </p>

      {/* Timestamp */}
      <p style={{ fontSize: 10, color: '#8e8e8e', padding: '0 12px 10px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
        3 days ago
      </p>
    </div>
  )
}

export default function Bio() {
  return (
    <section className="relative border-t border-border overflow-hidden">
      <div className="flex items-stretch min-h-[80vh]">

        {/* Left: text content */}
        <div className="flex-1 flex flex-col justify-center px-[5vw] py-20 relative">
          <span
            className="absolute font-display font-black leading-none select-none pointer-events-none"
            style={{ fontSize: 'clamp(90px, 16vw, 220px)', color: 'var(--color-navy)', opacity: 0.04, top: '0.5rem', left: 'calc(5vw - 0.05em)' }}
            aria-hidden
          >
            Hello!
          </span>

          <FadeIn>
            <h2 className="font-display font-black text-gradient leading-none" style={{ fontSize: 'clamp(44px, 7vw, 96px)', marginBottom: '0.45em' }}>
              Hello!
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <h3 className="font-display font-bold text-gradient" style={{ fontSize: 'clamp(17px, 1.8vw, 26px)', marginBottom: '1em' }}>
              I'm Sasha Granger
            </h3>
          </FadeIn>

          <FadeIn delay={180}>
            <p style={{ fontSize: 'clamp(14px, 1.1vw, 17px)', color: 'var(--color-muted)', lineHeight: 1.85, maxWidth: '52ch', marginBottom: '2.5em' }}>
              A passionate graphic designer based in East Lansing, Michigan, with a
              keen eye for detail and a love for creative problem-solving. With a
              strong foundation in visual design, typography, and brand identity, I
              specialize in crafting experiences that feel both intentional and
              alive.
              <br /><br />
              My work spans brand identity, print design, packaging, and digital
              media. I thrive at the intersection of strategy and aesthetics —
              where a well-placed visual can shift how an entire story is understood.
              <br /><br />
              When I'm not designing, I'm exploring photography, visiting local
              galleries, or hunting for the perfect cup of coffee. I believe the
              best design is born from curiosity and a genuine love for the world
              around us.
            </p>
          </FadeIn>

        </div>

        {/* Right: Instagram post + gradient blob */}
        <div
          className="relative shrink-0 flex items-center justify-center"
          style={{ width: 'clamp(320px, 44vw, 660px)', padding: '4rem 3rem' }}
        >
          {/* Gradient blob — behind the card */}
          <div
            className="absolute pointer-events-none"
            style={{
              inset: 0,
              zIndex: 0,
              background: 'linear-gradient(90deg, var(--accent-color) 0%, var(--primary-color) 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 88% 82% at 55% 50%, black 0%, black 30%, transparent 75%)',
              maskImage: 'radial-gradient(ellipse 88% 82% at 55% 50%, black 0%, black 30%, transparent 75%)',
              opacity: 0.7,
              filter: 'blur(50px)',
            }}
          />

          <FadeIn anim="right" style={{ position: 'relative', zIndex: 1 }}>
            <InstagramPost />
          </FadeIn>
        </div>

      </div>
    </section>
  )
}
