import { PageHero } from "@/components/layout/PageHero"
import { Card } from "@/components/ui/card"
import { Brain, Code, Rocket, Lightbulb, Target, User } from "lucide-react"
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function AboutPage() {
  return (
    <div>
      <PageHero
        title="About Me"
        description="Passionate about creating exceptional digital experiences through design and development"
      />
      <div className="py-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="container grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
        <motion.div variants={item}>
          <Card className="p-6 h-full">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="mb-4"
            >
              <Lightbulb className="h-8 w-8" />
            </motion.div>
            <h2 className="text-xl font-semibold mb-4">I love to learn new things</h2>
            <p className="text-muted-foreground">
              Mastering the art of coding largely revolves around creating and constructing. With technology evolving at an unstoppable pace, I find myself on an endless journey of learning and growth. In the realm of programming, there's an infinite landscape to explore, and I embrace this continuous evolution.
            </p>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="p-6 h-full">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="mb-4"
            >
              <Target className="h-8 w-8" />
            </motion.div>
            <h2 className="text-xl font-semibold mb-4">Pushing myself to the next level</h2>
            <p className="text-muted-foreground">
              I persistently strive for excellence, overcoming every obstacle that stands in my path. With an unyielding determination, I tackle challenges head-on. I may waver, but I never yield; I may stumble, but I never fall.
            </p>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="p-6 h-full">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="mb-4"
            >
              <User className="h-8 w-8" />
            </motion.div>
            <h2 className="text-xl font-semibold mb-4">Personal journey</h2>
            <p className="text-muted-foreground">
              Since 2011, I've been crafting digital experiences as a frontend developer. My passion for web development has only grown stronger, finding immense satisfaction in delivering high-quality solutions that prioritize user experience and accessibility.
            </p>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="p-6 h-full">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="mb-4"
            >
              <Brain className="h-8 w-8" />
            </motion.div>
            <h2 className="text-xl font-semibold mb-4">Design Excellence</h2>
            <p className="text-muted-foreground">
              Creating intuitive and visually stunning user interfaces that delight users while maintaining the highest standards of design principles and accessibility.
            </p>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="p-6 h-full">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="mb-4"
            >
              <Code className="h-8 w-8" />
            </motion.div>
            <h2 className="text-xl font-semibold mb-4">Frontend Architecture</h2>
            <p className="text-muted-foreground">
              Building scalable and maintainable frontend systems with modern best practices, ensuring clean code and optimal performance.
            </p>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="p-6 h-full">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="mb-4"
            >
              <Rocket className="h-8 w-8" />
            </motion.div>
            <h2 className="text-xl font-semibold mb-4">User Experience</h2>
            <p className="text-muted-foreground">
              Crafting smooth, accessible, and engaging user experiences that make digital products both functional and enjoyable to use.
            </p>
          </Card>
        </motion.div>
      </motion.div>
    </div>
    </div>
  )
}