"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/tracking";

/**
 * Registra interações que não são cliques em botões.
 * Hoje: abertura de perguntas do FAQ (<details data-faq="...">).
 * Cliques no WhatsApp são registrados no próprio WhatsAppButton.
 */
export function InteractionTracker() {
  useEffect(() => {
    function handleToggle(event: Event) {
      const element = event.target;
      if (!(element instanceof HTMLDetailsElement) || !element.open) return;
      const question = element.dataset.faq;
      if (question) trackEvent("faq_open", { faq_question: question });
    }

    // O evento "toggle" não sobe na árvore, por isso a escuta é na fase de captura
    document.addEventListener("toggle", handleToggle, true);
    return () => document.removeEventListener("toggle", handleToggle, true);
  }, []);

  return null;
}
