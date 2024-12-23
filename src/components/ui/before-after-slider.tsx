import { useState } from 'react';
import { cn } from '@/lib/utils';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

export function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  return (
    <div
      className="relative w-full h-full cursor-ew-resize select-none overflow-hidden bg-black/5"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {/* Before image */}
      <img
        src={beforeImage}
        alt="Before"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* After image */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={afterImage}
          alt="After"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: `${100 / (sliderPosition / 100)}%` }}
        />
      </div>

      {/* Slider handle */}
      <div
        className="absolute inset-y-0"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute inset-y-0 -left-px w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)]" />
        <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-white/10 backdrop-blur shadow-[0_0_10px_rgba(0,0,0,0.3)]" />
      </div>

      {/* Labels */}
      <div className="pointer-events-none absolute inset-0 flex">
        <div
          className={cn(
            "flex-1 transition-opacity duration-200",
            sliderPosition < 10 && "opacity-0"
          )}
        >
          <span className="absolute left-4 top-4 rounded-full bg-black/50 px-2 py-1 text-xs font-medium text-white backdrop-blur">
            Before
          </span>
        </div>
        <div
          className={cn(
            "flex-1 transition-opacity duration-200",
            sliderPosition > 90 && "opacity-0"
          )}
        >
          <span className="absolute right-4 top-4 rounded-full bg-black/50 px-2 py-1 text-xs font-medium text-white backdrop-blur">
            After
          </span>
        </div>
      </div>
    </div>
  );
}