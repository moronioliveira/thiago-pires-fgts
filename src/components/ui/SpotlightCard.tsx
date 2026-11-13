"use client";

import { useRef, type CSSProperties, type MouseEvent, type ReactNode } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  /** Cor da luz (padrão: dourado suave). Ex.: "rgb(255 255 255 / 0.35)" */
  glowColor?: string;
}

/** Cartão com uma luz suave que acompanha o mouse (estilo em .spotlight no globals.css). */
export function SpotlightCard({ children, className = "", glowColor }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    card.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      style={glowColor ? ({ "--spot-color": glowColor } as CSSProperties) : undefined}
      className={`spotlight relative overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}
