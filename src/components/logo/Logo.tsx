import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className, size = 48 }: LogoProps) {
  const scale = size / 48; // Base size is 48px

  return (
    <div 
      className={cn(
        "relative font-black tracking-tighter",
        className
      )}
      style={{
        width: size,
        height: size
      }}
    >
      {/* Background circle */}
      <div 
        className="absolute inset-0 rounded-full border-2 border-primary/10 dark:border-primary/5"
      />
      
      {/* Text with gradient and glow */}
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{
          fontSize: `${24 * scale}px`,
        }}
      >
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient relative font-bold">
          FP
          <div className="absolute inset-0 blur-sm bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50 bg-clip-text text-transparent">
            FP
          </div>
        </span>
      </div>
    </div>
  );
}