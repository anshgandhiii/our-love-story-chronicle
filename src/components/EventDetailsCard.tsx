import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, Shirt, UtensilsCrossed, X, Heart } from "lucide-react";
import { weddingConfig } from "@/config/weddingConfig";

interface EventDetailsCardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EventDetailsCard = ({ isOpen, onClose }: EventDetailsCardProps) => {
  const { event, couple } = weddingConfig;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const details = [
    { icon: Calendar, label: "Date", value: formatDate(event.date) },
    { icon: Clock, label: "Time", value: event.time },
    { icon: MapPin, label: "Venue", value: event.venue },
    { icon: MapPin, label: "Address", value: event.address },
    { icon: Shirt, label: "Dress Code", value: event.dressCode },
    { icon: UtensilsCrossed, label: "Event", value: event.dinner },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-w-md w-full"
            initial={{ scale: 0.8, opacity: 0, rotateZ: -5 }}
            animate={{ scale: 1, opacity: 1, rotateZ: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotateZ: 5 }}
            transition={{ type: "spring", damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Vintage invitation card */}
            <div className="relative bg-card rounded-lg shadow-2xl overflow-hidden">
              {/* Decorative border */}
              <div className="absolute inset-2 border-2 border-gold/30 rounded-lg pointer-events-none" />
              <div className="absolute inset-3 border border-gold/20 rounded-lg pointer-events-none" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Card content */}
              <div className="p-8">
                {/* Wax seal decoration */}
                <motion.div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 wax-seal scale-75"
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 0.75, rotate: 0 }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  <Heart className="w-5 h-5 text-rose-foreground fill-current" />
                </motion.div>

                {/* Header */}
                <motion.div
                  className="text-center mt-4 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="font-serif text-muted-foreground text-sm uppercase tracking-widest mb-2">
                    You are cordially invited to
                  </p>
                  <h2 className="font-elegant text-3xl text-gold mb-2">
                    Silver Anniversary Celebration
                  </h2>
                  <p className="font-handwritten text-2xl text-foreground">
                    {couple.partner1} & {couple.partner2}
                  </p>
                </motion.div>

                {/* Divider */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="h-px flex-1 bg-gold/30" />
                  <span className="text-gold">✦</span>
                  <span className="h-px flex-1 bg-gold/30" />
                </div>

                {/* Event details */}
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {details.map((detail, idx) => (
                    <motion.div
                      key={detail.label}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                    >
                      <detail.icon className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-serif text-xs text-muted-foreground uppercase tracking-wide">
                          {detail.label}
                        </p>
                        <p className="font-handwritten text-lg text-foreground">
                          {detail.value}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Bottom decoration */}
                <motion.div
                  className="text-center mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="font-elegant text-xl text-rose">
                    We hope to see you there 💕
                  </p>
                </motion.div>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-4 left-4 text-xl text-gold/40 font-elegant">❦</div>
              <div className="absolute bottom-4 right-4 text-xl text-gold/40 font-elegant transform scale-[-1]">❦</div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
