import { useState, useEffect } from 'react'

export default function LoadingScreen() {
  const [textVisible, setTextVisible] = useState(false)
  const [portfolioVisible, setPortfolioVisible] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const t1 = setTimeout(() => setTextVisible(true), 300)
    const t2 = setTimeout(() => setPortfolioVisible(true), 750)
    const t3 = setTimeout(() => setFadeOut(true), 3000)
    const t4 = setTimeout(() => {
      document.body.style.overflow = ''
      setGone(true)
    }, 3800)
    return () => {
      document.body.style.overflow = ''
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4)
    }
  }, [])

  if (gone) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(-45deg, #ff8498, #ffd328, #ff8498, #ffd328)',
        backgroundSize: '400% 400%',
        animation: 'loaderGradient 5s ease infinite',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.8s ease',
        pointerEvents: fadeOut ? 'none' : 'all',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.15em' }}>
        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(36px, 6vw, 80px)',
            fontWeight: 700,
            color: 'white',
            letterSpacing: '-0.02em',
            opacity: textVisible ? 1 : 0,
            transition: 'opacity 0.9s ease',
            userSelect: 'none',
            margin: 0,
          }}
        >
          Sasha
        </h1>
        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(13px, 2vw, 28px)',
            fontWeight: 400,
            color: 'white',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            opacity: portfolioVisible ? 1 : 0,
            transform: portfolioVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
            userSelect: 'none',
            margin: 0,
          }}
        >
          Portfolio
        </h2>
      </div>
    </div>
  )
}
