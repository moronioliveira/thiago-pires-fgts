import { signals, signalsSection } from "@/content/sections";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

/** Sinais de FGTS irregular que o visitante reconhece no próprio extrato. */
export function Signals() {
  return (
    <section aria-labelledby="sinais-titulo" className="pt-10 pb-21 md:pb-30">
      <Container>
        <SectionHeading>
          <span id="sinais-titulo">{signalsSection.title}</span>
        </SectionHeading>

        <ul className="mt-14 border-t border-line">
          {signals.map((signal) => (
            <li
              key={signal.title}
              className="scroll-reveal group relative grid grid-cols-[56px_1fr] gap-x-4 gap-y-2 border-b border-line py-6 transition-[padding] duration-500 ease-out-expo md:grid-cols-[72px_1.1fr_1fr] md:items-center md:gap-6 md:py-7.5 md:hover:pl-4"
            >
              <span
                aria-hidden="true"
                className="absolute bottom-[-1px] left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-700 ease-out-expo group-hover:scale-x-100"
              />
              <span className="row-span-2 grid size-14 place-items-center rounded-[14px] border border-line bg-surface text-gold transition-colors group-hover:bg-gold group-hover:text-ink md:row-span-1">
                <Icon name={signal.icon} strokeWidth={1.7} className="size-6.5" />
              </span>
              <h3 className="text-[1.3rem] font-semibold md:text-[clamp(1.3rem,2.1vw,1.8rem)]">{signal.title}</h3>
              <p className="max-w-[42ch] leading-relaxed text-muted">{signal.text}</p>
            </li>
          ))}
        </ul>

        <div className="scroll-reveal mt-11 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-[40ch] text-xl font-semibold">{signalsSection.closing}</p>
          <WhatsAppButton location="sinais" className="w-full md:w-auto" />
        </div>
      </Container>
    </section>
  );
}
