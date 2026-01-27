import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, PartyPopper } from "lucide-react";
import { weddingConfig } from "@/config/weddingConfig";
import { useToast } from "@/hooks/use-toast";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [showPopup, setShowPopup] = useState(false);
  const { toast } = useToast();
  const { event, taglines } = weddingConfig;

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Use 24-hour format time for proper parsing
      const eventDate = new Date(`${event.date}T${event.time}:00`);
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [event.date, event.time]);

  const handleTimerClick = () => {
    toast({
      title: "Soon we celebrate together! 🥂✨",
      description: "Mark your calendar and get ready to dance!",
    });
  };

  const timeBlocks = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <section className="py-16 px-4">
      <motion.div
        className="max-w-lg mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Clock className="w-5 h-5 text-gold" />
          <h2 className="font-elegant text-3xl text-gold">
            {taglines.countdown}
          </h2>
        </motion.div>

        <p className="font-serif text-muted-foreground mb-8">
          {new Date(event.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })} • {event.displayTime}
        </p>

        {/* Countdown blocks */}
        <motion.button
          onClick={handleTimerClick}
          className="w-full cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            {timeBlocks.map((block, idx) => (
              <motion.div
                key={block.label}
                className="bg-card rounded-lg p-3 sm:p-4 shadow-lg border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <motion.div
                  key={block.value}
                  className="font-handwritten text-3xl sm:text-4xl text-foreground"
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {block.value.toString().padStart(2, "0")}
                </motion.div>
                <div className="font-serif text-xs text-muted-foreground uppercase tracking-wide mt-1">
                  {block.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.button>

        {/* Tap hint */}
        <motion.p
          className="font-handwritten text-muted-foreground mt-4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Tap the timer! ✨
        </motion.p>

        {/* Decorative elements */}
        <motion.div
          className="flex justify-center gap-4 mt-6 text-2xl"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span>🥂</span>
          <PartyPopper className="w-6 h-6 text-gold" />
          <span>🎉</span>
        </motion.div>
      </motion.div>
    </section>
  );
};
