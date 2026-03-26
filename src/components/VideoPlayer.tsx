"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  videoUrl: string;
  thumbnail?: string;
  className?: string;
}

function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
}

export default function VideoPlayer({ videoUrl, thumbnail = "/projetor-2.jpeg", className = "" }: Props) {
  const [playing, setPlaying] = useState(false);

  const youtubeId = getYouTubeId(videoUrl);
  const isYoutube = !!youtubeId;

  const handlePlay = useCallback(() => {
    setPlaying(true);
  }, []);

  return (
    <div
      className={`relative w-full aspect-video rounded-2xl overflow-hidden bg-surface border border-surface-light ${className}`}
    >
      {!playing ? (
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex flex-col items-center justify-center gap-4 cursor-pointer group z-10"
          aria-label="Reproduzir vídeo"
        >
          {/* Thumbnail */}
          <Image
            src={thumbnail}
            alt="Mini Projetor HD"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 640px"
            priority
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Animated rings */}
          <div className="relative">
            <motion.div
              className="absolute inset-0 rounded-full bg-accent/20"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              style={{ width: 80, height: 80, margin: "-8px" }}
            />
            <div className="relative w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg shadow-accent/30 group-hover:scale-110 transition-transform">
              <svg
                className="w-7 h-7 text-background ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <span className="relative text-sm font-semibold text-white/90 tracking-wide">
            ASSISTIR DEMONSTRAÇÃO
          </span>
        </button>
      ) : isYoutube ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
          loading="lazy"
          title="Vídeo demonstração Mini Projetor HD"
        />
      ) : (
        <video
          src={videoUrl}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          controls
          playsInline
        />
      )}
    </div>
  );
}
