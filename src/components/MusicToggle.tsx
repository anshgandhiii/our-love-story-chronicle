"use client";

import { useRef, useState } from "react";

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTap = async () => {
    try {
      // Create audio ONLY on user tap (iOS requirement)
      if (!audioRef.current) {
        const audio = document.createElement("audio");
        audio.src = "/music.mp3"; // put music.mp3 in /public
        audio.loop = true;
        audio.volume = 1;

        document.body.appendChild(audio); // REQUIRED for iOS
        audioRef.current = audio;
      }

      if (audioRef.current.paused) {
        await audioRef.current.play(); // MUST be awaited
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    } catch (err) {
      console.error("Audio play failed:", err);
      alert("Tap once more to start music 🎵");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999,
      }}
    >
      <button
        onClick={handleTap}
        style={{
          padding: "14px 18px",
          fontSize: "16px",
          borderRadius: "999px",
          background: "#111",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        {isPlaying ? "⏸ Pause Music" : "▶️ Play Music"}
      </button>
    </div>
  );
}
