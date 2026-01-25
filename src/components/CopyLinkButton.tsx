import { useState } from "react";
import { motion } from "framer-motion";
import { Link, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const CopyLinkButton = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast({
        title: "Link Copied! 💌",
        description: "Share the love with your friends and family!",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Oops!",
        description: "Could not copy the link. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <motion.button
      onClick={handleCopy}
      className="fixed bottom-4 right-4 z-40 bg-card rounded-full p-3 shadow-lg border border-border flex items-center gap-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {copied ? (
        <Check className="w-5 h-5 text-green-600" />
      ) : (
        <Link className="w-5 h-5 text-foreground" />
      )}
      <span className="font-handwritten text-sm text-foreground pr-1">
        {copied ? "Copied!" : "Copy Link"}
      </span>
    </motion.button>
  );
};
