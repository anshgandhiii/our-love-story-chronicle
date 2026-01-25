import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { weddingConfig } from "@/config/weddingConfig";

interface ScrapbookPagesProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScrapbookPages = ({ isOpen, onClose }: ScrapbookPagesProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const { storyPages } = weddingConfig;

  const nextPage = () => {
    if (currentPage < storyPages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const pageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      rotateY: direction > 0 ? 15 : -15,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      rotateY: direction < 0 ? 15 : -15,
    }),
  };

  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const newPage = currentPage + newDirection;
    if (newPage >= 0 && newPage < storyPages.length) {
      setPage([newPage, newDirection]);
      setCurrentPage(newPage);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-card/80 rounded-full p-2 shadow-lg hover:bg-card transition-colors"
          >
            <X className="w-6 h-6 text-foreground" />
          </button>

          {/* Scrapbook container */}
          <div className="relative w-full max-w-md h-[70vh] max-h-[600px]">
            {/* Navigation arrows */}
            <button
              onClick={() => paginate(-1)}
              disabled={currentPage === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-card/90 rounded-full p-2 shadow-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-card transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>

            <button
              onClick={() => paginate(1)}
              disabled={currentPage === storyPages.length - 1}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-card/90 rounded-full p-2 shadow-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-card transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>

            {/* Pages */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentPage}
                custom={direction}
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0 bg-card rounded-lg page-shadow overflow-hidden"
              >
                {/* Paper texture background */}
                <div className="absolute inset-0 paper-texture opacity-50" />
                
                {/* Page content */}
                <div className="relative h-full p-6 flex flex-col">
                  {/* Page number */}
                  <div className="absolute top-4 right-4 font-handwritten text-muted-foreground text-sm">
                    {currentPage + 1} / {storyPages.length}
                  </div>

                  {/* Title */}
                  <motion.h2
                    className="font-elegant text-3xl text-gold text-center mb-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {storyPages[currentPage].title}
                  </motion.h2>

                  <motion.p
                    className="font-handwritten text-lg text-muted-foreground text-center mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {storyPages[currentPage].subtitle}
                  </motion.p>

                  {/* Photos grid - Polaroid style */}
                  <motion.div
                    className="flex-1 flex flex-col gap-4 items-center justify-center mb-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {storyPages[currentPage].images.map((image, idx) => (
                        <motion.div
                          key={idx}
                          className="polaroid"
                          style={{ 
                            "--rotation": `${idx % 2 === 0 ? -3 : 3}deg` 
                          } as React.CSSProperties}
                          whileHover={{ scale: 1.05, rotate: 0 }}
                          animate={{ 
                            rotate: [idx % 2 === 0 ? -2 : 2, idx % 2 === 0 ? -3 : 3, idx % 2 === 0 ? -2 : 2] 
                          }}
                          transition={{ duration: 4, repeat: Infinity }}
                        >
                          <div className="relative">
                            <div className="tape" />
                            <img
                              src={image}
                              alt={`Memory ${idx + 1}`}
                              className="w-28 h-28 object-cover bg-muted"
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    className="font-serif text-center text-foreground/80 italic leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    "{storyPages[currentPage].description}"
                  </motion.p>

                  {/* Decorative stickers */}
                  <motion.div
                    className="absolute bottom-4 left-4 text-2xl"
                    animate={{ rotate: [-5, 5, -5], y: [0, -3, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {currentPage === 0 && "✨"}
                    {currentPage === 1 && "📸"}
                    {currentPage === 2 && "👨‍👩‍👧‍👦"}
                    {currentPage === 3 && "🥂"}
                  </motion.div>

                  <motion.div
                    className="absolute top-20 right-4 text-xl"
                    animate={{ rotate: [5, -5, 5], scale: [1, 1.1, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    💕
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Page indicators */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
              {storyPages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setPage([idx, idx > currentPage ? 1 : -1]);
                    setCurrentPage(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentPage 
                      ? "bg-gold w-6" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
