import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
}

export function ImageComparison({ beforeImage, afterImage }: ImageComparisonProps) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={showAfter ? 'after' : 'before'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <img
            src={showAfter ? afterImage : beforeImage}
            alt={showAfter ? 'After' : 'Before'}
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute bottom-4 right-4 z-10">
        <Button
          size="lg"
          className="font-medium bg-white text-black hover:bg-white/90 shadow-lg"
          onClick={() => setShowAfter(!showAfter)}
        >
          Show {showAfter ? 'Before' : 'After'}
        </Button>
      </div>
    </div>
  );
}