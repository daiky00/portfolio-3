import { motion } from "framer-motion";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { MacbookFrame } from "@/components/ui/macbook-frame";
import { 
  Search,
  Wrench,
  Users,
  BarChart,
  Laptop
} from "lucide-react";
import hiltiSiteImage from '@/assets/hiltisite.jpg';

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

export function HiltiDetails() {
  return (
    <div>
      <PageHero
        title="Ask Hilti Platform"
        description="A comprehensive tool management and support platform"
      />
      
      <div className="container py-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-16"
        >
          {/* Project Overview */}
          <motion.section variants={item} className="space-y-6">
            <h2 className="text-3xl font-bold">Project Overview</h2>
            <p className="text-xl text-muted-foreground">
              As a Senior Frontend Developer at Hilti, I contributed to the development of the Ask Hilti platform,
              a sophisticated tool management system that helps construction professionals optimize their operations.
            </p>
          </motion.section>

          {/* Platform Showcase */}
          <motion.section variants={item} className="space-y-8">
            <h2 className="text-3xl font-bold mb-8">Platform Interface</h2>
            <Card className="p-6">
              <MacbookFrame>
              <img
                src={hiltiSiteImage}
                alt="Ask Hilti Platform"
                className="rounded-lg border w-full"
              />
              </MacbookFrame>
            </Card>
          </motion.section>

          {/* Key Features */}
          <motion.section variants={item} className="space-y-8">
            <h2 className="text-3xl font-bold">Key Features</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Search className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Smart Search</h3>
                </div>
                <p className="text-muted-foreground">
                  Advanced search functionality for quick tool and documentation access
                </p>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Wrench className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Tool Management</h3>
                </div>
                <p className="text-muted-foreground">
                  Comprehensive tool tracking and maintenance scheduling
                </p>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Team Collaboration</h3>
                </div>
                <p className="text-muted-foreground">
                  Built-in tools for team coordination and resource sharing
                </p>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <BarChart className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Usage Analytics</h3>
                </div>
                <p className="text-muted-foreground">
                  Detailed insights into tool usage and performance metrics
                </p>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Laptop className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Responsive Design</h3>
                </div>
                <p className="text-muted-foreground">
                  Optimized experience across all devices and screen sizes
                </p>
              </Card>
            </div>
          </motion.section>

          {/* Technical Implementation */}
          <motion.section variants={item} className="space-y-6">
            <h2 className="text-3xl font-bold">Technical Implementation</h2>
            <Card className="p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Development Stack</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Built with Angular for robust enterprise-grade architecture</li>
                  <li>TypeScript for enhanced type safety and developer experience</li>
                  <li>SCSS for maintainable and scalable styling</li>
                  <li>Cypress for comprehensive end-to-end testing</li>
                  <li>Storybook for component documentation and testing</li>
                </ul>
              </div>
            </Card>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}