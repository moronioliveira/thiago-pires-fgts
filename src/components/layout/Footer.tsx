import Image from "next/image";
import Link from "next/link";
import { legalNotice } from "@/content/sections";
import { formatOab, oabRegistrations, site, socialLinks } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const oabText = oabRegistrations.map(formatOab).join(" e ");

  return (
    <footer className="border-t border-line pt-14 pb-28 md:pt-18 md:pb-30">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr] md:gap-12">
          <div>
            <Link href="/#topo" aria-label={`${site.brand} ${site.brandTagline}, voltar ao início`} className="inline-block">
              <Image
                src="/images/logo-selo.png"
                alt={`Selo ${site.brand} ${site.brandTagline}`}
                width={136}
                height={136}
                className="size-34 transition-transform duration-800 ease-out-expo hover:-rotate-8"
              />
            </Link>
            <p className="mt-4 max-w-[40ch] text-sm leading-7 text-muted">
              {site.legalName}. CNPJ {site.cnpj}.
            </p>
          </div>

          <div>
            <h2 className="mb-3.5 font-sans text-sm font-bold tracking-normal">Contato</h2>
            <ul className="space-y-1 text-sm leading-7 text-muted">
              <li>
                <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-gold-light">
                  WhatsApp {site.whatsapp.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="break-all hover:text-gold-light">
                  {site.email}
                </a>
              </li>
              <li>Atendimento online em todo o Brasil</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3.5 font-sans text-sm font-bold tracking-normal">Redes sociais</h2>
            <ul className="space-y-1 text-sm leading-7 text-muted">
              {socialLinks.map((link) => (
                <li key={link.url}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-gold-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-7 text-[13px] leading-relaxed text-muted md:flex-row md:justify-between md:gap-8">
          <p className="max-w-[80ch]">
            {site.lawyer.honorific}, {oabText}. {legalNotice}
          </p>
          <p className="shrink-0">
            <Link href="/politica-de-privacidade" className="text-gold-light hover:text-gold">
              Política de privacidade
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
