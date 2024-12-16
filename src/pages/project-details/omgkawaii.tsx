import { motion } from "framer-motion";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { MacbookFrame } from "@/components/ui/macbook-frame";
import { MobileFrame } from "@/components/ui/mobile-frame";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import omgkawaiiBeforeImage from '@/assets/omgkawaiisite.jpg';
import omgkawaiiAfterImage from '@/assets/omgkawaiisite-after.jpg';
import omgkawaiiMobileImage from '@/assets/omgkawaiisite-mobile.jpg';
import { 
  Palette,
  Smartphone,
  ShoppingBag,
  Globe,
  Truck,
  Heart
} from "lucide-react";

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

export function OmgKawaiiDetails() {
  return (
    <div>
      <PageHero
        title="OMG Kawaii"
        description="A delightful e-commerce platform for kawaii plushies and accessories"
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
              As Co-Founder & CTO of OMG Kawaii, I led the development of both our web and mobile platforms,
              creating a seamless shopping experience for kawaii enthusiasts worldwide.
            </p>
          </motion.section>

          {/* Web Platform */}
          <motion.section variants={item} className="space-y-8">
            <h2 className="text-3xl font-bold mb-8">Web Platform Evolution</h2>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">Website Redesign</h3>
              <Tabs defaultValue="before" className="w-full">
                <TabsList className="mb-4 bg-muted/50">
                  <TabsTrigger value="before">Original Design</TabsTrigger>
                  <TabsTrigger value="after">New Design</TabsTrigger>
                </TabsList>
                <TabsContent value="before">
                  <MacbookFrame>
                  <img
                    src={omgkawaiiBeforeImage}
                    alt="OMG Kawaii Original Website"
                    className="rounded-lg border w-full"
                  />
                  </MacbookFrame>
                </TabsContent>
                <TabsContent value="after">
                  <MacbookFrame>
                  <img
                    src={omgkawaiiAfterImage}
                    alt="OMG Kawaii New Website"
                    className="rounded-lg border w-full"
                  />
                  </MacbookFrame>
                </TabsContent>
              </Tabs>
            </Card>
          </motion.section>

          {/* Mobile App */}
          <motion.section variants={item} className="space-y-8">
            <h2 className="text-3xl font-bold mb-8">Mobile Experience</h2>
            <Card className="p-6">
              <div className="flex items-center justify-center min-h-[700px] bg-gradient-to-br from-pink-100/50 via-purple-100/30 to-blue-100/50 dark:from-pink-950/30 dark:via-purple-950/20 dark:to-blue-950/30 rounded-lg p-8" style={{ perspective: '1000px' }}>
                <MobileFrame>
                  <img
                    src={omgkawaiiMobileImage}
                    alt="OMG Kawaii Mobile App"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '32px'
                    }}
                  />
                </MobileFrame>
              </div>
              <div className="text-center mt-6 text-muted-foreground">
                <p>Native mobile app experience for iOS and Android</p>
              </div>
            </Card>
          </motion.section>

          {/* Key Features */}
          <motion.section variants={item} className="space-y-8">
            <h2 className="text-3xl font-bold">Key Features</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Globe className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Cross-Platform</h3>
                </div>
                <p className="text-muted-foreground">
                  Seamless experience across web and mobile platforms
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
                  Optimized mobile experience with native app features
                </p>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <ShoppingBag className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Easy Shopping</h3>
                </div>
                <p className="text-muted-foreground">
                  Intuitive shopping cart and checkout process
                </p>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Palette className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Kawaii Design</h3>
                </div>
                <p className="text-muted-foreground">
                  Cute and playful design language throughout
                </p>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Truck className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Order Tracking</h3>
                </div>
                <p className="text-muted-foreground">
                  Real-time order and shipping status updates
                </p>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Wishlist</h3>
                </div>
                <p className="text-muted-foreground">
                  Save favorite items for later purchase
                </p>
              </Card>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}