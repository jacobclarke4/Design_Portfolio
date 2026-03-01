import FadeIn from './FadeIn'

interface Props {
  category: string
}

export default function SectionHeader({ category }: Props) {
  return (
    <FadeIn className="px-[5vw] py-10 flex justify-center items-center gap-6">
      <span
        className="font-display font-semibold text-gradient leading-none tracking-[0.02em] uppercase"
        style={{ fontSize: 'clamp(36px, 6vw, 64px)' }}
      >
        {category}
      </span>

      <span className="shrink-0 w-[2.5px] bg-primary" style={{ alignSelf: 'stretch' }} />

      <div className="flex flex-col leading-tight">
        <span
          className="font-display font-extrabold text-gradient tracking-[0.15em] uppercase"
          style={{ fontSize: 'clamp(13px, 1.4vw, 20px)' }}
        >
          Portfolio
        </span>
        <span
          className="font-display font-extrabold text-gradient tracking-[0.15em]"
          style={{ fontSize: 'clamp(13px, 1.4vw, 20px)' }}
        >
          2026
        </span>
      </div>
    </FadeIn>
  )
}
