import { motion } from "framer-motion";
import { Heart, BookOpen, Calendar, Mail } from "lucide-react";
import { weddingConfig } from "@/config/weddingConfig";

interface MainLetterProps {
  onReadStory: () => void;
  onEventDetails: () => void;
  onRSVP: () => void;
}

export const MainLetter = ({ onReadStory, onEventDetails, onRSVP }: MainLetterProps) => {
  const { couple, taglines } = weddingConfig;

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Letter paper effect */}
      <motion.div
        className="letter-paper max-w-lg w-full mx-auto p-8 sm:p-12 rounded-sm relative"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {/* Tape decoration */}
        <div className="tape" />
        
        {/* Title */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex justify-center mb-4">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Heart className="w-8 h-8 text-rose fill-rose/50" />
            </motion.div>
          </div>
          
          <h1 className="font-elegant text-5xl sm:text-6xl text-gold mb-4">
            {couple.yearsMarried} Years of Love
          </h1>
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-gold/50" />
            <span className="text-gold">✦</span>
            <span className="h-px w-12 bg-gold/50" />
          </div>
        </motion.div>

        {/* Couple Names */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="font-handwritten text-4xl sm:text-5xl text-foreground">
            {couple.partner1}
            <span className="text-rose mx-3">&</span>
            {couple.partner2}
          </p>
        </motion.div>

        {/* Romantic tagline */}
        <motion.p
          className="text-center font-serif text-lg text-muted-foreground italic mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          "{taglines.hero}"
        </motion.p>

        {/* Decorative divider */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-2 text-gold/60">
            <span>❧</span>
            <Heart className="w-4 h-4 fill-rose text-rose" />
            <span className="transform scale-x-[-1]">❧</span>
          </div>
        </div>

        {/* Action buttons */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <button
            onClick={onReadStory}
            className="btn-vintage rounded-md flex items-center justify-center gap-3 w-full"
          >
            <BookOpen className="w-5 h-5 text-gold" />
            <span>Read Our Story 📖</span>
          </button>

          <button
            onClick={onEventDetails}
            className="btn-vintage rounded-md flex items-center justify-center gap-3 w-full"
          >
            <Calendar className="w-5 h-5 text-gold" />
            <span>See Event Details 🕯️</span>
          </button>

          <button
            onClick={onRSVP}
            className="btn-rose rounded-md flex items-center justify-center gap-3 w-full"
          >
            <Mail className="w-5 h-5" />
            <span>RSVP 💌</span>
          </button>
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          className="flex justify-center mt-8 text-2xl text-rose/60"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          💕
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
