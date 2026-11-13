import { buildStructuredData } from "@/lib/structured-data";
import { InteractionTracker } from "@/components/analytics/InteractionTracker";
import { CookieNotice } from "@/components/layout/CookieNotice";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { About } from "@/components/sections/about/About";
import { Checklist } from "@/components/sections/checklist/Checklist";
import { Faq } from "@/components/sections/faq/Faq";
import { FinalCta } from "@/components/sections/final-cta/FinalCta";
import { Hero } from "@/components/sections/hero/Hero";
import { HowItWorks } from "@/components/sections/how-it-works/HowItWorks";
import { Reviews } from "@/components/sections/reviews/Reviews";
import { Rights } from "@/components/sections/rights/Rights";
import { Signals } from "@/components/sections/signals/Signals";
import { WhatIs } from "@/components/sections/what-is/WhatIs";

/**
 * Página principal. Para mudar a ordem das seções, basta reordenar os componentes abaixo.
 * Os textos de cada seção ficam em src/content.
 */
export default function HomePage() {
  return (
    <>
      <JsonLd data={buildStructuredData()} />
      <Header />
      <main>
        <Hero />
        <Signals />
        <WhatIs />
        <Rights />
        <HowItWorks />
        <About />
        <Reviews />
        <Checklist />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CookieNotice />
      <InteractionTracker />
    </>
  );
}
