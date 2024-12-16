import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface SkillCardProps {
  name: string;
  icon: string;
  variants: any;
}

export function SkillCard({ name, icon, variants }: SkillCardProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <motion.div
            variants={variants}
            whileHover={{ scale: 1.1 }}
            className="p-4 rounded-xl bg-card hover:bg-accent flex items-center justify-center relative group"
          >
            <img src={icon} className="h-16 w-16 object-contain" alt={name} />
          </motion.div>
        </TooltipTrigger>
        <TooltipContent>{name}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}