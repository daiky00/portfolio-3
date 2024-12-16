import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="flex min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] flex-col justify-center py-8 sm:py-12 md:py-16">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-7xl lg:text-8xl lg:leading-[1.1]">
          Senior Frontend Developer & Designer
        </h1>
        <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl md:text-2xl">
          Crafting beautiful, intuitive interfaces and exceptional user experiences with modern frontend technologies.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" className="group">
            View Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline">
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  )
}