import type { IconName } from "@/components/ui/Icon";

/** Tipos de todo o conteúdo editável em src/content */

export interface SocialLink {
  label: string;
  url: string;
}

export interface OabRegistration {
  state: string;
  number: string;
  supplementary?: boolean;
}

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export interface Signal {
  icon: IconName;
  title: string;
  text: string;
}

export type RightVariant = "featured" | "default" | "pattern" | "tinted";

export interface Right {
  title: string;
  text: string;
  variant: RightVariant;
  icon?: IconName;
  /** Número grande exibido no cartão em destaque (ex.: "40%") */
  highlight?: string;
}

export interface Step {
  title: string;
  text: string;
}

export interface Review {
  name: string;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface StatementMonth {
  label: string;
  deposited: boolean;
}

export interface Campaign {
  /** Código curto que aparece na mensagem do WhatsApp para identificar a origem */
  code: string;
  /** Valor do parâmetro utm_campaign usado no Google Ads */
  utmCampaign: string;
  name: string;
}
