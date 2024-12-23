import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-0 overflow-hidden">
      {/* Animated geometric shapes */}
      <div className="absolute inset-0">
        {/* Large rotating square */}
        <motion.div
          className="absolute left-1/4 top-1/4 h-[40vw] w-[40vw] origin-center border-2 border-blue-500/30 rounded-3xl bg-gradient-to-br from-blue-500/5 to-purple-500/5"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />

        {/* Floating circles */}
        <motion.div
          className="absolute right-1/4 top-1/3 h-[30vw] w-[30vw] rounded-full border-2 border-pink-500/30 bg-gradient-to-tr from-pink-500/5 to-orange-500/5"
          animate={{
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Gradient overlays */}
        <motion.div
          className="absolute left-0 top-0 h-screen w-1/2 bg-gradient-to-r from-primary/10 to-transparent"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-0 top-0 h-screen w-1/2 bg-gradient-to-l from-secondary/10 to-transparent"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        {/* Small floating elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute h-12 w-12 border-2 rounded-lg ${
              i % 4 === 0 ? 'border-blue-500/30 bg-blue-500/5' :
              i % 4 === 1 ? 'border-purple-500/30 bg-purple-500/5' :
              i % 4 === 2 ? 'border-pink-500/30 bg-pink-500/5' :
              'border-orange-500/30 bg-orange-500/5'
            }`}
            style={{
              left: `${25 + Math.random() * 50}%`,
              top: `${25 + Math.random() * 50}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              y: {
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              },
              rotate: {
                duration: 10 + Math.random() * 5,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 7 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              },
            }}
          />
        ))}

        {/* Diagonal lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className={`absolute h-0.5 w-[40vw] bg-gradient-to-r from-transparent ${
              i === 0 ? 'via-blue-500/30' :
              i === 1 ? 'via-purple-500/30' :
              i === 2 ? 'via-pink-500/30' :
              i === 3 ? 'via-orange-500/30' :
              'via-green-500/30'
            } to-transparent`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              transform: "rotate(-45deg)",
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </div>
  );
}