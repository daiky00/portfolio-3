import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import AudioPlayer from 'react-h5-audio-player';
import { useState, useRef } from 'react';
import { AudioVisualizer } from '@/components/audio/AudioVisualizer';
import 'react-h5-audio-player/lib/styles.css';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<AudioPlayer>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="max-w-2xl mx-auto w-full"
    >
      <Card className="p-4 sm:p-6">
        {playerRef.current?.audio?.current && (
          <AudioVisualizer
            audio={playerRef.current.audio.current}
            isPlaying={isPlaying}
          />
        )}

        <AudioPlayer
          ref={playerRef}
          autoPlay
          autoPlayAfterSrcChange={false}
          showJumpControls={false}
          src="/lofi-study.mp3"
          layout="horizontal"
          className="rhap_container"
          customProgressBarSection={[
            'CURRENT_TIME',
            'PROGRESS_BAR',
            'DURATION',
          ]}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      </Card>
    </motion.div>
  );
}