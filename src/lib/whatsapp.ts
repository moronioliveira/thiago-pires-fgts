import { findCampaign } from "@/content/campaigns";
import { site } from "@/content/site";

/** Monta o link do WhatsApp com a mensagem já preenchida. */
export function buildWhatsAppUrl(message: string = site.whatsapp.defaultMessage): string {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

/**
 * Mensagem padrão + código da campanha, quando o visitante veio de um anúncio.
 * Ex.: "Olá, vim pela página... (ref. C2)"
 */
export function buildMessageForCampaign(utmCampaign: string | null | undefined): string {
  const campaign = findCampaign(utmCampaign);
  if (!campaign) return site.whatsapp.defaultMessage;
  return `${site.whatsapp.defaultMessage} (ref. ${campaign.code})`;
}
