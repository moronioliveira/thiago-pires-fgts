import { finalCtaSection } from "@/content/sections";
import { Container } from "@/components/ui/Container";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

/** Chamada final em bloco dourado sobre fundo de mármore. */
export function FinalCta() {
  return (
    <section aria-labelledby="chamada-final-titulo" className="relative isolate overflow-hidden py-25 md:py-35">
      <SectionBackground src="/images/bg-veios.jpg" overlay="veins" parallax />

      <Container>
        <div className="scroll-reveal relative grid items-end gap-8 overflow-hidden rounded-2xl bg-gold px-6.5 py-12 text-ink md:grid-cols-[1fr_auto] md:gap-12 md:px-16 md:py-20">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 -bottom-10 font-display text-[190px] leading-none font-extrabold tracking-[-0.04em] text-transparent [-webkit-text-stroke:1.5px_rgb(11_22_27/0.16)] md:-bottom-18 md:text-[300px]"
          >
            483
          </span>
          <div className="relative">
            <h2
              id="chamada-final-titulo"
              className="max-w-[16ch] text-[clamp(2rem,3.3vw,3rem)] leading-[1.08] font-bold"
            >
              {finalCtaSection.title}
            </h2>
            <p className="mt-4.5 max-w-[46ch] text-lg leading-relaxed text-ink/80 md:text-[19px]">
              {finalCtaSection.text}
            </p>
          </div>
          <WhatsAppButton location="final" variant="dark" className="relative w-full md:w-auto" />
        </div>
      </Container>
    </section>
  );
}
