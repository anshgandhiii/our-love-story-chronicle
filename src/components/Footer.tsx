import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { weddingConfig } from "@/config/weddingConfig";

export const Footer = () => {
  const { couple } = weddingConfig;

  return (
    <footer className="py-12 px-4 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-16 bg-gold/40" />
          <Heart className="w-4 h-4 text-rose fill-rose" />
          <span className="h-px w-16 bg-gold/40" />
        </div>

        {/* Names */}
        <p className="font-elegant text-2xl text-gold mb-2">
          {couple.partner1} & {couple.partner2}
        </p>

        {/* Year */}
        <p className="font-handwritten text-xl text-muted-foreground mb-4">
          {couple.yearsMarried} Years of Love
        </p>

        {/* Made with love */}
        <p className="font-serif text-sm text-muted-foreground flex items-center justify-center gap-1">
          Made with <Heart className="w-3 h-3 text-rose fill-rose inline" /> for our celebration
        </p>

        {/* Decorative flourish */}
        <div className="mt-6 text-2xl text-gold/40 font-elegant">
          ❧ ❦ ❧
        </div>
      </motion.div>
    </footer>
  );
};
