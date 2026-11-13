import type { Metadata } from "next";
import Link from "next/link";
import { privacyPolicy } from "@/content/privacy";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: `Como ${site.brand} ${site.brandTagline} trata os dados de quem visita esta página.`,
  alternates: { canonical: "/politica-de-privacidade" },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="py-16 md:py-24">
      <Container className="max-w-[780px]">
        <Link href="/" className="text-sm font-semibold text-gold-light hover:text-gold">
          Voltar para a página inicial
        </Link>
        <h1 className="mt-6 text-[clamp(2rem,4vw,3rem)] leading-tight font-bold">Política de privacidade</h1>
        <p className="mt-3 text-sm text-muted">Última atualização: {privacyPolicy.updatedAt}</p>

        <div className="mt-10 flex flex-col gap-9">
          {privacyPolicy.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold md:text-2xl">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3 leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </Container>
    </main>
  );
}
