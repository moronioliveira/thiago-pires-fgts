import type { Campaign } from "@/types/content";

/**
 * Campanhas de tráfego pago.
 *
 * Quando o visitante chega por um anúncio com ?utm_campaign=<utmCampaign>,
 * a mensagem do WhatsApp termina com "(ref. C1)", "(ref. C2)"...
 * Assim dá para saber, na própria conversa, qual campanha trouxe o contato.
 *
 * Os nomes abaixo são provisórios e serão ajustados quando as 3 campanhas
 * forem definidas. O que importa é o utmCampaign ser igual ao usado no Google Ads.
 */
export const campaigns: Campaign[] = [
  { code: "C1", utmCampaign: "rescisao-indireta", name: "Rescisão indireta" },
  { code: "C2", utmCampaign: "fgts-nao-depositado", name: "FGTS não depositado" },
  { code: "C3", utmCampaign: "advogado-trabalhista-online", name: "Advogado trabalhista online" },
];

export function findCampaign(utmCampaign: string | null | undefined): Campaign | undefined {
  if (!utmCampaign) return undefined;
  const value = utmCampaign.toLowerCase();
  return campaigns.find((campaign) => campaign.utmCampaign === value);
}
