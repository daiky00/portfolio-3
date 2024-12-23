import { motion } from 'framer-motion';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import { useState, useRef } from 'react';
import { AudioVisualizer } from '@/components/audio/AudioVisualizer';
import 'react-h5-audio-player/lib/styles.css';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<AudioPlayer>(null);

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-t h-14"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="h-14 flex items-center">
          <AudioPlayer
            ref={playerRef}
            autoPlay
            autoPlayAfterSrcChange={false}
            showJumpControls={false}
            src="/lofi-study.mp3"
            layout="horizontal"
            className="rhap_container flex-1"
            customProgressBarSection={[
              RHAP_UI.CURRENT_TIME,
              RHAP_UI.PROGRESS_BAR,
              RHAP_UI.DURATION
            ]}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            customControlsSection={[
              RHAP_UI.MAIN_CONTROLS,
              <div key="visualizer" className="flex-1 h-8 mx-2">
                {playerRef.current?.audio?.current && (
                  <AudioVisualizer
                    audio={playerRef.current.audio.current}
                    isPlaying={isPlaying}
                    className="w-full h-full"
                  />
                )}
              </div>,
              RHAP_UI.VOLUME_CONTROLS
            ]}
          />
        </div>
      </div>
    </motion.div>
  );
}