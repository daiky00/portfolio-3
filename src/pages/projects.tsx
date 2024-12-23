import { PageHero } from "@/components/layout/PageHero"
import { Projects } from "@/components/sections/Projects"

export function ProjectsPage() {
  return (
    <div>
      <PageHero
        title="My Projects"
        description="A showcase of my recent work in frontend development and design"
      />
      <Projects />
    </div>
  )
}