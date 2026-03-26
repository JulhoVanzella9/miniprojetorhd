"use client";

import { PRODUCT } from "@/lib/config";
import AnimateOnView from "./AnimateOnView";

export default function Benefits() {
  return (
    <section className="px-4 py-10 max-w-4xl mx-auto">
      <AnimateOnView className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Por Que Escolher o{" "}
          <span className="text-primary">{PRODUCT.name}</span>?
        </h2>
      </AnimateOnView>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {PRODUCT.benefits.map((b, i) => (
          <AnimateOnView key={i} delay={i * 0.08}>
            <div className="bg-surface border border-surface-light rounded-2xl p-5 text-center hover:border-primary/30 transition-colors">
              <span className="text-3xl mb-3 block">{b.icon}</span>
              <h3 className="font-bold text-sm sm:text-base mb-1">
                {b.title}
              </h3>
              <p className="text-xs sm:text-sm text-foreground/50">
                {b.description}
              </p>
            </div>
          </AnimateOnView>
        ))}
      </div>
    </section>
  );
}
