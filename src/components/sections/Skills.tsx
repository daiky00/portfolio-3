import { motion } from "framer-motion";
import { SkillsGrid } from "./skills/SkillsGrid";

export function Skills() {
  return (
    <section className="py-16">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          What I can do
        </motion.h2>
        <SkillsGrid />
      </div>
    </section>
  );
}