import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

/** Links do menu. O href aponta para o id de cada seção. */
const navLinks = [
  { label: "Rescisão indireta", href: "#rescisao-indireta" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Dúvidas", href: "#duvidas" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-ink/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6 md:h-[72px]">
        <Link href="/#topo" className="group flex items-center gap-3" aria-label={`${site.brand} ${site.brandTagline}, início`}>
          <Image
            src="/images/logo-selo.png"
            alt=""
            width={56}
            height={56}
            priority
            className="size-12 transition-transform duration-800 ease-out-expo group-hover:-rotate-8 md:size-14"
          />
          <span className="leading-tight">
            <span className="block font-bold">{site.brand}</span>
            <span className="hidden text-xs text-muted sm:block">{site.brandTagline}</span>
          </span>
        </Link>

        <nav aria-label="Seções da página" className="hidden gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-muted transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <WhatsAppButton location="header" variant="small" showIcon={false} className="hidden sm:inline-flex" />
      </Container>
      <div aria-hidden="true" className="scroll-progress absolute inset-x-0 -bottom-px h-0.5 bg-gold" />
    </header>
  );
}
