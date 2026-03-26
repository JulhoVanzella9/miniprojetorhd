"use client";

import Image from "next/image";
import AnimateOnView from "./AnimateOnView";

const images = [
  { src: "/projetor-2.jpeg", alt: "Mini Projetor HD projetando cinema em casa" },
  { src: "/projetor-1.jpeg", alt: "Kit completo do Mini Projetor HD com acessórios" },
  { src: "/projetor-4.jpeg", alt: "Mini Projetor HD design compacto na sala" },
  { src: "/projetor-3.jpeg", alt: "Entradas e conexões do Mini Projetor HD" },
];

export default function ProductGallery() {
  return (
    <section className="px-4 py-10 max-w-4xl mx-auto">
      <AnimateOnView className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Conheça o <span className="text-accent">Produto</span>
        </h2>
        <p className="text-foreground/60 text-sm sm:text-base">
          Compacto, portátil e com tudo incluso na caixa
        </p>
      </AnimateOnView>

      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {images.map((img, i) => (
          <AnimateOnView key={img.src} delay={i * 0.1}>
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] border border-white/5 hover:border-accent/30 transition-all">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 400px"
                className="object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </AnimateOnView>
        ))}
      </div>
    </section>
  );
}
