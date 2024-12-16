import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { StyledIcon } from '@styled-icons/styled-icon';

interface SkillCardProps {
  name: string;
  Icon: StyledIcon;
  variants: any;
}

export function SkillCard({ name, Icon, variants }: SkillCardProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <motion.div
            variants={variants}
            whileHover={{ scale: 1.1 }}
            className="p-4 rounded-xl bg-card hover:bg-accent flex items-center justify-center relative group"
          >
            <Icon size={32} />
          </motion.div>
        </TooltipTrigger>
        <TooltipContent>{name}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}