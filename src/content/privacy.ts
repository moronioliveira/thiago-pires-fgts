import { site } from "./site";

/**
 * Política de privacidade (minuta).
 * Revisar com o escritório antes de publicar, principalmente as bases legais.
 */
export const privacyPolicy = {
  updatedAt: "10 de novembro de 2026",
  sections: [
    {
      title: "Quem somos",
      paragraphs: [
        `Esta página é mantida por ${site.legalName}, CNPJ ${site.cnpj}, responsável pelo tratamento dos dados descritos aqui. Contato: ${site.email}.`,
      ],
    },
    {
      title: "Quais dados coletamos",
      paragraphs: [
        "Esta página não tem formulário. Os dados pessoais que você decide compartilhar (nome, telefone, informações do seu caso e documentos como o extrato do FGTS) são enviados por você diretamente na conversa pelo WhatsApp.",
        "Durante a navegação, ferramentas de medição podem registrar informações técnicas, como páginas acessadas, origem da visita (por exemplo, um anúncio), tipo de dispositivo e cliques nos botões.",
      ],
    },
    {
      title: "Para que usamos os dados",
      paragraphs: [
        "Os dados enviados pelo WhatsApp são usados para analisar o seu caso, responder às suas dúvidas e, se você decidir contratar, prestar o serviço jurídico.",
        "As informações de navegação são usadas para medir o desempenho da página e dos anúncios e para melhorar o conteúdo.",
      ],
    },
    {
      title: "Cookies e ferramentas de terceiros",
      paragraphs: [
        "Usamos o Google Tag Manager, o Google Analytics e o Google Ads para medir visitas, cliques e contatos gerados pelos anúncios. Essas ferramentas podem usar cookies. Você pode bloquear ou apagar cookies nas configurações do seu navegador.",
        "Também podemos usar o Microsoft Clarity, que gera mapas de cliques e gravações anônimas da navegação para entender como a página é usada. Textos digitados e dados sensíveis são mascarados pela própria ferramenta.",
        "A conversa pelo WhatsApp segue também as políticas do próprio WhatsApp.",
      ],
    },
    {
      title: "Compartilhamento",
      paragraphs: [
        "Não vendemos dados pessoais. Os dados podem ser tratados por fornecedores necessários ao funcionamento da página e do atendimento (hospedagem, medição e mensagens) e, quando houver processo, informados ao Poder Judiciário na medida necessária.",
      ],
    },
    {
      title: "Seus direitos",
      paragraphs: [
        `Pela Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você pode pedir confirmação do tratamento, acesso, correção, anonimização, portabilidade ou exclusão dos seus dados, além de informações sobre compartilhamento. Para isso, escreva para ${site.email}.`,
      ],
    },
    {
      title: "Guarda e segurança",
      paragraphs: [
        "Os dados são guardados pelo tempo necessário às finalidades descritas e ao cumprimento de obrigações legais e profissionais, com medidas de segurança compatíveis com a natureza das informações.",
      ],
    },
    {
      title: "Atualizações",
      paragraphs: ["Esta política pode ser atualizada. A data da última versão fica no topo desta página."],
    },
  ],
};
