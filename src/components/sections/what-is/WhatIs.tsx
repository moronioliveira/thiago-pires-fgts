import { whatIsSection } from "@/content/sections";
import { Container } from "@/components/ui/Container";
import { SectionBackground } from "@/components/ui/SectionBackground";

/** Explica a rescisão indireta. O texto da lei fica fixo enquanto a explicação acende ao rolar. */
export function WhatIs() {
  return (
    <section
      id="rescisao-indireta"
      aria-labelledby="rescisao-titulo"
      className="relative isolate overflow-hidden bg-ink-2 py-21 md:py-30"
    >
      <SectionBackground src="/images/bg-painel-ripado.jpg" overlay="panel" parallax />

      <Container className="grid gap-11 lg:grid-cols-[5fr_7fr] lg:gap-22">
        <div className="self-start lg:sticky lg:top-30">
          <h2 id="rescisao-titulo" className="max-w-[22ch] text-[clamp(2rem,3.3vw,3rem)] leading-[1.08] font-bold">
            {whatIsSection.title}
          </h2>
          <blockquote className="mt-9 rounded-2xl border border-line bg-surface p-7">
            <cite className="text-sm font-bold not-italic text-gold-light">{whatIsSection.lawReference}</cite>
            <p className="mt-3 text-[17px] leading-relaxed">{whatIsSection.lawText}</p>
          </blockquote>
        </div>

        <div className="flex flex-col gap-8 pt-2 md:gap-13">
          {whatIsSection.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="scroll-lit font-display text-[clamp(1.35rem,2.1vw,1.85rem)] leading-[1.38] font-medium tracking-[-0.01em]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
