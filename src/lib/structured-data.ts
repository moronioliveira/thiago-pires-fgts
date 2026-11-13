import { faq } from "@/content/faq";
import { seo } from "@/content/seo";
import { formatOab, oabRegistrations, site, socialLinks } from "@/content/site";

/**
 * Dados estruturados (schema.org) da página.
 * Ajudam o Google e assistentes de IA (GEO) a entender quem é o advogado,
 * qual serviço é oferecido, onde atende e quais perguntas a página responde.
 */
export function buildStructuredData() {
  const ids = {
    website: `${site.url}/#website`,
    webpage: `${site.url}/#webpage`,
    service: `${site.url}/#escritorio`,
    person: `${site.url}/#thiago-pires`,
    faq: `${site.url}/#perguntas-frequentes`,
  };

  const sameAs = [site.mainSiteUrl, ...socialLinks.map((link) => link.url)];
  const imageUrl = `${site.url}/images/thiago-pires.webp`;
  const logoUrl = `${site.url}/images/logo-selo.png`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": ids.website,
        url: site.url,
        name: `${site.brand} ${site.brandTagline}`,
        inLanguage: "pt-BR",
        publisher: { "@id": ids.service },
      },
      {
        "@type": "WebPage",
        "@id": ids.webpage,
        url: site.url,
        name: seo.title,
        description: seo.description,
        inLanguage: "pt-BR",
        isPartOf: { "@id": ids.website },
        about: { "@type": "Thing", name: seo.topic },
        primaryImageOfPage: { "@type": "ImageObject", url: imageUrl },
        dateModified: seo.lastUpdated,
        author: { "@id": ids.person },
        reviewedBy: { "@id": ids.person },
        mainEntity: { "@id": ids.faq },
      },
      {
        "@type": "LegalService",
        "@id": ids.service,
        name: `${site.brand} ${site.brandTagline}`,
        legalName: site.legalName,
        url: site.url,
        logo: logoUrl,
        image: imageUrl,
        email: site.email,
        telephone: `+${site.whatsapp.number}`,
        taxID: site.cnpj,
        address: {
          "@type": "PostalAddress",
          addressLocality: site.city,
          addressRegion: site.region,
          addressCountry: "BR",
        },
        areaServed: { "@type": "Country", name: "Brasil" },
        knowsAbout: ["Direito do Trabalho", "Rescisão indireta", "FGTS", "Art. 483 da CLT"],
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: `https://wa.me/${site.whatsapp.number}`,
          availableLanguage: "pt-BR",
        },
        employee: { "@id": ids.person },
        sameAs,
      },
      {
        "@type": "Person",
        "@id": ids.person,
        name: site.lawyer.name,
        jobTitle: "Advogado trabalhista",
        description: `${site.lawyer.title}. Atendimento online para trabalhadores de todo o Brasil.`,
        image: imageUrl,
        worksFor: { "@id": ids.service },
        knowsAbout: ["Direito do Trabalho", "Rescisão indireta", "FGTS"],
        hasCredential: oabRegistrations.map((oab) => ({
          "@type": "EducationalOccupationalCredential",
          credentialCategory: oab.supplementary ? "Inscrição suplementar na OAB" : "Inscrição na OAB",
          identifier: formatOab(oab),
          recognizedBy: {
            "@type": "Organization",
            name: `Ordem dos Advogados do Brasil, Seccional ${oab.state}`,
          },
        })),
        sameAs: socialLinks.map((link) => link.url),
      },
      {
        "@type": "FAQPage",
        "@id": ids.faq,
        inLanguage: "pt-BR",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };
}
