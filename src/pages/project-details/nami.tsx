import { motion } from 'framer-motion';
import { PageHero } from '@/components/layout/PageHero';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MacbookFrame } from '@/components/ui/macbook-frame';
import {
  LineChart,
  Smartphone,
  Zap,
  Brain,
  Moon,
  Sun,
  DollarSign,
} from 'lucide-react';
import namimlSiteImage from '@/assets/namimlsite.jpg';
import namimlLandingPageImage from '@/assets/namiml-landing-page.jpg';
import namimlPaywallsImage from '@/assets/namiml-paywalls.jpg';
import namiPaywallExampleImage from '@/assets/namiml-paywall-example.jpg';
import namiPaywallExampleLightImage from '@/assets/namiml-paywall-example-light.jpg';
import namiPaywallExampleDarkImage from '@/assets/namiml-paywall-example-dark.jpg';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function NamiDetails() {
  return (
    <div>
      <PageHero
        title="Nami ML Platform"
        description="The Smartest Way to Sell Subscriptions"
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
              As a Senior Frontend Engineer at Nami ML, I helped build an
              end-to-end solution powered by on-device machine learning to
              accelerate mobile app businesses through intelligent subscription
              management and optimization.
            </p>
          </motion.section>

          {/* MArketing site */}
          <motion.section variants={item} className="space-y-8">
            <h2 className="text-3xl font-bold mb-8">Marketing Site</h2>
            <Card className="p-6">
              <MacbookFrame>
                <img
                  src={namimlSiteImage}
                  alt="Nami ML Dashboard"
                  className="rounded-lg border w-full"
                />
              </MacbookFrame>
            </Card>
          </motion.section>

          {/* Platform Interface */}
          <motion.section variants={item} className="space-y-8">
            <h2 className="text-3xl font-bold mb-8">Landing Page</h2>
            <Card className="p-6">
              <MacbookFrame>
                <img
                  src={namimlLandingPageImage}
                  alt="Nami ML Landing Page"
                  className="rounded-lg border w-full"
                />
              </MacbookFrame>
            </Card>
          </motion.section>

          {/* Paywall Examples */}
          <motion.section variants={item} className="space-y-8">
            <h2 className="text-3xl font-bold mb-8">Paywall Gallery</h2>
            <Card className="p-6">
              <MacbookFrame>
                <img
                  src={namimlPaywallsImage}
                  alt="Nami Paywall Gallery"
                  className="rounded-lg border w-full"
                />
              </MacbookFrame>
            </Card>
          </motion.section>

          <motion.section variants={item} className="space-y-8">
            <h2 className="text-3xl font-bold mb-8">Smart Paywall Example</h2>
            <Card className="p-6">
              <MacbookFrame>
                <img
                  src={namiPaywallExampleImage}
                  alt="Nami Paywall Example"
                  className="rounded-lg border w-full"
                />
              </MacbookFrame>
            </Card>
          </motion.section>
          <motion.section variants={item} className="space-y-8">
            <h2 className="text-3xl font-bold mb-8">
              Smart Paywall Example Light/Dark Mode
            </h2>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">
                Example Implementation
              </h3>
              <Tabs defaultValue="light" className="w-full">
                <TabsList className="mb-4 bg-muted/50">
                  <TabsTrigger
                    value="light"
                    className="flex items-center gap-2"
                  >
                    <Sun className="h-4 w-4" /> Light Mode
                  </TabsTrigger>
                  <TabsTrigger value="dark" className="flex items-center gap-2">
                    <Moon className="h-4 w-4" /> Dark Mode
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="light">
                  <MacbookFrame>
                    <img
                      src={namiPaywallExampleLightImage}
                      alt="Nami Paywall Light Mode"
                      className="rounded-lg border w-full"
                    />
                  </MacbookFrame>
                </TabsContent>
                <TabsContent value="dark">
                  <MacbookFrame>
                    <img
                      src={namiPaywallExampleDarkImage}
                      alt="Nami Paywall Dark Mode"
                      className="rounded-lg border w-full"
                    />
                  </MacbookFrame>
                </TabsContent>
              </Tabs>
            </Card>
          </motion.section>

          {/* Key Features */}
          <motion.section variants={item} className="space-y-8">
            <h2 className="text-3xl font-bold">Key Features</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Brain className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">ML-Powered</h3>
                </div>
                <p className="text-muted-foreground">
                  On-device machine learning for intelligent subscription
                  optimization
                </p>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <LineChart className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Analytics</h3>
                </div>
                <p className="text-muted-foreground">
                  Comprehensive metrics and insights for subscription
                  performance
                </p>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Smartphone className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Mobile First</h3>
                </div>
                <p className="text-muted-foreground">
                  Optimized for mobile apps with seamless integration
                </p>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Smart Pricing</h3>
                </div>
                <p className="text-muted-foreground">
                  Dynamic pricing strategies based on user behavior and market
                  data
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
                  Lightning-fast analytics and real-time data processing
                </p>
              </Card>
            </div>
          </motion.section>

          {/* Technical Details */}
          <motion.section variants={item} className="space-y-6">
            <h2 className="text-3xl font-bold">Technical Implementation</h2>
            <Card className="p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Development Stack</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>React with TypeScript for robust type safety</li>
                  <li>
                    TanStack Query for efficient data fetching and caching
                  </li>
                  <li>
                    Recharts for beautiful and responsive data visualizations
                  </li>
                  <li>Tailwind CSS for modern and maintainable styling</li>
                  <li>Vite for lightning-fast development experience</li>
                  <li>Vitest for comprehensive testing coverage</li>
                </ul>
              </div>
            </Card>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}
