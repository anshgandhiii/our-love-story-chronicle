import { motion, AnimatePresence } from "framer-motion";
import { Heart, X } from "lucide-react";

interface InvitationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InvitationPopup = ({ isOpen, onClose }: InvitationPopupProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative bg-card rounded-lg p-8 max-w-sm w-full text-center shadow-2xl"
            initial={{ scale: 0.5, opacity: 0, rotateZ: -10 }}
            animate={{ scale: 1, opacity: 1, rotateZ: 0 }}
            exit={{ scale: 0.5, opacity: 0, rotateZ: 10 }}
            transition={{ type: "spring", damping: 15 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Decorative top */}
            <div className="flex justify-center mb-4">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-12 h-12 text-rose fill-rose" />
              </motion.div>
            </div>

            {/* Message */}
            <motion.h2
              className="font-elegant text-4xl text-gold mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              You're Invited!
            </motion.h2>

            <motion.p
              className="font-serif text-foreground/80 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Join us in celebrating 25 beautiful years of love and togetherness
            </motion.p>

            <motion.div
              className="flex justify-center gap-1 text-2xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              💕 💌 💕
            </motion.div>

            {/* Decorative corners */}
            <div className="absolute top-2 left-2 text-xl text-gold/30 font-elegant">❦</div>
            <div className="absolute top-2 right-8 text-xl text-gold/30 font-elegant transform scale-x-[-1]">❦</div>
            <div className="absolute bottom-2 left-2 text-xl text-gold/30 font-elegant transform scale-y-[-1]">❦</div>
            <div className="absolute bottom-2 right-2 text-xl text-gold/30 font-elegant transform scale-[-1]">❦</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
