import React, { useState, useEffect, useRef } from "react";

const useAudio = url => {
  const audio = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio("") : undefined
  );
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

export default useAudio;