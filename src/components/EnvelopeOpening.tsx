import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface EnvelopeOpeningProps {
  onOpen: () => void;
}

export const EnvelopeOpening = ({ onOpen }: EnvelopeOpeningProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center paper-texture"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative corner flourishes */}
      <div className="absolute top-8 left-8 text-4xl text-gold/40 font-elegant">❦</div>
      <div className="absolute top-8 right-8 text-4xl text-gold/40 font-elegant transform scale-x-[-1]">❦</div>
      <div className="absolute bottom-8 left-8 text-4xl text-gold/40 font-elegant transform scale-y-[-1]">❦</div>
      <div className="absolute bottom-8 right-8 text-4xl text-gold/40 font-elegant transform scale-[-1]">❦</div>

      <motion.button
        onClick={onOpen}
        className="relative cursor-pointer group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {/* Envelope */}
        <div className="relative w-72 h-48 sm:w-80 sm:h-52">
          {/* Envelope body */}
          <div className="absolute inset-0 envelope rounded-lg shadow-2xl overflow-hidden">
            {/* Envelope back */}
            <div className="absolute inset-0 bg-gradient-to-b from-envelope to-paper-dark" />
            
            {/* Envelope flap (top) */}
            <div 
              className="absolute top-0 left-0 right-0 h-1/2 origin-top"
              style={{
                background: "linear-gradient(180deg, hsl(35 40% 72%) 0%, hsl(35 35% 68%) 100%)",
                clipPath: "polygon(0 0, 50% 100%, 100% 0)",
              }}
            />
            
            {/* Inner shadow for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            
            {/* Wax seal */}
            <motion.div
              className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 wax-seal"
              animate={{ 
                scale: [1, 1.05, 1],
                boxShadow: [
                  "inset 2px 2px 6px rgba(200,100,100,0.5), inset -2px -2px 6px rgba(100,30,30,0.5), 0 4px 12px rgba(100,30,30,0.4)",
                  "inset 2px 2px 8px rgba(200,100,100,0.6), inset -2px -2px 8px rgba(100,30,30,0.6), 0 6px 16px rgba(100,30,30,0.5)",
                  "inset 2px 2px 6px rgba(200,100,100,0.5), inset -2px -2px 6px rgba(100,30,30,0.5), 0 4px 12px rgba(100,30,30,0.4)",
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-6 h-6 text-rose-foreground fill-current" />
            </motion.div>
          </div>

          {/* Decorative border */}
          <div className="absolute -inset-2 border-2 border-gold/20 rounded-xl pointer-events-none" />
        </div>

        {/* Tap instruction */}
        <motion.p
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 font-handwritten text-xl text-foreground/70 whitespace-nowrap"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Tap to open 💌
        </motion.p>
      </motion.button>

      {/* Title above envelope */}
      <motion.div
        className="absolute top-[15%] text-center px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <p className="font-elegant text-3xl sm:text-4xl text-foreground/80 mb-2">
          To our loved ones…
        </p>
        <div className="flex items-center justify-center gap-2 text-rose">
          <span className="text-gold">✦</span>
          <Heart className="w-4 h-4 fill-rose" />
          <span className="text-gold">✦</span>
        </div>
      </motion.div>
    </motion.div>
  );
};
