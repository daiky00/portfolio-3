import { motion } from "framer-motion";
import { Dumbbell, Gamepad } from "lucide-react";
import profileImage from '@/assets/profile-1.jpg';

export function Introduction() {
  return (
    <section className="py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-12"
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-48 h-48 mx-auto mb-8"
          >
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/10 bg-background">
              <img 
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Hi */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold"
          >
            Hi.
          </motion.h2>

          {/* First paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xl sm:text-2xl text-muted-foreground leading-relaxed"
          >
            I'm a Senior Frontend Developer/Designer based in Florida. I have a passion 
            for web development and I love to create new things for the web and mobile devices.
          </motion.p>

          {/* Second paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-xl sm:text-2xl text-muted-foreground leading-relaxed flex items-center justify-center gap-2 flex-wrap"
          >
            I enjoy turning complex problems into simple, beautiful and intuitive interfaces 
            with responsive design. When I'm not coding or pushing pixels, you'll find me in 
            the gym <Dumbbell className="inline-block h-6 w-6" /> or playing some video games{" "}
            <Gamepad className="inline-block h-6 w-6" />.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}