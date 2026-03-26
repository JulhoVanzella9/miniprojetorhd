"use client";

import { motion } from "framer-motion";
import { PRODUCT } from "@/lib/config";

interface Props {
  size?: "normal" | "large";
  className?: string;
  showMicrocopy?: boolean;
}

export default function CTAButton({
  size = "normal",
  className = "",
  showMicrocopy = true,
}: Props) {
  const sizeClasses =
    size === "large"
      ? "px-10 py-5 text-xl"
      : "px-8 py-4 text-lg";

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <motion.a
        href="/checkout"
        className={`inline-flex items-center justify-center font-extrabold bg-accent hover:bg-accent-dark text-background rounded-full shadow-lg shadow-accent/25 transition-colors tracking-wide ${sizeClasses}`}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        COMPRE AGORA
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </motion.a>
      {showMicrocopy && (
        <div className="flex items-center gap-4 text-xs text-foreground/50">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Compra segura
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Entrega rápida
          </span>
        </div>
      )}
    </div>
  );
}
