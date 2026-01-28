"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/Tum Se Hi Jab We Met 128 Kbps.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const startMusic = () => {
    if (!audioRef.current) return;

    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
        setShowPrompt(false);
      })
      .catch(() => {
        // user denied or browser blocked
      });
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true));
    }
  };

  return (
    <>
      {/* Permission Prompt */}
      <AnimatePresence>
        {showPrompt && !isPlaying && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 text-center max-w-sm mx-4 shadow-xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
            >
              <h2 className="text-lg font-semibold mb-2">
                🎶 Enable Background Music?
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Tap below to enjoy soft background music during the celebration.
              </p>

              <button
                onClick={startMusic}
                className="px-6 py-2 rounded-full bg-gold text-white font-medium hover:opacity-90 transition"
              >
                Play Music
              </button>

              <button
                onClick={() => setShowPrompt(false)}
                className="block mt-3 text-sm text-gray-500 hover:underline"
              >
                Continue without music
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Music Toggle Button */}
      {!showPrompt && (
        <motion.button
          onClick={toggleMusic}
          className="fixed top-4 right-4 z-40 w-12 h-12 rounded-full bg-card shadow-lg border-2 border-gold/30 flex items-center justify-center text-gold"
          title={isPlaying ? "Mute music" : "Play music"}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          {isPlaying ? <Volume2 /> : <VolumeX />}
        </motion.button>
      )}
    </>
  );
};
