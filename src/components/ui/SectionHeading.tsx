import type { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
  /** Texto de apoio exibido abaixo do título */
  lead?: string;
  centered?: boolean;
  /** Anima a entrada do título ao rolar a página */
  reveal?: boolean;
  className?: string;
}

/** Título padrão das seções (h2) com texto de apoio opcional. */
export function SectionHeading({ children, lead, centered = false, reveal = true, className = "" }: SectionHeadingProps) {
  const align = centered ? "mx-auto text-center" : "";
  const motion = reveal ? "scroll-reveal" : "";

  return (
    <div className={`${centered ? "mx-auto max-w-[760px] text-center" : ""} ${className}`}>
      <h2
        className={`${motion} ${align} max-w-[22ch] text-[clamp(2rem,3.3vw,3rem)] leading-[1.08] font-bold`}
      >
        {children}
      </h2>
      {lead && (
        <p className={`${motion} ${align} mt-4 max-w-[60ch] text-lg leading-relaxed text-muted`}>{lead}</p>
      )}
    </div>
  );
}
