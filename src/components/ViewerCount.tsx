"use client";

import { useState, useEffect } from "react";

interface Props {
  min: number;
  max: number;
}

export default function ViewerCount({ min, max }: Props) {
  const [count, setCount] = useState(min);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(Math.floor(Math.random() * (max - min + 1)) + min);
    }, 4000);
    return () => clearInterval(interval);
  }, [min, max]);

  return (
    <div className="flex items-center gap-2 text-sm text-foreground/70">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success" />
      </span>
      <span>
        <strong className="text-foreground">{count}</strong> pessoas vendo agora
      </span>
    </div>
  );
}
