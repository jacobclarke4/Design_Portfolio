import { useState } from 'react'
import FadeIn from './FadeIn'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="relative border-t border-border overflow-hidden px-[5vw] py-20">
      {/* Watermark */}
      <span
        className="absolute font-display font-black leading-none select-none pointer-events-none"
        style={{
          fontSize: 'clamp(80px, 14vw, 200px)',
          color: 'var(--color-navy)',
          opacity: 0.04,
          top: '0.4rem',
          left: 'calc(5vw - 0.04em)',
        }}
        aria-hidden
      >
        Contact
      </span>

      <div className="relative z-10 max-w-2xl">
        <FadeIn>
          <h2
            className="font-display font-black text-gradient leading-none"
            style={{ fontSize: 'clamp(36px, 5.5vw, 80px)', marginBottom: '0.3em' }}
          >
            Get in touch
          </h2>
        </FadeIn>

        <FadeIn delay={80}>
          <p
            style={{
              fontSize: 'clamp(14px, 1.1vw, 17px)',
              color: 'var(--color-muted)',
              lineHeight: 1.7,
              marginBottom: '2.5em',
            }}
          >
            Have a project in mind or just want to say hello? I'd love to hear
            from you. Fill out the form below and I'll get back to you as soon
            as possible.
          </p>
        </FadeIn>

        {submitted ? (
          <FadeIn>
            <div
              className="flex flex-col items-start"
              style={{ gap: '0.5em' }}
            >
              <p
                className="font-display font-bold text-gradient"
                style={{ fontSize: 'clamp(22px, 2.5vw, 34px)' }}
              >
                Message sent!
              </p>
              <p style={{ fontSize: 'clamp(14px, 1.1vw, 17px)', color: 'var(--color-muted)' }}>
                Thanks for reaching out — I'll be in touch soon.
              </p>
            </div>
          </FadeIn>
        ) : (
          <FadeIn delay={160}>
            <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: '1.2em' }}>
              {/* Name + Email row */}
              <div className="flex gap-4" style={{ flexWrap: 'wrap' }}>
                <div className="flex flex-col flex-1" style={{ minWidth: '180px', gap: '0.4em' }}>
                  <label
                    htmlFor="name"
                    className="font-display font-semibold"
                    style={{ fontSize: 'clamp(11px, 0.9vw, 13px)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-navy)' }}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    style={inputStyle}
                  />
                </div>
                <div className="flex flex-col flex-1" style={{ minWidth: '180px', gap: '0.4em' }}>
                  <label
                    htmlFor="email"
                    className="font-display font-semibold"
                    style={{ fontSize: 'clamp(11px, 0.9vw, 13px)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-navy)' }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col" style={{ gap: '0.4em' }}>
                <label
                  htmlFor="subject"
                  className="font-display font-semibold"
                  style={{ fontSize: 'clamp(11px, 0.9vw, 13px)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-navy)' }}
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  style={inputStyle}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col" style={{ gap: '0.4em' }}>
                <label
                  htmlFor="message"
                  className="font-display font-semibold"
                  style={{ fontSize: 'clamp(11px, 0.9vw, 13px)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-navy)' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="font-display font-semibold"
                  style={{
                    background: 'linear-gradient(90deg, var(--accent-color) 0%, var(--primary-color) 100%)',
                    border: 'none',
                    borderRadius: 6,
                    padding: '0.75em 2.4em',
                    fontSize: 'clamp(13px, 1vw, 16px)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#1a1a1a',
                    cursor: 'pointer',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  Send message
                </button>
              </div>
            </form>
          </FadeIn>
        )}
      </div>
    </section>
  )
}

const inputStyle: React.CSSProperties = {
  border: '1px solid var(--color-border)',
  borderRadius: 6,
  padding: '0.7em 1em',
  fontSize: 'clamp(13px, 1vw, 15px)',
  color: '#1a1a2e',
  outline: 'none',
  background: '#fafafa',
  fontFamily: 'var(--font-body)',
  width: '100%',
  boxSizing: 'border-box',
}
