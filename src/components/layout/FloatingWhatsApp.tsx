import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

/** Botão de WhatsApp fixo no canto da tela. No celular aparece só o ícone. */
export function FloatingWhatsApp() {
  return (
    <div className="fixed right-4 bottom-4 z-30 animate-fade-up [animation-delay:1.6s] md:right-6 md:bottom-6">
      <WhatsAppButton location="flutuante" variant="floating" compactOnMobile />
    </div>
  );
}
