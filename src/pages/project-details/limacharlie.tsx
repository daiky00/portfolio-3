import { motion } from "framer-motion";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Palette, 
  Moon, 
  Sun, 
  Layout, 
  LineChart,
  Shield,
  Zap
} from "lucide-react";
import { MacbookFrame } from "@/components/ui/macbook-frame";
import limacharlieSiteImage from '@/assets/limacharliesite.jpg';
import limacharlieAfterImage from '@/assets/limacharliesite-after.jpg';
import limacharlieDarkImage from '@/assets/limacharliesite-after-dark.jpg';
import limacharlieBrandingLightImage from '@/assets/limacharliesite-after-branding-light.jpg';
import limacharlieBrandingDarkImage from '@/assets/limacharliesite-after-branding-dark.jpg';

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

export function LimaCharlieDetails() {
  return (
    <div>
      <PageHero
        title="LimaCharlie UI Modernization"
        description="A complete overhaul of the cybersecurity platform's user interface"
      />
      
      <div className="container py-16">
        {/* Overview Section */}
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
              As the Lead Frontend Engineer at LimaCharlie, I spearheaded a comprehensive UI modernization 
              initiative to transform the platform's user experience while maintaining its robust 
              functionality for cybersecurity professionals.
            </p>
          </motion.section>

          {/* Before & After */}
          <motion.section variants={item} className="space-y-8">
            <h2 className="text-3xl font-bold mb-8">The Transformation</h2>
            <div className="grid gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-6">Interface Evolution</h3>
                <Tabs defaultValue="before" className="w-full">
                  <TabsList className="mb-4 bg-muted/50">
                    <TabsTrigger value="before" className="text-sm font-medium text-foreground/70 data-[state=active]:bg-background data-[state=active]:text-foreground">
                      Original Design
                    </TabsTrigger>
                    <TabsTrigger value="after" className="text-sm font-medium text-foreground/70 data-[state=active]:bg-background data-[state=active]:text-foreground">
                      New Design
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="before">
                    <MacbookFrame>
                    <img
                        src={limacharlieSiteImage}
                        alt="LimaCharlie Before"
                        className="rounded-lg border w-full"
                      />
                    </MacbookFrame>
                  </TabsContent>
                  <TabsContent value="after">
                    <MacbookFrame>
                    <img
                        src={limacharlieAfterImage}
                        alt="Light Mode"
                        className="rounded-lg border w-full"
                      />
                    </MacbookFrame>
                  </TabsContent>
                </Tabs>
              </Card>

              {/* Theme Support */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-6">Theme Support</h3>
                <Tabs defaultValue="light" className="w-full">
                  <TabsList className="mb-4 bg-muted/50">
                    <TabsTrigger value="light" className="flex items-center gap-2 text-sm font-medium text-foreground/70 data-[state=active]:bg-background data-[state=active]:text-foreground">
                      <Sun className="h-4 w-4" /> Light Mode
                    </TabsTrigger>
                    <TabsTrigger value="dark" className="flex items-center gap-2 text-sm font-medium text-foreground/70 data-[state=active]:bg-background data-[state=active]:text-foreground">
                      <Moon className="h-4 w-4" /> Dark Mode
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="light">
                    <MacbookFrame>
                    <img
                        src={limacharlieAfterImage}
                        alt="Light Mode"
                        className="rounded-lg border w-full"
                      />
                    </MacbookFrame>
                  </TabsContent>
                  <TabsContent value="dark">
                    <MacbookFrame>
                    <img
                        src={limacharlieDarkImage}
                        alt="Dark Mode"
                        className="rounded-lg border w-full"
                      />
                    </MacbookFrame>
                  </TabsContent>
                </Tabs>
              </Card>

              {/* White Labeling */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-6">White Label Support</h3>
                <Tabs defaultValue="light" className="w-full">
                  <TabsList className="mb-4 bg-muted/50">
                    <TabsTrigger value="light" className="flex items-center gap-2 text-sm font-medium text-foreground/70 data-[state=active]:bg-background data-[state=active]:text-foreground">
                      <Sun className="h-4 w-4" /> Light Theme
                    </TabsTrigger>
                    <TabsTrigger value="dark" className="flex items-center gap-2 text-sm font-medium text-foreground/70 data-[state=active]:bg-background data-[state=active]:text-foreground">
                      <Moon className="h-4 w-4" /> Dark Theme
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="light">
                    <MacbookFrame>
                    <img
                        src={limacharlieBrandingLightImage}
                        alt="White Label Light"
                        className="rounded-lg border w-full"
                      />
                    </MacbookFrame>
                  </TabsContent>
                  <TabsContent value="dark">
                    <MacbookFrame>
                    <img
                        src={limacharlieBrandingDarkImage}
                        alt="White Label Dark"
                        className="rounded-lg border w-full"
                      />
                    </MacbookFrame>
                  </TabsContent>
                </Tabs>
              </Card>
            </div>
          </motion.section>

          {/* Key Features */}
          <motion.section variants={item} className="space-y-8">
            <h2 className="text-3xl font-bold">Key Features</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Layout className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Intuitive Design</h3>
                </div>
                <p className="text-muted-foreground">
                  Modern interface focused on clarity and ease of use for security professionals
                </p>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Palette className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">White Labeling</h3>
                </div>
                <p className="text-muted-foreground">
                  Complete white-label support with customizable themes and branding options
                </p>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Moon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Theme Support</h3>
                </div>
                <p className="text-muted-foreground">
                  System-aware dark mode with seamless transitions between themes
                </p>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Performance</h3>
                </div>
                <p className="text-muted-foreground">
                  Optimized for speed with efficient data handling and rendering
                </p>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <LineChart className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Enhanced Analytics</h3>
                </div>
                <p className="text-muted-foreground">
                  Advanced data visualization and real-time monitoring tools
                </p>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Security First</h3>
                </div>
                <p className="text-muted-foreground">
                  Enterprise-grade security with improved accessibility
                </p>
              </Card>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}