"use client";

import type { MouseEvent, ReactNode } from "react";
import { site } from "@/content/site";
import { buildMessageForCampaign, buildWhatsAppUrl } from "@/lib/whatsapp";
import { getUtmCampaign, trackEvent } from "@/lib/tracking";
import { Icon } from "./Icon";

type Variant = "primary" | "small" | "dark" | "floating";

const goldStyle =
  "bg-gold text-ink shadow-[0_12px_30px_-14px_rgba(196,166,115,.6)] hover:shadow-[0_20px_40px_-16px_rgba(196,166,115,.75)]";

const variantStyles: Record<Variant, string> = {
  primary: `${goldStyle} px-6.5 py-4 text-base`,
  small: `${goldStyle} px-4.5 py-2.5 text-sm`,
  dark: "bg-ink text-gold-light shadow-[0_14px_34px_-16px_rgba(11,22,27,.8)] px-6.5 py-4 text-base",
  floating: `${goldStyle} p-4 text-base md:px-6.5 md:py-4`,
};

interface WhatsAppButtonProps {
  /** Onde o botão está na página. Vai para o evento de conversão (ex.: "hero", "final"). */
  location: string;
  variant?: Variant;
  showIcon?: boolean;
  /** Esconde o texto no celular (usado no botão flutuante) */
  compactOnMobile?: boolean;
  className?: string;
  children?: ReactNode;
}

/**
 * Botão que abre o WhatsApp do escritório.
 * - Sem JavaScript, funciona como um link comum.
 * - Com JavaScript, inclui o código da campanha na mensagem e registra o clique no GTM.
 */
export function WhatsAppButton({
  location,
  variant = "primary",
  showIcon = true,
  compactOnMobile = false,
  className = "",
  children = site.ctaLabel,
}: WhatsAppButtonProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const utmCampaign = getUtmCampaign();
    event.currentTarget.href = buildWhatsAppUrl(buildMessageForCampaign(utmCampaign));
    trackEvent("whatsapp_click", { cta_location: location, campaign: utmCampaign ?? "organico" });
  }

  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label={`${site.ctaLabel} pelo WhatsApp`}
      className={`btn-shine inline-flex items-center justify-center gap-2.5 rounded-full font-bold whitespace-nowrap transition-[transform,box-shadow] duration-400 ease-out-expo hover:-translate-y-0.5 active:translate-y-0 active:scale-[.98] ${variantStyles[variant]} ${className}`}
    >
      {showIcon && <Icon name="whatsapp" strokeWidth={1.9} className="size-5 shrink-0" />}
      <span className={compactOnMobile ? "hidden md:inline" : undefined}>{children}</span>
    </a>
  );
}
