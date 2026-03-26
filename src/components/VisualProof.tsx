"use client";

import Image from "next/image";
import AnimateOnView from "./AnimateOnView";

const useCases = [
  {
    label: "Noite de Cinema",
    desc: "Netflix e filmes na telona",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80&auto=format&fit=crop",
    gradient: "from-red-900/80 to-red-950/90",
  },
  {
    label: "YouTube",
    desc: "Vídeos em tela gigante",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&q=80&auto=format&fit=crop",
    gradient: "from-red-800/80 to-red-950/90",
  },
  {
    label: "Games",
    desc: "Jogos com imagem imersiva",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80&auto=format&fit=crop",
    gradient: "from-green-900/80 to-green-950/90",
  },
  {
    label: "Festa & Karaokê",
    desc: "Diversão garantida",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80&auto=format&fit=crop",
    gradient: "from-purple-900/80 to-purple-950/90",
  },
  {
    label: "Apresentações",
    desc: "Slides profissionais",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80&auto=format&fit=crop",
    gradient: "from-blue-900/80 to-blue-950/90",
  },
  {
    label: "Quarto das Crianças",
    desc: "Desenhos na parede",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&q=80&auto=format&fit=crop",
    gradient: "from-amber-900/80 to-amber-950/90",
  },
];

export default function VisualProof() {
  return (
    <section className="px-4 py-10 max-w-5xl mx-auto">
      <AnimateOnView className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Use Para <span className="text-accent">Tudo</span>
        </h2>
        <p className="text-foreground/60 text-sm sm:text-base">
          Netflix, YouTube, Spotify e até seus jogos na tela grande
        </p>
      </AnimateOnView>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {useCases.map((item, i) => (
          <AnimateOnView key={item.label} delay={i * 0.08}>
            <div className="relative group rounded-2xl overflow-hidden aspect-[4/3] border border-white/5 hover:border-white/20 transition-all cursor-default">
              <Image
                src={item.image}
                alt={item.label}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${item.gradient}`}
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <h3 className="font-bold text-sm sm:text-base text-white drop-shadow-lg">
                  {item.label}
                </h3>
                <p className="text-xs text-white/70">{item.desc}</p>
              </div>
            </div>
          </AnimateOnView>
        ))}
      </div>
    </section>
  );
}
