import { useEffect, useRef, useState } from 'react'

export type AnimType = 'up' | 'left' | 'right' | 'scale'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
  anim?: AnimType
}

const HIDDEN_TRANSFORM: Record<AnimType, string> = {
  up:    'translateY(32px)',
  left:  'translateX(-40px)',
  right: 'translateX(40px)',
  scale: 'scale(0.88)',
}

export default function FadeIn({ children, className = '', delay = 0, anim = 'up' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [hasEntered, setHasEntered] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          setHasEntered(true)
        } else {
          setVisible(false)
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        transitionDelay: visible ? `${delay}ms` : '0ms',
        opacity: visible ? 1 : 0,
        // Exit: fade in-place (no transform). Initial entry: animated transform.
        transform: visible || hasEntered ? 'none' : HIDDEN_TRANSFORM[anim],
      }}
    >
      {children}
    </div>
  )
}
