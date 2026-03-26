"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCT } from "@/lib/config";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="bg-background/95 backdrop-blur-sm border-t border-surface-light px-4 py-3 flex items-center justify-between gap-3">
            <div className="flex flex-col">
              <span className="text-xs text-foreground/50 line-through">
                {PRODUCT.price.currency}{" "}
                {PRODUCT.price.original.toFixed(2).replace(".", ",")}
              </span>
              <span className="text-lg font-black text-accent">
                {PRODUCT.price.currency}{" "}
                {PRODUCT.price.current.toFixed(2).replace(".", ",")}
              </span>
            </div>
            <motion.a
              href="/checkout"
              className="flex-1 max-w-[200px] bg-accent hover:bg-accent-dark text-background font-extrabold text-center py-3.5 rounded-full text-sm tracking-wide transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              COMPRE AGORA
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
