import { createContext, useContext, useRef, useEffect, ReactNode } from 'react';

interface AudioContextState {
  audioContext: AudioContext | null;
  analyzer: AnalyserNode | null;
  resumeContext: () => Promise<void>;
}

const AudioContextInstance = createContext<AudioContextState>({
  audioContext: null,
  analyzer: null,
  resumeContext: async () => {},
});

export const useAudioContext = () => {
  const context = useContext(AudioContextInstance);
  if (!context) {
    throw new Error('useAudioContext must be used within an AudioContextProvider');
  }
  return context;
};

export function AudioContextProvider({ children }: { children: ReactNode }) {
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyzerRef = useRef<AnalyserNode | null>(null);

  useEffect(() => {
    audioContextRef.current = new AudioContext();
    analyzerRef.current = audioContextRef.current.createAnalyser();
    analyzerRef.current.fftSize = 256;
    analyzerRef.current.smoothingTimeConstant = 0.7;
    analyzerRef.current.minDecibels = -90;
    analyzerRef.current.maxDecibels = -10;

    return () => {
      audioContextRef.current?.close();
    };
  }, []);

  const resumeContext = async () => {
    if (audioContextRef.current?.state === 'suspended') {
      await audioContextRef.current.resume();
    }
  };

  return (
    <AudioContextInstance.Provider
      value={{
        audioContext: audioContextRef.current,
        analyzer: analyzerRef.current,
        resumeContext,
      }}
    >
      {children}
    </AudioContextInstance.Provider>
  );
}