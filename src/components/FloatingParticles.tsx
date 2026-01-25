import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

interface Particle {
  id: number;
  x: number;
  y: number;
  type: "heart" | "sparkle" | "dust";
  size: number;
  duration: number;
  delay: number;
}

interface ClickParticle {
  id: number;
  x: number;
  y: number;
}

export const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [clickParticles, setClickParticles] = useState<ClickParticle[]>([]);

  // Generate initial floating particles
  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 20; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        type: Math.random() > 0.7 ? "heart" : Math.random() > 0.5 ? "sparkle" : "dust",
        size: Math.random() * 8 + 4,
        duration: Math.random() * 4 + 4,
        delay: Math.random() * 2,
      });
    }
    setParticles(newParticles);
  }, []);

  // Handle click anywhere for sparkle effect
  const handleClick = useCallback((e: MouseEvent) => {
    const id = Date.now();
    const newParticle: ClickParticle = {
      id,
      x: e.clientX,
      y: e.clientY,
    };
    setClickParticles((prev) => [...prev, newParticle]);
    
    // Remove after animation
    setTimeout(() => {
      setClickParticles((prev) => prev.filter((p) => p.id !== id));
    }, 1000);
  }, []);

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [handleClick]);

  return (
    <>
      {/* Floating background particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, particle.type === "heart" ? 10 : -5, 0],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, particle.type === "heart" ? 10 : -10, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {particle.type === "heart" ? (
              <Heart
                className="text-rose fill-rose/30"
                style={{ width: particle.size, height: particle.size }}
              />
            ) : particle.type === "sparkle" ? (
              <span
                className="text-gold animate-sparkle"
                style={{ fontSize: particle.size }}
              >
                ✨
              </span>
            ) : (
              <div
                className="rounded-full bg-gold/30"
                style={{ width: particle.size / 2, height: particle.size / 2 }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Click ripple hearts */}
      <AnimatePresence>
        {clickParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="fixed pointer-events-none z-50"
            style={{ left: particle.x, top: particle.y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 2] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Heart className="text-rose fill-rose -translate-x-1/2 -translate-y-1/2 w-6 h-6" />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
};
