import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Heart } from "lucide-react";
import { weddingConfig } from "@/config/weddingConfig";

export const SurpriseButton = () => {
  const [showQuote, setShowQuote] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);
  const { surpriseQuotes } = weddingConfig;

  const handleClick = () => {
    setCurrentQuote(Math.floor(Math.random() * surpriseQuotes.length));
    setShowQuote(true);
  };

  return (
    <>
      <motion.button
        onClick={handleClick}
        className="fixed bottom-20 right-4 z-40 bg-rose rounded-full p-3 shadow-lg border-2 border-rose-foreground/20"
        whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          boxShadow: [
            "0 4px 15px rgba(0,0,0,0.2)",
            "0 4px 25px rgba(200,100,150,0.4)",
            "0 4px 15px rgba(0,0,0,0.2)",
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Sparkles className="w-6 h-6 text-rose-foreground" />
      </motion.button>

      {/* Quote popup */}
      <AnimatePresence>
        {showQuote && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowQuote(false)}
          >
            <motion.div
              className="relative bg-card rounded-lg p-8 max-w-sm w-full text-center shadow-2xl"
              initial={{ scale: 0.5, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.5, rotate: 10 }}
              transition={{ type: "spring", damping: 15 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setShowQuote(false)}
                className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Sparkle decoration */}
              <motion.div
                className="absolute -top-4 left-1/2 -translate-x-1/2"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-8 h-8 text-gold" />
              </motion.div>

              {/* Quote */}
              <div className="mt-4">
                <Heart className="w-8 h-8 text-rose fill-rose mx-auto mb-4" />
                <p className="font-handwritten text-xl text-foreground leading-relaxed">
                  {surpriseQuotes[currentQuote]}
                </p>
              </div>

              {/* Corners */}
              <div className="absolute top-2 left-2 text-lg text-gold/30">✨</div>
              <div className="absolute bottom-2 right-2 text-lg text-gold/30">✨</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
