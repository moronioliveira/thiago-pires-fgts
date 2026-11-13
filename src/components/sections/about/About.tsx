import Image from "next/image";
import type { CSSProperties } from "react";
import { aboutSection } from "@/content/sections";
import { formatOab, oabRegistrations, site, socialLinks, stats } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Apresentação do advogado, credenciais da OAB e números. */
export function About() {
  const credentials = [
    ...oabRegistrations.map((oab) => ({
      label: oab.supplementary ? "Inscrição suplementar" : "Inscrição",
      value: formatOab(oab),
    })),
    { label: "Atendimento", value: "Online, todo o Brasil" },
  ];

  return (
    <section aria-labelledby="sobre-titulo" className="py-21 md:py-30">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[7fr_5fr] lg:gap-18">
          <div>
            <SectionHeading>
              <span id="sobre-titulo">{aboutSection.title}</span>
            </SectionHeading>
            <p className="scroll-reveal mt-5.5 max-w-[58ch] text-lg leading-[1.75] text-muted">
              <strong className="font-semibold text-text">{site.lawyer.name}</strong> {aboutSection.bio[0]}
            </p>
            <p className="scroll-reveal mt-5.5 max-w-[58ch] text-lg leading-[1.75] text-muted">{aboutSection.bio[1]}</p>
          </div>

          <aside className="scroll-reveal rounded-2xl border border-line bg-surface p-8" aria-label="Credenciais">
            <div className="flex items-center gap-4.5 border-b border-line pb-6">
              <Image
                src="/images/thiago-pires.webp"
                alt={`Foto do ${site.lawyer.honorific}`}
                width={84}
                height={84}
                className="size-21 shrink-0 rounded-full border-2 border-gold bg-[#2a2e31] object-cover object-[50%_10%]"
              />
              <div>
                <strong className="block font-display text-[22px]">{site.lawyer.honorific}</strong>
                <span className="text-sm text-muted">{site.lawyer.title}</span>
              </div>
            </div>

            <dl className="mt-5.5 flex flex-col gap-3.5 text-[15px]">
              {credentials.map((item) => (
                <div key={item.label} className="flex justify-between gap-4">
                  <dt className="text-muted">{item.label}</dt>
                  <dd className="text-right font-bold">{item.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6.5 flex gap-2.5">
              {socialLinks.slice(0, 3).map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-full border border-line px-2 py-2.5 text-center text-[13px] font-semibold transition-colors hover:border-gold hover:text-gold-light"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </aside>
        </div>

        <dl className="mt-14 grid border-t border-line md:mt-20 md:grid-cols-3 md:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="scroll-reveal flex flex-col-reverse border-b border-line py-7 md:border-b-0 md:pt-9 md:pb-0"
            >
              <dt className="mt-2.5 max-w-[24ch] leading-normal text-muted">{stat.label}</dt>
              <dd className="font-display text-[clamp(3rem,5.6vw,5rem)] leading-none font-extrabold tracking-[-0.03em] text-gold">
                <span className="counter scroll-count" style={{ "--to": stat.value } as CSSProperties} />
                {stat.suffix}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
