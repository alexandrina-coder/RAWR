import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';
import { MessageSquare } from 'lucide-react';

export default function StickyCTA() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show after scrolling 600px (roughly after hero)
    if (latest > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end"
        >
          <a
            href="#audit"
            className="group flex items-center gap-3 bg-brand-accent text-white px-6 py-4 rounded-full shadow-2xl hover:scale-105 transition-transform active:scale-95"
          >
            <span className="text-sm font-bold tracking-tight hidden md:block">
              Réserver mon audit gratuit
            </span>
            <span className="text-sm font-bold tracking-tight md:hidden">
              Audit gratuit
            </span>
            <div className="bg-white/20 p-1 rounded-full group-hover:rotate-12 transition-transform">
              <MessageSquare size={18} />
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
