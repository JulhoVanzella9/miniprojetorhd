"use client";

import { motion } from "framer-motion";
import { PRODUCT } from "@/lib/config";

export default function OfertaPage() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Top yellow bar */}
      <div className="bg-accent text-background font-black text-center py-2.5 text-sm sm:text-base tracking-widest uppercase">
        Mini Projetor HD
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 top-10 bg-gradient-to-b from-primary/15 via-background to-background pointer-events-none" />

      {/* Conteúdo */}
      <div className="relative flex-1 w-full max-w-lg mx-auto px-4 pt-6 pb-10 flex flex-col items-center gap-5">
        {/* Header OFERTA ESPECIAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full bg-accent rounded-2xl py-5 text-center shadow-lg shadow-accent/20"
        >
          <h1 className="text-3xl sm:text-4xl font-black text-background tracking-tight italic">
            OFERTA ESPECIAL
          </h1>
        </motion.div>

        {/* Parabéns texto */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-danger font-black text-base sm:text-lg text-center leading-snug"
        >
          PARABÉNS!! VOCÊ FOI SELECIONADO PARA O NOVO TESTE DE QUALIDADE 4K DO MINI PROJETOR
        </motion.p>

        {/* Feature improvements list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="w-full bg-surface border border-surface-light rounded-2xl p-5 sm:p-6"
        >
          <p className="text-foreground/60 text-xs font-semibold uppercase tracking-wider mb-4 text-center">
            Melhorias incluídas
          </p>
          <div className="flex flex-col gap-3">
            {[
              { label: "4K FULL HD", desc: "Resolução máxima aprimorada" },
              { label: "QUALIDADE MELHORADA", desc: "Cores mais vivas e nítidas" },
              { label: "TELA DE CINEMA", desc: "Projeção ampliada até 150\"" },
              { label: "ÁUDIO OTIMIZADO", desc: "Som mais potente e claro" },
            ].map(
              (feature, i) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-black text-foreground text-sm sm:text-base">
                      {feature.label}
                    </span>
                    <p className="text-xs text-foreground/50">{feature.desc}</p>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        {/* Instrução com destaque */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="bg-accent text-background font-black text-sm sm:text-base text-center leading-snug rounded-xl px-5 py-3 shadow-lg shadow-accent/20"
        >
          PARA ADICIONAR A QUALIDADE 4K JÁ INSTALADA NO SEU MINI PROJETOR BASTA CLICAR NO BOTÃO ABAIXO!!
        </motion.div>

        {/* Botão CONFIRMAR */}
        <motion.a
          href={PRODUCT.buyUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="w-full max-w-xs bg-success hover:bg-success/90 text-background font-black text-2xl text-center py-4 rounded-full shadow-lg shadow-success/25 transition-colors tracking-wide"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          CONFIRMAR
        </motion.a>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 text-xs text-foreground/60 pt-2"
        >
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
        </motion.div>
      </div>
    </main>
  );
}
