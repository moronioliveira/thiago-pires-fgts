import type { Right, Signal, Step } from "@/types/content";

/** Seção "Algum destes sinais aparece no seu extrato?" */
export const signalsSection = {
  title: "Algum destes sinais aparece no seu extrato?",
  closing: "Reconheceu algum desses sinais? A análise do seu extrato é gratuita.",
};

export const signals: Signal[] = [
  {
    icon: "calendar-x",
    title: "Meses em branco no extrato",
    text: "Períodos inteiros sem nenhum depósito registrado pela empresa.",
  },
  {
    icon: "trend-down",
    title: "Depósitos abaixo do valor certo",
    text: "Em regra, o depósito deve ser de 8% do salário, e o valor que aparece é menor.",
  },
  {
    icon: "clock",
    title: "3 meses ou mais de atraso",
    text: "Se o extrato mostra 3 meses de atraso, já é possível analisar a rescisão indireta.",
  },
  {
    icon: "chat-dots",
    title: "Promessas de regularizar",
    text: "Você cobra, a empresa diz que vai resolver, e o extrato continua igual.",
  },
];

/** Seção "O que é rescisão indireta" */
export const whatIsSection = {
  title: "O que é rescisão indireta",
  lawReference: "CLT, Art. 483, alínea “d”",
  lawText:
    "“O empregado poderá considerar rescindido o contrato e pleitear a devida indenização quando: não cumprir o empregador as obrigações do contrato.”",
  paragraphs: [
    "A rescisão indireta é o fim do contrato de trabalho por culpa da empresa. Na prática, funciona como uma justa causa aplicada ao empregador.",
    "Deixar de depositar o FGTS, ou depositar de forma irregular, é descumprir uma obrigação do contrato. Por isso, pode servir de base para o pedido.",
    "Você não precisa pedir demissão. Pedir demissão, inclusive, pode fazer você abrir mão de verbas importantes.",
    "Quem reconhece a rescisão indireta é a Justiça do Trabalho, e cada caso tem seus detalhes. Por isso a análise do seu extrato vem antes de qualquer decisão.",
  ],
};

/** Seção "O que pode entrar na conta" */
export const rightsSection = {
  title: "O que pode entrar na conta",
  lead: "Quando a rescisão indireta é reconhecida, o trabalhador tem direito às mesmas verbas de uma demissão sem justa causa.",
  note: "Informações de caráter informativo. O que se aplica ao seu caso depende de análise individual.",
};

export const rights: Right[] = [
  {
    variant: "featured",
    highlight: "40%",
    title: "Multa sobre o FGTS",
    text: "Calculada sobre todo o valor que deveria ter sido depositado, inclusive os meses em atraso.",
  },
  {
    variant: "default",
    icon: "wallet",
    title: "Saque do FGTS",
    text: "Liberação do saldo, com os depósitos que a empresa deixou de fazer.",
  },
  {
    variant: "pattern",
    icon: "document",
    title: "Verbas rescisórias",
    text: "Saldo de salário, aviso prévio, férias com 1/3 e 13º proporcionais.",
  },
  {
    variant: "tinted",
    icon: "shield",
    title: "Seguro-desemprego",
    text: "Para quem cumpre os requisitos do programa, da mesma forma que na demissão sem justa causa.",
  },
];

/** Seção "Como funciona a análise gratuita" */
export const howItWorksSection = {
  title: "Como funciona a análise gratuita",
  lead: "Três passos, tudo pelo WhatsApp, de qualquer lugar do Brasil.",
};

export const steps: Step[] = [
  {
    title: "Chame no WhatsApp",
    text: "Clique no botão e conte em poucas palavras o que está acontecendo com o seu FGTS.",
  },
  {
    title: "Envie o extrato",
    text: "Baixe o extrato pelo aplicativo FGTS, da Caixa, e mande pelo próprio WhatsApp. Se tiver dificuldade, você recebe o passo a passo.",
  },
  {
    title: "Receba a orientação",
    text: "O Dr. Thiago analisa o seu caso e explica, com clareza, se há base para a rescisão indireta e quais são os próximos passos.",
  },
];

/** Seção "Quem vai analisar o seu caso" */
export const aboutSection = {
  title: "Quem vai analisar o seu caso",
  bio: [
    "é advogado especialista em Direito do Trabalho, inscrito na OAB/PI e na OAB/RS. Atende trabalhadores de todo o Brasil de forma online, com acompanhamento do primeiro contato até o fim do processo.",
    "Desde 2022 produz conteúdo sobre direitos trabalhistas nas redes sociais, explicando a CLT em linguagem simples para quem trabalha.",
  ],
};

/** Seção "Seu caso pode se encaixar se" (funciona como filtro de leads) */
export const checklistSection = {
  title: "Seu caso pode se encaixar se",
  items: [
    "Você trabalha ou trabalhou com carteira assinada",
    "O FGTS tem meses sem depósito ou com valor menor",
    "Você ainda está na empresa ou saiu há menos de 2 anos",
    "Você quer saber se pode sair sem perder seus direitos",
  ],
};

/** Chamada final */
export const finalCtaSection = {
  title: "Seu extrato pode mostrar mais do que parece.",
  text: "Mande uma mensagem agora e receba a análise gratuita do seu caso, sem sair de casa.",
};

export const legalNotice =
  "As informações desta página têm caráter informativo e não representam promessa de resultado. Cada caso é analisado individualmente. Publicidade de acordo com o Provimento nº 205/2021 do Conselho Federal da OAB.";
