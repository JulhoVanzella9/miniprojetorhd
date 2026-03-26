"use client";

import { useState, useCallback } from "react";
import { PRODUCT } from "@/lib/config";
import CTAButton from "./CTAButton";
import ViewerCount from "./ViewerCount";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const carouselImages = [
  { src: "/projetor-2.jpeg", alt: "Mini Projetor HD projetando cinema em casa" },
  { src: "/projetor-1.jpeg", alt: "Kit completo do Mini Projetor HD com acessórios" },
  { src: "/projetor-3.jpeg", alt: "Detalhes e conexões do Mini Projetor HD" },
  { src: "/projetor-4.jpeg", alt: "Mini Projetor HD na sala com tela de projeção" },
];

export default function Hero() {
  const totalSlides = carouselImages.length;
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback(
    (next: number) => {
      setDirection(next > current ? 1 : -1);
      setCurrent(next);
    },
    [current]
  );

  const prev = () => goTo(current === 0 ? totalSlides - 1 : current - 1);
  const next = () => goTo(current === totalSlides - 1 ? 0 : current + 1);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <section className="relative flex flex-col overflow-hidden">
      {/* Top yellow bar */}
      <div className="bg-accent text-background font-black text-center py-2.5 text-sm sm:text-base tracking-widest uppercase">
        Mini Projetor HD
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 top-10 bg-gradient-to-b from-primary/15 via-background to-background pointer-events-none" />

      <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center gap-4 text-center px-4 pt-6 pb-0">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 bg-accent/15 text-accent border border-accent/30 rounded-full px-4 py-1.5 text-sm font-semibold"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          OFERTA POR TEMPO LIMITADO
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight"
        >
          {PRODUCT.headline.split(" ").map((word, i) => (
            <span
              key={i}
              className={
                ["Cinema", "Qualquer"].includes(word)
                  ? "text-accent"
                  : ""
              }
            >
              {word}{" "}
            </span>
          ))}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-foreground/70 max-w-lg"
        >
          {PRODUCT.subheadline}
        </motion.p>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full relative"
        >
          <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-surface-light">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={carouselImages[current].src}
                  alt={carouselImages[current].alt}
                  fill
                  className={`object-cover ${carouselImages[current].src === "/projetor-3.jpeg" ? "object-[center_70%]" : ""}`}
                  sizes="(max-width: 768px) 100vw, 640px"
                  priority={current === 0}
                />
              </motion.div>
            </AnimatePresence>

            {/* Left arrow */}
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer"
              aria-label="Anterior"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right arrow */}
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer"
              aria-label="Próximo"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
              {carouselImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    i === current
                      ? "bg-accent w-5"
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Imagem ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA + info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full flex flex-col items-center gap-3"
        >
          {/* Stock badge */}
          <div className="flex items-center gap-2 bg-danger/15 text-danger border border-danger/30 rounded-full px-4 py-1.5 text-sm font-bold">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Estoque disponível: apenas 15 unidades
          </div>

          <CTAButton size="large" />

          {/* Mercado Livre trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-foreground/60">
            <span className="flex items-center gap-1.5 bg-[#fff159]/10 text-[#fff159] border border-[#fff159]/20 rounded-full px-3 py-1 font-semibold">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
              Mercado Livre
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Entrega pelo Mercado Livre
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Frete grátis
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Compra segura
            </span>
          </div>

          <ViewerCount
            min={PRODUCT.urgency.viewersMin}
            max={PRODUCT.urgency.viewersMax}
          />
        </motion.div>

        {/* Scroll down arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => window.scrollBy({ top: window.innerHeight * 0.7, behavior: "smooth" })}
        >
          <span className="text-sm text-foreground/40 tracking-wide">Deslize para ver mais</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center -space-y-10"
          >
            <svg className="w-14 h-14 text-accent/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
            </svg>
            <svg className="w-14 h-14 text-accent/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
            </svg>
            <svg className="w-14 h-14 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
