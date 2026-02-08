'use client';

import { useState, useEffect } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { voiceOverService } from '@/lib/voiceover';

interface VoiceOverButtonProps {
  text: string;
  voiceName?: string;
  autoPlay?: boolean;
}

export function VoiceOverButton({ text, voiceName, autoPlay = false }: VoiceOverButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    setIsSupported(voiceOverService.isSupported());
  }, []);

  useEffect(() => {
    if (autoPlay && voiceOverService.isSupported() && hasInteracted) {
      // Only autoplay after user has interacted
      const timer = setTimeout(() => {
        handlePlay();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [autoPlay, hasInteracted, text, voiceName]);

  const enableInteraction = () => {
    setHasInteracted(true);
  };

  const handlePlay = async () => {
    if (!isSupported) return;

    try {
      setIsPlaying(true);
      
      // For pre-recorded, text will be empty
      await voiceOverService.speak({ 
        text: text || '',
        voiceName: voiceName || undefined,
      });
      
      setIsPlaying(false);
    } catch (error) {
      console.error('Voice playback error:', error);
      setIsPlaying(false);
    }
  };

  // Expose enable function to parent via window event
  useEffect(() => {
    const handler = () => enableInteraction();
    window.addEventListener('enable-voice-autoplay', handler);
    return () => window.removeEventListener('enable-voice-autoplay', handler);
  }, []);

  const handleStop = () => {
    voiceOverService.stop();
    setIsPlaying(false);
  };

  if (!isSupported) {
    return null;
  }

  return (
    <button
      onClick={isPlaying ? handleStop : handlePlay}
      className="fixed top-4 right-4 z-50 bg-wedding-gold hover:bg-wedding-darkGold text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label={isPlaying ? 'Stop voice-over' : 'Play voice-over'}
    >
      {isPlaying ? (
        <FaVolumeMute className="w-6 h-6" />
      ) : (
        <FaVolumeUp className="w-6 h-6" />
      )}
    </button>
  );
}
