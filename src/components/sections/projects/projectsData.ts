import limacharlieBeforeImage from '@/assets/limacharliesite.jpg';
import limacharlieAfterImage from '@/assets/limacharliesite-after.jpg';
import namimlBeforeImage from '@/assets/namimlsite.jpg';
import omgkawaiiBeforeImage from '@/assets/omgkawaiisite.jpg';
import omgkawaiiAfterImage from '@/assets/omgkawaiisite-after.jpg';
import hiltiBeforeImage from '@/assets/hiltisite.jpg';
import otakuchanBeforeImage from '@/assets/otakuchansite.jpg';

export const projects = [
  {
    title: "Limacharlie",
    role: "Lead Frontend Engineer",
    description: "LimaCharlie is cybersecurity middleware that gives you full control and visibility over your security posture.",
    technologies: ["React", "TypeScript", "TanStack Query", 'TanStack Virtual', "TanStack Table", "Stripe", "Styled Components", "Vite", "Vitest", "pnpm", "Figma", "Storybook", "Node.js"],
    visitLink: "https://limacharlie.io",
    hasBeforeAfter: true,
    beforeImage: limacharlieBeforeImage,
    afterImage: limacharlieAfterImage,
    caseStudyPath: "/projects/limacharlie"
  },
  {
    title: "Nami ML",
    role: "Senior Frontend Engineer",
    description: "Nami is an end-to-end solution powered by on-device machine learning to accelerate your mobile app business.",
    technologies: ["React", "TypeScript", "TanStack Query", "Recharts", "Tailwind CSS", "Vite", "Vitest", "Node.js"],
    visitLink: "https://namiml.com",
    hasBeforeAfter: true,
    beforeImage: namimlBeforeImage,
    caseStudyPath: "/projects/nami"
  },
  {
    title: "Omg kawaii",
    role: "Co-Founder & CTO",
    description: "Our passion to make people smile provides us the motivation and the determination to rise this amazing plushies to a high level of quality.",
    technologies: ["React", "React Native", "Styled Components", "TanStack Query", "Vite", "Vitest", "pnpm", "Figma", "Storybook", "Node.js"],
    visitLink: "https://omgkawaii.com",
    hasBeforeAfter: true,
    beforeImage: omgkawaiiBeforeImage,
    afterImage: omgkawaiiAfterImage,
    caseStudyPath: "/projects/omgkawaii"
  },
  {
    title: "Ask Hilti",
    role: "Senior Frontend Developer/Designer",
    description: "Hilti was founded in 1941, and evolved from a small family company to the trusted global business we are today. Our aim is to build a better future.",
    technologies: ["Angular", "Typescript", "SCSS", "Cypress", "Storybook"],
    visitLink: "https://hilti.com",
    beforeImage: hiltiBeforeImage,
    caseStudyPath: "/projects/hilti"
  },
  {
    title: "Otakuchan",
    role: "Co-Founder & CEO",
    description: "Otakuchan.com is a retail experience created for fans of Anime, Games, Comics and Cartoons.",
    technologies: ["Next.js", "React", "Shopify", "TailwindCSS"],
    visitLink: "https://otakuchan.com",
    beforeImage: otakuchanBeforeImage
  }
];