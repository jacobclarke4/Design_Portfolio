import type { GridLayout, ProjectImage } from '../data/projects'
import FadeIn, { type AnimType } from './FadeIn'

interface Props {
  images: ProjectImage[]
  layout: GridLayout
}

const GAP = 16
const CARD = 'rounded-2xl overflow-hidden bg-neutral-200'

function Img({ image }: { image: ProjectImage }) {
  return image.src ? (
    <img src={image.src} alt={image.alt} loading="lazy" className="w-full h-full object-cover" />
  ) : (
    <div
      className="w-full h-full"
      style={{ backgroundColor: image.placeholderColor }}
      role="img"
      aria-label={image.alt}
    />
  )
}

// Animation pattern for 3-col grids: outer cols slide in from their side, centre slides up
const ANIM_3: AnimType[] = ['left', 'up',    'right',
                             'left', 'scale', 'right']

// Animation pattern for 4-3 grid (7 items across two rows)
const ANIM_43: AnimType[] = ['left', 'up', 'scale', 'right',   // row 1 (4)
                              'left', 'up',           'right']  // row 2 (3)

function Grid3Col({ images }: { images: ProjectImage[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 w-full" style={{ gap: GAP }}>
      {images.map((img, i) => (
        <FadeIn key={i} delay={i * 70} anim={ANIM_3[i] ?? 'up'} className={`${CARD} aspect-square`}>
          <Img image={img} />
        </FadeIn>
      ))}
    </div>
  )
}

function Grid4x3({ images }: { images: ProjectImage[] }) {
  const top = images.slice(0, 4)
  const bottom = images.slice(4, 7)
  return (
    <div className="grid grid-cols-2 sm:grid-cols-12 w-full" style={{ gap: GAP }}>
      {top.map((img, i) => (
        <FadeIn key={i} delay={i * 70} anim={ANIM_43[i]} className={`col-span-1 sm:col-span-3 aspect-square ${CARD}`}>
          <Img image={img} />
        </FadeIn>
      ))}
      {bottom.map((img, i) => (
        <FadeIn key={i + 4} delay={(i + 4) * 70} anim={ANIM_43[i + 4]} className={`col-span-1 sm:col-span-4 aspect-4/3 ${CARD}`}>
          <Img image={img} />
        </FadeIn>
      ))}
    </div>
  )
}

function GridFeature({ images }: { images: ProjectImage[] }) {
  const [featured, ...rest] = images
  // Side images alternate right → scale → right so the stack feels varied
  const sideAnims: AnimType[] = ['right', 'scale', 'right']
  return (
    <div className="grid w-full grid-cols-1 sm:grid-cols-[1fr_1.6fr]" style={{ gap: GAP }}>
      <FadeIn delay={0} anim="left" className={`${CARD} sm:min-h-90`}>
        <Img image={featured} />
      </FadeIn>

      <div className="grid grid-cols-1" style={{ gap: GAP }}>
        {rest.map((img, i) => (
          <FadeIn
            key={i}
            delay={(i + 1) * 100}
            anim={sideAnims[i] ?? 'right'}
            className={`${CARD} ${i === 0 ? 'aspect-2/1' : 'aspect-video'}`}
          >
            <Img image={img} />
          </FadeIn>
        ))}
      </div>
    </div>
  )
}

export default function ImageGrid({ images, layout }: Props) {
  if (layout === '3-col') return <Grid3Col images={images} />
  if (layout === '4-3') return <Grid4x3 images={images} />
  return <GridFeature images={images} />
}
