import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedBackground } from "./AnimatedBackground";

interface PageHeroProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export function PageHero({ title, description, children, className }: PageHeroProps) {
  return (
    <section className={cn("relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] overflow-hidden flex items-center justify-center", className)}>
      {/* Animated background elements */}
      <AnimatedBackground />

      {/* Content */}
      <div className="container relative z-10 mt-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-[800px] text-center px-4 py-6 sm:py-8 md:py-12"
        >
          <h1 className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl text-muted-foreground max-w-[600px] mx-auto">
              {description}
            </p>
          )}
          <div className="space-y-3 sm:space-y-0 sm:space-x-4">
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  );
}