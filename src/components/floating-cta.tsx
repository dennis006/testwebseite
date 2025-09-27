import { motion } from "framer-motion";
import { Sparkle } from "lucide-react";

import { Button } from "./ui/button";

export function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
      className="pointer-events-none fixed inset-x-0 bottom-8 z-50 flex justify-center px-4"
    >
      <div className="pointer-events-auto flex items-center gap-4 rounded-full border border-white/10 bg-slate-900/80 px-6 py-3 shadow-glow backdrop-blur-lg">
        <div className="flex items-center gap-2 text-sm text-white/80">
          <Sparkle className="h-4 w-4 text-primary" />
          <span>Nur diese Woche: Beta-Zugang ohne Warteliste</span>
        </div>
        <Button size="sm" className="hidden sm:inline-flex">
          Zugang sichern
        </Button>
      </div>
    </motion.div>
  );
}
