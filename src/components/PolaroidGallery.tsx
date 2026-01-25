import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import { weddingConfig } from "@/config/weddingConfig";

export const PolaroidGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [sparklePosition, setSparklePosition] = useState({ x: 0, y: 0 });
  const { gallery } = weddingConfig;

  const handleImageClick = (idx: number, e: React.MouseEvent) => {
    setSparklePosition({ x: e.clientX, y: e.clientY });
    setSelectedImage(idx);
  };

  return (
    <section className="py-16 px-4">
      {/* Section title */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-elegant text-4xl text-gold mb-2">Our Memories 📸</h2>
        <p className="font-serif text-muted-foreground italic">Tap a photo to view</p>
      </motion.div>

      {/* Polaroid grid */}
      <div className="max-w-lg mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {gallery.map((photo, idx) => (
            <motion.button
              key={idx}
              className="polaroid cursor-pointer"
              style={{ "--rotation": `${photo.rotation}deg` } as React.CSSProperties}
              initial={{ opacity: 0, y: 30, rotate: photo.rotation }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 0,
                zIndex: 10,
                boxShadow: "0 15px 40px -6px rgba(0,0,0,0.25)"
              }}
              onClick={(e) => handleImageClick(idx, e)}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full aspect-square object-cover bg-muted"
              />
              <p className="font-handwritten text-center text-foreground mt-2 text-sm">
                {photo.caption}
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Sparkle effect on open */}
            <motion.div
              className="fixed pointer-events-none z-50 text-gold"
              style={{ left: sparklePosition.x, top: sparklePosition.y }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: [0, 2, 3], opacity: [1, 0.5, 0] }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="w-8 h-8 -translate-x-1/2 -translate-y-1/2" />
            </motion.div>

            {/* Close button */}
            <button
              className="absolute top-4 right-4 bg-card/20 rounded-full p-2 hover:bg-card/40 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6 text-card" />
            </button>

            {/* Large polaroid */}
            <motion.div
              className="bg-card p-3 pb-12 max-w-sm w-full shadow-2xl"
              initial={{ scale: 0.5, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.5, rotate: 10 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={gallery[selectedImage].src}
                alt={gallery[selectedImage].caption}
                className="w-full aspect-square object-cover bg-muted"
              />
              <p className="font-handwritten text-center text-foreground text-xl mt-4">
                {gallery[selectedImage].caption}
              </p>
              
              {/* Decorative hearts */}
              <motion.div
                className="absolute -top-4 -right-4 text-2xl"
                animate={{ rotate: [-10, 10, -10], y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                💕
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
