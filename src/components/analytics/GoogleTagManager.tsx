const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

/**
 * Google Tag Manager. Só carrega se NEXT_PUBLIC_GTM_ID estiver definido.
 * As conversões do Google Ads são configuradas dentro do GTM
 * a partir do evento "whatsapp_click" (veja o README).
 *
 * O script vai direto no HTML, dentro do <head> (formato padrão do Google),
 * para que o Search Console consiga verificar a propriedade pelo GTM.
 */
export function GoogleTagManager() {
  if (!GTM_ID) return null;

  return (
    // eslint-disable-next-line @next/next/next-script-for-ga -- precisa estar no HTML estático para o Search Console verificar
    <script
      id="gtm"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
      }}
    />
  );
}

/** Fallback do GTM para quem navega sem JavaScript (vai logo após o <body>). */
export function GoogleTagManagerNoScript() {
  if (!GTM_ID) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
