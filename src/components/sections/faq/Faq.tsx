import { faq, faqTitle } from "@/content/faq";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Perguntas frequentes com abrir e fechar nativo do HTML (sem JavaScript).
 * As mesmas perguntas alimentam os dados estruturados FAQPage.
 */
export function Faq() {
  return (
    <section id="duvidas" aria-labelledby="duvidas-titulo" className="bg-ink-2 py-21 md:py-30">
      <Container>
        <SectionHeading centered>
          <span id="duvidas-titulo">{faqTitle}</span>
        </SectionHeading>

        <div className="mx-auto mt-14 max-w-[840px] border-t border-line">
          {faq.map((item, index) => (
            <details
              key={item.question}
              open={index === 0}
              data-faq={item.question}
              className="group border-b border-line"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5.5 font-display text-[19px] font-semibold transition-colors hover:text-gold-light md:py-7 md:text-[22px] [&::-webkit-details-marker]:hidden">
                <h3 className="font-semibold">{item.question}</h3>
                <span className="grid size-9.5 shrink-0 place-items-center rounded-full border border-line text-text transition-[transform,background-color,color] duration-450 ease-out-expo group-open:rotate-45 group-open:border-transparent group-open:bg-gold group-open:text-ink">
                  <Icon name="plus" strokeWidth={2} className="size-4.5" />
                </span>
              </summary>
              <p className="pb-7.5 leading-[1.75] text-muted group-open:animate-fade-up md:pr-15 md:text-[17px]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
