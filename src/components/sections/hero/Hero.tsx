import Image from "next/image";
import { hero } from "@/content/hero";
import { formatOab, oabRegistrations, site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { AnimatedTitle } from "./AnimatedTitle";
import { FgtsStatement } from "./FgtsStatement";

/** Primeira dobra: título, extrato ilustrativo, botão e foto do advogado. */
export function Hero() {
  const mainOab = formatOab(oabRegistrations[0]);

  return (
    <section id="topo" className="relative isolate overflow-hidden pt-9 pb-18 md:pt-16 md:pb-26">
      <SectionBackground
        src="/images/bg-marmore.jpg"
        overlay="hero"
        priority
        imageClassName="animate-ken-burns object-[62%_30%] lg:object-[70%_40%]"
      />

      <Container className="grid items-center gap-12 lg:grid-cols-[7fr_5fr] lg:gap-16">
        <div>
          <span className="inline-flex animate-fade-up items-center gap-2.5 rounded-full border border-gold/35 bg-gold/12 px-3.5 py-2 text-sm font-semibold text-gold-light">
            <Icon name="globe" className="size-4" />
            {hero.eyebrow}
          </span>

          <AnimatedTitle lines={hero.titleLines} />

          <p className="max-w-[52ch] animate-fade-up text-[17px] leading-relaxed text-muted [animation-delay:550ms] md:text-[19px]">
            {hero.lead}
          </p>

          <FgtsStatement />

          <div className="flex animate-fade-up flex-wrap items-center gap-5 [animation-delay:850ms] md:gap-6.5">
            <WhatsAppButton location="hero" className="w-full sm:w-auto" />
            <a
              href={hero.secondaryLink.href}
              className="border-b border-text/35 pb-0.5 font-semibold transition-colors hover:border-gold-light hover:text-gold-light"
            >
              {hero.secondaryLink.label}
            </a>
          </div>
        </div>

        <figure className="mr-4.5 lg:mr-0">
          <div className="relative animate-photo [animation-delay:250ms]">
            <div aria-hidden="true" className="absolute inset-0 translate-4.5 rounded-2xl border border-gold/60" />
            <Image
              src="/images/thiago-pires.webp"
              alt={`${site.lawyer.honorific}, advogado trabalhista, de terno escuro e braços cruzados`}
              width={640}
              height={960}
              priority
              sizes="(min-width: 1024px) 420px, 90vw"
              className="relative aspect-[4/5] w-full rounded-2xl bg-[#2a2e31] object-cover object-[50%_14%]"
            />
          </div>
          <figcaption className="mt-7.5 flex items-end justify-between gap-4 text-sm leading-normal text-muted">
            <span>
              <strong className="block text-base text-text">{site.lawyer.honorific}</strong>
              {site.lawyer.title}
            </span>
            <span className="font-bold whitespace-nowrap text-gold-light">{mainOab}</span>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
