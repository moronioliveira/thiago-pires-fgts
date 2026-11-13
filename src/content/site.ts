import type { OabRegistration, SocialLink, Stat } from "@/types/content";

/**
 * Dados do escritório usados em toda a página, no SEO e nos dados estruturados.
 * Altere aqui e a mudança aparece em todos os lugares.
 */
export const site = {
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://fgts.thiagopiresadvocacia.com.br").replace(/\/$/, ""),
  mainSiteUrl: "https://thiagopiresadvocacia.com.br",
  brand: "Thiago Pires",
  brandTagline: "Advocacia e Consultoria",
  legalName: "Thiago Pires Sociedade Individual de Advocacia",
  cnpj: "59.424.418/0001-79",
  email: "contato@thiagopiresadvocacia.com.br",
  city: "Teresina",
  region: "PI",
  lawyer: {
    name: "Thiago Pires",
    honorific: "Dr. Thiago Pires",
    title: "Especialista em Direito do Trabalho",
  },
  whatsapp: {
    number: "5586999290429",
    display: "(86) 99929-0429",
    defaultMessage:
      "Olá, vim pela página sobre FGTS e rescisão indireta e gostaria de uma análise gratuita do meu caso.",
  },
  ctaLabel: "Pedir análise gratuita",
} as const;

export const oabRegistrations: OabRegistration[] = [
  { state: "PI", number: "21.811" },
  { state: "RS", number: "130.161A", supplementary: true },
];

export const socialLinks: SocialLink[] = [
  { label: "Instagram", url: "https://www.instagram.com/thiagopires_adv/" },
  { label: "YouTube", url: "https://www.youtube.com/channel/UC9hKVfMvx_KGzYUHopds5_Q" },
  { label: "TikTok", url: "https://www.tiktok.com/@thiagopires_adv" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/thiago-pires-275917252" },
];

export const stats: Stat[] = [
  { value: 13, label: "anos de experiência com a CLT" },
  { value: 15, suffix: "+", label: "estados com trabalhadores atendidos" },
  { value: 100, suffix: " mil", label: "seguidores acompanhando o conteúdo" },
];

/** Formato "OAB/PI 21.811" */
export function formatOab(oab: OabRegistration): string {
  return `OAB/${oab.state} ${oab.number}`;
}
