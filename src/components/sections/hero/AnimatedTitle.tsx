import type { CSSProperties } from "react";

interface AnimatedTitleProps {
  /** Cada item vira uma linha no desktop; no celular o texto flui normalmente */
  lines: readonly string[];
}

/** Título principal (h1) em que cada palavra sobe em sequência ao carregar. */
export function AnimatedTitle({ lines }: AnimatedTitleProps) {
  let wordIndex = 0;

  return (
    <h1 className="mt-6 mb-5.5 text-[2.35rem] leading-[1.06] font-extrabold md:text-[clamp(2.4rem,4.2vw,3.7rem)]">
      {lines.map((line) => (
        <span key={line} className="lg:block">
          {line.split(" ").map((word) => {
            const index = wordIndex++;
            return (
              <span key={`${word}-${index}`} className="-mb-[0.1em] inline-block overflow-hidden pb-[0.1em] align-bottom">
                <span
                  className="inline-block animate-rise [animation-delay:calc(var(--i)*55ms+120ms)]"
                  style={{ "--i": index } as CSSProperties}
                >
                  {word}
                </span>
                {" "}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
