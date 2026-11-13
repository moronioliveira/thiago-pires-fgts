/**
 * Envio de eventos para o Google Tag Manager (dataLayer).
 * No GTM, o evento "whatsapp_click" vira a conversão do Google Ads.
 */

type DataLayerEvent = Record<string, unknown> & { event: string };

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

export function trackEvent(event: string, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...params });
}

/** Lê o utm_campaign da URL atual (só no navegador). */
export function getUtmCampaign(): string | null {
  if (typeof window === "undefined") return null;
  return new URLSearchParams(window.location.search).get("utm_campaign");
}
