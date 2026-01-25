import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, Send } from "lucide-react";
import { weddingConfig } from "@/config/weddingConfig";
import { useToast } from "@/hooks/use-toast";

interface RSVPFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RSVPForm = ({ isOpen, onClose }: RSVPFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "1",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const { rsvp } = weddingConfig;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after showing thank you
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", guests: "1", message: "" });
      onClose();
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Letter form */}
            <div className="letter-paper rounded-lg shadow-2xl overflow-hidden">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 sm:p-8">
                {/* Thank you state */}
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="thanks"
                      className="text-center py-8"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {/* Wax seal animation */}
                      <motion.div
                        className="wax-seal mx-auto mb-6"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ 
                          type: "spring", 
                          damping: 10, 
                          delay: 0.2 
                        }}
                      >
                        <Heart className="w-6 h-6 text-rose-foreground fill-current" />
                      </motion.div>

                      <motion.h3
                        className="font-elegant text-3xl text-gold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        Thank You!
                      </motion.h3>

                      <motion.p
                        className="font-serif text-foreground/80"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        Your RSVP has been received with love ❤️
                      </motion.p>
                    </motion.div>
                  ) : (
                    <motion.div key="form" exit={{ opacity: 0 }}>
                      {/* Header */}
                      <div className="text-center mb-6">
                        <h3 className="font-elegant text-3xl text-gold mb-2">
                          Send Your RSVP ✍️
                        </h3>
                        <p className="font-serif text-sm text-muted-foreground">
                          Please respond by{" "}
                          {new Date(rsvp.deadline).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>

                      {/* Form */}
                      <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name */}
                        <div>
                          <label className="block font-handwritten text-lg text-foreground mb-1">
                            Your Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-card border-2 border-border rounded-md font-serif focus:outline-none focus:border-gold transition-colors"
                            placeholder="Enter your name"
                          />
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="block font-handwritten text-lg text-foreground mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-card border-2 border-border rounded-md font-serif focus:outline-none focus:border-gold transition-colors"
                            placeholder="Your contact number"
                          />
                        </div>

                        {/* Guests */}
                        <div>
                          <label className="block font-handwritten text-lg text-foreground mb-1">
                            Number of Guests
                          </label>
                          <select
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-card border-2 border-border rounded-md font-serif focus:outline-none focus:border-gold transition-colors"
                          >
                            {Array.from({ length: rsvp.maxGuests }, (_, i) => (
                              <option key={i + 1} value={i + 1}>
                                {i + 1} {i === 0 ? "Guest" : "Guests"}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Message */}
                        <div>
                          <label className="block font-handwritten text-lg text-foreground mb-1">
                            A Message for the Couple 💕
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={3}
                            className="w-full px-4 py-2 bg-card border-2 border-border rounded-md font-serif focus:outline-none focus:border-gold transition-colors resize-none"
                            placeholder="Share your wishes..."
                          />
                        </div>

                        {/* Submit button */}
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn-rose w-full rounded-md flex items-center justify-center gap-2 disabled:opacity-70"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {isSubmitting ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            >
                              <Heart className="w-5 h-5" />
                            </motion.div>
                          ) : (
                            <>
                              <Send className="w-5 h-5" />
                              <span>Seal & Send 💌</span>
                            </>
                          )}
                        </motion.button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-2 left-2 text-lg text-gold/30 font-elegant">❦</div>
              <div className="absolute bottom-2 right-2 text-lg text-gold/30 font-elegant transform scale-[-1]">❦</div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
