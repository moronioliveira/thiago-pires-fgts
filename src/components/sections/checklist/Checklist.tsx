import { checklistSection } from "@/content/sections";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

/** Critérios que ajudam o visitante a saber se o caso se encaixa (filtro de leads). */
export function Checklist() {
  return (
    <section aria-labelledby="checklist-titulo" className="py-21 md:py-30">
      <Container>
        <SectionHeading centered>
          <span id="checklist-titulo">{checklistSection.title}</span>
        </SectionHeading>

        <ul className="mx-auto mt-14 grid max-w-[980px] gap-4 md:grid-cols-2">
          {checklistSection.items.map((item) => (
            <li
              key={item}
              className="scroll-reveal scroll-draw flex items-start gap-4.5 rounded-2xl border border-line bg-surface p-5.5 font-semibold leading-normal md:px-7 md:py-6.5 md:text-lg"
            >
              <span className="grid size-9.5 shrink-0 place-items-center rounded-full border border-gold/50 bg-gold/12 text-gold">
                <Icon name="check" strokeWidth={2.4} className="size-5" />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="scroll-reveal mt-11 flex justify-center">
          <WhatsAppButton location="checklist" className="w-full sm:w-auto" />
        </div>
      </Container>
    </section>
  );
}
