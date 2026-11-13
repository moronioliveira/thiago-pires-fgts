import type { CSSProperties } from "react";
import { howItWorksSection, steps } from "@/content/sections";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Visual de cada passo, na ordem: escuro, escuro em destaque, dourado */
const stepStyles = [
  { card: "bg-surface border-line", number: "text-gold", text: "text-muted" },
  { card: "bg-surface-2 border-line", number: "text-gold", text: "text-muted" },
  { card: "bg-gold text-ink border-transparent", number: "text-ink", text: "text-ink/80" },
];

/** Três passos da análise gratuita. Os cartões se empilham ao rolar. */
export function HowItWorks() {
  return (
    <section id="como-funciona" aria-labelledby="como-funciona-titulo" className="bg-ink-2 py-21 md:py-30">
      <Container>
        <SectionHeading centered lead={howItWorksSection.lead}>
          <span id="como-funciona-titulo">{howItWorksSection.title}</span>
        </SectionHeading>

        <ol className="mx-auto mt-16 flex max-w-[920px] flex-col gap-7">
          {steps.map((step, index) => {
            const style = stepStyles[index % stepStyles.length];
            return (
              <li
                key={step.title}
                style={{ "--i": index } as CSSProperties}
                className={`sticky top-[calc(84px+var(--i)*20px)] grid gap-4.5 rounded-2xl border p-7 shadow-[0_-24px_50px_-30px_rgba(0,0,0,.7)] md:top-[calc(110px+var(--i)*30px)] md:min-h-[290px] md:grid-cols-[72px_1fr] md:gap-11 md:p-11 ${style.card}`}
              >
                <span
                  aria-hidden="true"
                  className={`font-display text-[64px] leading-[0.82] font-extrabold tracking-[-0.04em] md:text-[100px] ${style.number}`}
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="mb-3.5 text-[clamp(1.6rem,2.6vw,2.2rem)] font-bold">{step.title}</h3>
                  <p className={`max-w-[48ch] leading-relaxed md:text-lg ${style.text}`}>{step.text}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
