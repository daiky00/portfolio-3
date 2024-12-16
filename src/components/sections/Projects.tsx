import { motion } from 'framer-motion';
import { ProjectCard } from './projects/ProjectCard';
import { projects } from './projects/projectsData';

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

export function Projects() {
  return (
    <section className="py-16">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container mx-auto grid gap-16"
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={item}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}