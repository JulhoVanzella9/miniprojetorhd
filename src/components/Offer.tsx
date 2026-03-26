"use client";

import { PRODUCT } from "@/lib/config";
import CTAButton from "./CTAButton";
import AnimateOnView from "./AnimateOnView";

export default function Offer() {
  const discount = Math.round(
    ((PRODUCT.price.original - PRODUCT.price.current) / PRODUCT.price.original) *
      100
  );

  return (
    <section className="px-4 py-10 max-w-2xl mx-auto">
      <AnimateOnView>
        <div className="relative bg-gradient-to-br from-primary/20 via-surface to-surface border border-primary/30 rounded-3xl p-6 sm:p-10 text-center overflow-hidden">
          {/* Discount badge */}
          <div className="absolute top-4 right-4 bg-danger text-white text-xs font-black px-3 py-1.5 rounded-full">
            -{discount}% OFF
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Oferta Especial
          </h2>
          <p className="text-foreground/60 text-sm mb-6">
            {PRODUCT.urgency.stock} em estoque com este preço
          </p>

          {/* Pricing */}
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="text-lg text-foreground/40 line-through">
              {PRODUCT.price.currency} {PRODUCT.price.original.toFixed(2).replace(".", ",")}
            </span>
            <span className="text-4xl sm:text-5xl font-black text-accent">
              {PRODUCT.price.currency}{" "}
              {PRODUCT.price.current.toFixed(2).replace(".", ",")}
            </span>
          </div>
          <p className="text-sm text-foreground/50 mb-8">
            ou 12x de {PRODUCT.price.currency}{" "}
            {(PRODUCT.price.current / 12).toFixed(2).replace(".", ",")} sem juros
          </p>

          <CTAButton size="large" />

          <p className="text-xs text-foreground/40 mt-4">
            Pagamento seguro via Mercado Pago • Parcele em até 12x
          </p>
        </div>
      </AnimateOnView>
    </section>
  );
}
