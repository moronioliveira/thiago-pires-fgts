import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { formatOab, oabRegistrations, site } from "@/content/site";

/** Imagem de compartilhamento (WhatsApp, redes sociais, buscadores). Gerada no build. */
export const alt = "FGTS sem depósito? Você pode ter direito à rescisão indireta. Análise gratuita com advogado trabalhista online.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [logo, photo] = await Promise.all([
    readFile(join(process.cwd(), "public/images/logo-selo.png")),
    readFile(join(process.cwd(), "public/images/og-foto.png")),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#0b161b", color: "#ecefec" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px", width: "780px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} width={84} height={84} alt="" />
            <div style={{ display: "flex", flexDirection: "column", fontSize: 26 }}>
              <span style={{ fontWeight: 700 }}>{site.brand}</span>
              <span style={{ color: "#a3b4b9", fontSize: 20 }}>{site.brandTagline}</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <div style={{ fontSize: 60, fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              FGTS sem depósito? Você pode ter direito à rescisão indireta.
            </div>
            <div style={{ fontSize: 26, color: "#a3b4b9" }}>Análise gratuita pelo WhatsApp. Atendimento online em todo o Brasil.</div>
          </div>
          <div style={{ display: "flex", fontSize: 22, color: "#dcc59b", fontWeight: 700 }}>
            {site.lawyer.honorific}, {formatOab(oabRegistrations[0])}
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photoSrc} width={420} height={630} alt="" style={{ objectFit: "cover" }} />
      </div>
    ),
    size,
  );
}
