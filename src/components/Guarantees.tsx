"use client";

import { PRODUCT } from "@/lib/config";
import AnimateOnView from "./AnimateOnView";

export default function Guarantees() {
  return (
    <section className="px-4 py-8 max-w-4xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {PRODUCT.guarantees.map((g, i) => (
          <AnimateOnView key={i} delay={i * 0.08}>
            <div className="bg-surface border border-surface-light rounded-2xl p-4 text-center">
              <span className="text-2xl mb-2 block">{g.icon}</span>
              <h3 className="font-bold text-sm mb-0.5">{g.title}</h3>
              <p className="text-xs text-foreground/50">{g.subtitle}</p>
            </div>
          </AnimateOnView>
        ))}
      </div>
    </section>
  );
}
