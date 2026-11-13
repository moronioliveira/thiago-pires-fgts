import type { StatementMonth } from "@/types/content";

export const hero = {
  eyebrow: "Atendimento online para todo o Brasil",
  /** Cada item é uma linha do título no desktop */
  titleLines: ["FGTS sem depósito?", "Você pode ter direito à rescisão indireta."],
  lead: "Envie seu extrato pelo WhatsApp e receba uma análise gratuita. Atendimento online para trabalhadores CLT de todo o Brasil.",
  statementCaption: "Exemplo ilustrativo de extrato do FGTS",
  secondaryLink: { label: "Como funciona", href: "#como-funciona" },
};

/** Extrato ilustrativo exibido no topo. deposited: false = mês sem depósito */
export const statementMonths: StatementMonth[] = [
  { label: "JAN", deposited: true },
  { label: "FEV", deposited: true },
  { label: "MAR", deposited: true },
  { label: "ABR", deposited: true },
  { label: "MAI", deposited: false },
  { label: "JUN", deposited: false },
  { label: "JUL", deposited: true },
  { label: "AGO", deposited: false },
  { label: "SET", deposited: false },
  { label: "OUT", deposited: false },
  { label: "NOV", deposited: false },
  { label: "DEZ", deposited: false },
];
