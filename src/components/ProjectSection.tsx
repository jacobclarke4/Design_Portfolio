import type { Project } from '../data/projects'
import CategoryBadge from './CategoryBadge'
import FadeIn from './FadeIn'
import ImageGrid from './ImageGrid'
import ToolBadge from './ToolBadge'

interface Props {
  project: Project
}

export default function ProjectSection({ project }: Props) {
  return (
    <section className="py-20 px-[5vw] border-t border-border">
      {/* Header row animates in first */}
      <FadeIn className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-10">
        <div className="w-full sm:max-w-130">
          <h2
            className="font-semibold text-[#1a1a2e] mb-2.5"
            style={{ fontSize: 'clamp(20px, 2.4vw, 32px)' }}
          >
            {project.title}
          </h2>

          <div className="flex gap-2 flex-wrap mb-5">
            {project.tools.map((t) => (
              <ToolBadge key={t} tool={t} />
            ))}
          </div>

          <p
            className="leading-7 text-muted text-justify"
            style={{ fontSize: 'clamp(13px, 1.1vw, 15px)' }}
          >
            {project.description}
          </p>
        </div>

        <div className="shrink-0 pt-1">
          <CategoryBadge
            number={project.categoryNumber}
            label={project.category}
            accentColor={project.accentColor}
          />
        </div>
      </FadeIn>

      {/* Each image inside animates in individually with stagger */}
      <ImageGrid images={project.images} layout={project.gridLayout} />
    </section>
  )
}
