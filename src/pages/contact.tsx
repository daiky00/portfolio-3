import { PageHero } from "@/components/layout/PageHero"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function ContactPage() {
  return (
    <div>
      <PageHero
        title="Get in Touch"
        description="Let's create something amazing together"
      />
      <div className="container py-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl mx-auto"
        >
          <Card className="p-8">
            <motion.div variants={item} className="space-y-8">
              <p className="text-xl text-center text-muted-foreground">
                Looking for a senior frontend developer to bring your vision to life? Let's connect and create something amazing together.
              </p>
              
              <div className="grid gap-4 max-w-full">
                <motion.a
                  variants={item}
                  href="mailto:mr.franciscopenajobs@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300"
                >
                  <Mail className="h-6 w-6 text-blue-500" />
                  <span className="text-lg truncate min-w-0">mr.franciscopenajobs@gmail.com</span>
                </motion.a>
                
                <motion.a
                  variants={item}
                  href="https://github.com/daiky00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300"
                >
                  <Github className="h-6 w-6 text-purple-500" />
                  <span className="text-lg truncate min-w-0">View My Code</span>
                </motion.a>
                
                <motion.a
                  variants={item}
                  href="https://www.linkedin.com/in/francisco-pena/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-pink-500/10 to-orange-500/10 hover:from-pink-500/20 hover:to-orange-500/20 transition-all duration-300"
                >
                  <Linkedin className="h-6 w-6 text-pink-500" />
                  <span className="text-lg truncate min-w-0">Connect on LinkedIn</span>
                </motion.a>
              </div>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}