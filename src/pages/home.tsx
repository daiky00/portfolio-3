import { PageHero } from "@/components/layout/PageHero"
import { Introduction } from "@/components/sections/Introduction"
import { Skills } from "@/components/sections/Skills"
import { Companies } from "@/components/sections/Companies"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export function HomePage() {
  return (
    <div>
      <PageHero
        title="Senior Frontend Developer & Designer"
        description="Crafting beautiful, intuitive interfaces and exceptional user experiences with modern frontend technologies."
      >
        <div className="flex flex-col gap-4 sm:flex-row justify-center">
          <Button size="lg" className="group" asChild>
            <Link to="/projects">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/contact">Contact Me</Link>
          </Button>
        </div>
      </PageHero>
      <Introduction />
      <Skills />
      <Companies />
    </div>
  )
}