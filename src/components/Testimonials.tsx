"use client";

import { PRODUCT } from "@/lib/config";
import AnimateOnView from "./AnimateOnView";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-accent">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="px-4 py-10 max-w-4xl mx-auto">
      <AnimateOnView className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          O Que Nossos Clientes <span className="text-accent">Dizem</span>
        </h2>
        <div className="flex items-center justify-center gap-2">
          <Stars count={5} />
          <span className="text-sm text-foreground/50">
            4.8/5 — +2.300 avaliações
          </span>
        </div>
      </AnimateOnView>

      <div className="grid sm:grid-cols-2 gap-4">
        {PRODUCT.testimonials.map((t, i) => (
          <AnimateOnView key={i} delay={i * 0.1}>
            <div className="bg-surface border border-surface-light rounded-2xl p-5 flex flex-col gap-3">
              <Stars count={t.rating} />
              <p className="text-sm text-foreground/80 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-auto pt-2 border-t border-surface-light">
                <div className="w-9 h-9 rounded-full bg-primary/20 text-primary font-bold text-xs flex items-center justify-center">
                  {t.avatar}
                </div>
                <span className="text-sm font-semibold">{t.name}</span>
                <span className="ml-auto text-xs text-success flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Compra verificada
                </span>
              </div>
            </div>
          </AnimateOnView>
        ))}
      </div>
    </section>
  );
}
