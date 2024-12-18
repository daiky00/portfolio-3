import { useEffect, useRef } from 'react';

interface AudioVisualizerProps {
  audio: HTMLAudioElement;
  isPlaying: boolean;
  className?: string;
}

const BAR_COUNT = 16;
const MIN_HEIGHT = 4;

export function AudioVisualizer({ audio, isPlaying, className }: AudioVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const analyzerRef = useRef<AnalyserNode | null>(null);
  const rafRef = useRef<number | null>(null);
  const barWidth = useRef<number>(0);

  useEffect(() => {
    if (!audio || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d')!;
    
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize audio context and analyzer
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContext();
        sourceRef.current = audioContextRef.current.createMediaElementSource(audio);
        analyzerRef.current = audioContextRef.current.createAnalyser();
        analyzerRef.current.fftSize = 256;
        sourceRef.current.connect(analyzerRef.current);
        analyzerRef.current.connect(audioContextRef.current.destination);
      }

      barWidth.current = canvas.offsetWidth / BAR_COUNT;
    } catch (error) {
      console.error('Audio visualization error:', error);
    }

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [audio]);

  useEffect(() => {
    if (!analyzerRef.current || !canvasRef.current || !isPlaying) {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d')!;
    const analyzer = analyzerRef.current;
    const dataArray = new Uint8Array(analyzer.frequencyBinCount);
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;

    const draw = () => {
      rafRef.current = requestAnimationFrame(draw);

      analyzer.getByteFrequencyData(dataArray);
      ctx.clearRect(0, 0, width, height);

      const barWidth = width / BAR_COUNT;
      
      for (let i = 0; i < BAR_COUNT; i++) {
        const value = dataArray[i];
        const barHeight = Math.max((value / 255) * height * 0.8, MIN_HEIGHT);
        const x = i * barWidth;
        const hue = (i / BAR_COUNT) * 360;
        
        // Center the bars vertically
        const y = (height - barHeight) / 2;
        
        // Create gradient
        const gradient = ctx.createLinearGradient(x, y, x, y + barHeight);
        gradient.addColorStop(0, `hsla(${hue}, 100%, 70%, 0.8)`);
        gradient.addColorStop(1, `hsla(${hue}, 100%, 50%, 0.4)`);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barWidth - 0.5, barHeight);
      }
    };

    draw();

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isPlaying]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: '100%', height: '100%', opacity: isPlaying ? 0.8 : 0.3 }}
    />
  );
}