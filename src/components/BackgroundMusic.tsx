import React, { useEffect, useRef, useState } from 'react';
import { User } from '../types';

interface BackgroundMusicProps {
  user: User;
  isMuted: boolean;
}

export const BackgroundMusic: React.FC<BackgroundMusicProps> = ({
  user,
  isMuted,
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Music playlists for each user (using placeholder URLs - replace with actual music files)
  const musicPlaylists = {
    Vinh: [
      '/public/audio/vinh/1.mp3',
      '/public/audio/vinh/2.mp3', // Placeholder - replace with actual files
    ],
    STD: [
      '/public/audio/std/1.mp3',
      '/public/audio/std/2.mp3', // Placeholder - replace with actual files
    ],
    Vana: [
      '/public/audio/vana/1.mp3',
      '/public/audio/vana/2.mp3', // Placeholder - replace with actual files
    ],
    None: []
  };

  useEffect(() => {
    if (user === 'None' || !musicPlaylists[user].length) {
      return;
    }

    const audio = audioRef.current;
    if (!audio) return;

    const currentPlaylist = musicPlaylists[user];
    const randomTrack = currentPlaylist[Math.floor(Math.random() * currentPlaylist.length)];

    audio.src = randomTrack;
    audio.volume = 0.3; // Low volume for background ambiance
    audio.loop = true;

    const handleCanPlay = () => {
      setIsLoading(false);
      setHasError(false);
      if (!isMuted) {
        audio.play().catch(() => {
          // Handle autoplay restrictions
          setHasError(true);
        });
      }
    };

    const handleError = () => {
      setIsLoading(false);
      setHasError(true);
      console.warn(`Failed to load music for user: ${user}`);
    };

    audio.addEventListener('canplaythrough', handleCanPlay);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('canplaythrough', handleCanPlay);
      audio.removeEventListener('error', handleError);
      audio.pause();
    };
  }, [user]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || user === 'None' || hasError) return;

    if (isMuted) {
      audio.pause();
    } else if (!isLoading) {
      audio.play().catch(() => {
        setHasError(true);
      });
    }
  }, [isMuted, isLoading, hasError, user]);

  if (user === 'None') {
    return null;
  }

  return (
    <audio
      ref={audioRef}
      preload="auto"
      style={{ display: 'none' }}
    />
  );
};