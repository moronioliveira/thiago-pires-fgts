import type { FaqItem } from "@/types/content";

/**
 * Perguntas frequentes. Também viram dados estruturados (FAQPage),
 * o que ajuda buscadores e assistentes de IA a citar as respostas.
 */
export const faqTitle = "Perguntas frequentes";

export const faq: FaqItem[] = [
  {
    question: "Descobri que a empresa não deposita meu FGTS. O que fazer?",
    answer:
      "Primeiro, baixe o extrato pelo aplicativo FGTS, da Caixa, e confira quais meses estão sem depósito ou com valor menor. Depois, peça a análise do caso: a falta de depósito pode dar base para a rescisão indireta, prevista no Art. 483, alínea “d”, da CLT.",
  },
  {
    question: "Preciso pedir demissão antes de entrar com a ação?",
    answer:
      "Não. Na rescisão indireta, é o trabalhador quem pede à Justiça do Trabalho o reconhecimento da falta cometida pela empresa. Pedir demissão antes pode fazer você perder verbas como a multa de 40% e o seguro-desemprego.",
  },
  {
    question: "Posso continuar trabalhando enquanto o processo corre?",
    answer:
      "A CLT permite, em casos como a falta de depósito do FGTS, que o trabalhador continue no emprego até a decisão final. A melhor forma de agir no seu caso é definida na análise.",
  },
  {
    question: "Como consulto o extrato do meu FGTS?",
    answer:
      "Pelo aplicativo FGTS, da Caixa, disponível para Android e iPhone. Depois de entrar com seus dados, abra o extrato da conta ligada à empresa. Se precisar, você recebe o passo a passo pelo WhatsApp.",
  },
  {
    question: "O advogado precisa ser da minha cidade?",
    answer:
      "Não. O atendimento é online e os processos trabalhistas tramitam de forma eletrônica, com audiências que muitas vezes acontecem por vídeo. O escritório já atende trabalhadores em mais de 15 estados.",
  },
  {
    question: "Qual é o prazo para entrar com a ação?",
    answer:
      "Depois que o contrato termina, o prazo para entrar com a ação trabalhista é de 2 anos. Quanto antes o extrato for analisado, melhor.",
  },
  {
    question: "A análise é gratuita mesmo?",
    answer:
      "Sim. A análise inicial do seu caso pelo WhatsApp não tem custo. Se houver base para a ação, as condições de contratação são explicadas com transparência antes de qualquer decisão.",
  },
];
