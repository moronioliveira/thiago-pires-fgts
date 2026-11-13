import { rights, rightsSection } from "@/content/sections";
import type { RightVariant } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

/** Estilo de cada tipo de cartão do mosaico */
const variantStyles: Record<RightVariant, string> = {
  featured: "md:col-span-4 md:min-h-[330px] bg-gold text-ink border-transparent",
  default: "md:col-span-2 bg-surface",
  pattern:
    "md:col-span-2 bg-surface bg-[repeating-linear-gradient(135deg,rgb(236_239_236/0.045)_0_1px,transparent_1px_12px)]",
  tinted: "md:col-span-4 bg-surface-2",
};

/** Verbas que podem ser devidas quando a rescisão indireta é reconhecida. */
export function Rights() {
  return (
    <section aria-labelledby="verbas-titulo" className="py-21 md:py-30">
      <Container>
        <SectionHeading lead={rightsSection.lead}>
          <span id="verbas-titulo">{rightsSection.title}</span>
        </SectionHeading>

        <div className="mt-14 grid gap-4 md:grid-cols-6">
          {rights.map((right) => {
            const featured = right.variant === "featured";
            return (
              <SpotlightCard
                key={right.title}
                glowColor={featured ? "rgb(255 255 255 / 0.35)" : undefined}
                className={`scroll-reveal flex flex-col justify-between gap-7 rounded-2xl border border-line p-6.5 transition-[transform,border-color] duration-500 ease-out-expo hover:-translate-y-1 hover:border-gold/45 md:min-h-[250px] md:p-8 ${variantStyles[right.variant]}`}
              >
                {featured && right.highlight ? (
                  <span className="font-display text-[clamp(5rem,9.5vw,8.5rem)] leading-[0.88] font-extrabold tracking-[-0.045em]">
                    {right.highlight}
                  </span>
                ) : (
                  right.icon && (
                    <span className="grid size-14 place-items-center rounded-[14px] border border-line text-gold">
                      <Icon name={right.icon} strokeWidth={1.7} className="size-6.5" />
                    </span>
                  )
                )}
                <div>
                  <h3 className="mb-2.5 text-[26px] font-bold">{right.title}</h3>
                  <p className={`max-w-[44ch] leading-relaxed ${featured ? "text-ink/80" : "text-muted"}`}>
                    {right.text}
                  </p>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        <p className="mt-5 text-sm text-muted">{rightsSection.note}</p>
      </Container>
    </section>
  );
}
