import React from "react";
import { useRef } from "react"
import { useEffect, useState } from "react";
import "./AudioPlayer.css";

function AudioPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    audioRef.current.play().catch(() => { setIsPlaying(true) });
  }, []);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="AudioPlayer">
      <audio
        ref={audioRef}
        src="/assets/audio/banyoles.mp3"
        loop
      />

      <button onClick={toggleAudio} className={isPlaying ? "playing" : "paused"}>
        <img src={isPlaying ? "/assets/icons/pause.svg" : "/assets/icons/play.svg"} />
      </button>
    </div >
  );
}

export default AudioPlayer;
