"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCT } from "@/lib/config";
import AnimateOnView from "./AnimateOnView";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-surface-light rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-semibold text-sm sm:text-base hover:bg-surface-light/50 transition-colors cursor-pointer"
      >
        {question}
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-5 h-5 text-foreground/40 flex-shrink-0 ml-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm text-foreground/60 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = useCallback((i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  }, []);

  return (
    <section className="px-4 py-10 max-w-2xl mx-auto">
      <AnimateOnView className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Perguntas <span className="text-primary">Frequentes</span>
        </h2>
      </AnimateOnView>

      <div className="flex flex-col gap-3">
        {PRODUCT.faq.map((item, i) => (
          <AnimateOnView key={i} delay={i * 0.05}>
            <FAQItem
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          </AnimateOnView>
        ))}
      </div>
    </section>
  );
}
