import { createContext, useRef, useEffect, ReactNode, useState } from 'react';

interface AudioContextState {
	audioContext: AudioContext | null;
	analyzer: AnalyserNode | null;
	resumeContext: () => Promise<void>;
	initializeContext: () => void;
}

const AudioContextInstance = createContext<AudioContextState>({
	audioContext: null,
	analyzer: null,
	resumeContext: async () => {},
	initializeContext: () => {},
});

export function AudioContextProvider({ children }: { children: ReactNode }) {
	const audioContextRef = useRef<AudioContext | null>(null);
	const analyzerRef = useRef<AnalyserNode | null>(null);
	const [isInitialized, setIsInitialized] = useState(false);

	const initializeContext = () => {
		if (!audioContextRef.current && !isInitialized) {
			audioContextRef.current = new AudioContext();
			analyzerRef.current = audioContextRef.current.createAnalyser();
			analyzerRef.current.fftSize = 256;
			analyzerRef.current.smoothingTimeConstant = 0.7;
			analyzerRef.current.minDecibels = -90;
			analyzerRef.current.maxDecibels = -10;
			setIsInitialized(true);
		}
	};

	const resumeContext = async () => {
		if (audioContextRef.current?.state === 'suspended') {
			await audioContextRef.current.resume();
		}
	};

	useEffect(() => {
		return () => {
			audioContextRef.current?.close();
		};
	}, []);

	return (
		<AudioContextInstance.Provider
			value={{
				audioContext: audioContextRef.current,
				analyzer: analyzerRef.current,
				resumeContext,
				initializeContext,
			}}
		>
			{children}
		</AudioContextInstance.Provider>
	);
}
