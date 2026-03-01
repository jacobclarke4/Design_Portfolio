import LoadingScreen from './components/LoadingScreen'
import Hero from './components/Hero'
import Bio from './components/Bio'
import ContactForm from './components/ContactForm'
import ProjectSection from './components/ProjectSection'
import SectionHeader from './components/SectionHeader'
import TableOfContents from './components/TableOfContents'
import projects, { type Project } from './data/projects'

interface CategoryGroup {
  categoryNumber: number
  category: string
  projects: Project[]
}

function groupByCategory(items: Project[]): CategoryGroup[] {
  const groups: CategoryGroup[] = []
  for (const project of items) {
    const last = groups[groups.length - 1]
    if (last && last.categoryNumber === project.categoryNumber) {
      last.projects.push(project)
    } else {
      groups.push({ categoryNumber: project.categoryNumber, category: project.category, projects: [project] })
    }
  }
  return groups
}

export default function App() {
  const groups = groupByCategory(projects)

  return (
    <>
      <LoadingScreen />
      <Hero />
      <Bio />
      <TableOfContents />
      <main>
        {groups.map((group) => (
          <div key={group.categoryNumber}>
            <SectionHeader category={group.category} />
            {group.projects.map((project) => (
              <ProjectSection key={project.id} project={project} />
            ))}
          </div>
        ))}
      </main>
      <ContactForm />
    </>
  )
}
