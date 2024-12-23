import { motion } from "framer-motion";
import { SkillCard } from "./SkillCard";
import { skillsList } from "./skills-data";

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

export function SkillsGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
    >
      {skillsList.map((tech) => (
        <SkillCard
          key={tech.name}
          name={tech.name}
          Icon={tech.Icon}
          variants={item}
        />
      ))}
    </motion.div>
  );
}

export default SkillsGrid;