# Medição da landing page e das campanhas

Guia para configurar as tags que medem os contatos gerados pelos anúncios e para montar o relatório do cliente.

## 1. O que fica medido

| Evento | Quando acontece | Onde aparece |
| --- | --- | --- |
| `page_view` | Alguém abre a página | GA4 |
| `scroll` | A pessoa rola até 90% da página | GA4 (medição otimizada) |
| `whatsapp_click` | Clique em qualquer botão do WhatsApp. Envia `cta_location` (qual botão) e `campaign` (utm_campaign ou "organico") | GA4 e conversão no Google Ads |
| `faq_open` | Abertura de uma pergunta do FAQ. Envia `faq_question` | GA4 |
| Mapa de cliques e gravações | Toda a navegação, de forma anônima | Microsoft Clarity |

Posições do botão (`cta_location`): `header`, `hero`, `sinais`, `checklist`, `final`, `flutuante`.

### O que conta como "contato"

O clique no WhatsApp é a conversão medida automaticamente. Ele mostra a **intenção de contato**, porque a conversa acontece fora da página.

Para confirmar os **contatos reais**, use o código da campanha que a página coloca no fim da mensagem: `(ref. C1)`, `(ref. C2)` ou `(ref. C3)`. O escritório conta quantas conversas chegaram com cada código. Juntando os dois números, o relatório mostra cliques, conversas reais e quantas viraram clientes.

## 2. Configuração (uma vez só)

O ideal é criar as contas no e-mail do escritório e dar acesso de administrador para você. Assim os dados continuam com o cliente.

### Google Analytics 4

1. Crie uma propriedade com fuso horário de São Paulo e moeda Real.
2. Crie um fluxo de dados da Web com o endereço da página.
3. Deixe a **medição otimizada** ligada.
4. Copie o **ID de métricas** (`G-...`).

### Google Ads (conversão)

1. Vá em **Metas > Conversões > Nova ação de conversão > Site**.
2. Configure manualmente:
   - Categoria: **Contato**
   - Nome: `Clique no WhatsApp - LP FGTS`
   - Valor: não usar valor (ou um valor estimado, se o cliente informar)
   - Contagem: **Uma** (uma conversão por clique no anúncio)
   - Janela de conversão: 30 dias
3. Em **Configuração da tag**, escolha **Usar o Gerenciador de tags do Google** e copie o **ID de conversão** e o **rótulo**.

### Google Tag Manager

1. Crie uma conta e um contêiner do tipo **Web**.
2. Vá em **Administrador > Importar contêiner**, selecione `gtm/container-lp-fgts.json`, escolha o espaço de trabalho atual e a opção **Substituir**.
3. Em **Variáveis**, troque os quatro valores de exemplo:
   - `CONST - GA4 ID`: o `G-...`
   - `CONST - Google Ads ID de conversão`: só os números depois de `AW-`
   - `CONST - Google Ads rótulo de conversão`: o rótulo da conversão
   - `CONST - Clarity ID`: o ID do projeto no Clarity (se não for usar, pause a tag "Microsoft Clarity")
4. Clique em **Visualizar**, abra a página, clique em um botão do WhatsApp e confira se as tags "GA4 - Evento whatsapp_click" e "Google Ads - Conversão clique no WhatsApp" dispararam.
5. Clique em **Enviar** para publicar.
6. Na Vercel, defina `NEXT_PUBLIC_GTM_ID` com o `GTM-...` e faça um novo deploy.

Se a importação der erro, crie manualmente as mesmas peças: uma Google tag com o ID do GA4 (todas as páginas), um vinculador de conversões (todas as páginas), um acionador de evento personalizado `whatsapp_click`, uma tag de evento GA4 `whatsapp_click` e uma tag de conversão do Google Ads, as duas com esse acionador.

### Ajustes no GA4 depois da primeira visita

1. **Administrador > Eventos**: marque `whatsapp_click` como **evento principal**.
2. **Administrador > Definições personalizadas**: crie as dimensões de evento `cta_location`, `campaign` e `faq_question`. Sem isso, esses dados não aparecem nos relatórios.
3. **Administrador > Links de produtos**: vincule o GA4 ao Google Ads.
4. No Google Ads, se importar o evento do GA4, deixe-o como conversão **secundária**. A conversão principal continua sendo a tag do Google Ads, para não contar o mesmo clique duas vezes.

### Microsoft Clarity (opcional, gratuito)

Crie um projeto, copie o ID e coloque na variável do GTM. Mostra mapas de calor dos cliques, até onde as pessoas rolam e gravações anônimas da navegação.

### Google Search Console

Verifique o domínio e envie `https://fgts.thiagopiresadvocacia.com.br/sitemap.xml`. É o que mostra o desempenho orgânico (SEO).

### Acesso do cliente

Adicione o Dr. Thiago como **leitor** no GA4, no Google Ads, no Clarity e no relatório do Looker Studio.

## 3. Indicadores para o relatório do cliente

| Indicador | O que mostra | Onde pegar |
| --- | --- | --- |
| Investimento | Quanto foi gasto no período | Google Ads |
| Impressões, cliques e CTR | Alcance e atratividade dos anúncios | Google Ads |
| CPC médio | Custo de cada visita vinda do anúncio | Google Ads |
| Visitas à página | Sessões por campanha e por origem | GA4 (Aquisição de tráfego) |
| Cliques no WhatsApp | Contatos iniciados pela página | Google Ads (conversões) e GA4 (`whatsapp_click`) |
| Taxa de conversão da página | Cliques no WhatsApp divididos pelas visitas | GA4 |
| Custo por contato | Investimento dividido pelos cliques no WhatsApp | Google Ads (custo/conv.) |
| Conversas reais por campanha | Mensagens recebidas com `ref. C1`, `C2`, `C3` | Escritório |
| Casos qualificados e contratos | Quantos contatos tinham caso e quantos fecharam | Escritório |
| Custo por contrato | Investimento dividido pelos contratos | Cálculo com os dados acima |
| Botão mais clicado | Qual parte da página convence mais | GA4 (`cta_location`) |
| Dúvidas mais abertas | O que o público quer saber antes de chamar | GA4 (`faq_question`) |
| Celular x computador | Onde está o público | GA4 (Tecnologia) |
| Estados de origem | De onde vêm os contatos no Brasil | GA4 (Detalhes demográficos) |
| Termos pesquisados | O que as pessoas digitaram antes de clicar | Google Ads (termos de pesquisa) |
| Mapa de calor | Onde clicam e até onde leem | Microsoft Clarity |

Sugestão de rotina: acompanhar semanalmente no Google Ads e enviar ao cliente um relatório mensal no Looker Studio (fontes: GA4 e Google Ads), com uma linha para os dados que o escritório informa (conversas reais e contratos).

## 4. Teste rápido antes de ligar os anúncios

- [ ] Abrir a página com `?utm_campaign=rescisao-indireta` e clicar no WhatsApp: a mensagem termina com `(ref. C1)`.
- [ ] No modo Visualizar do GTM, as tags de evento e de conversão disparam no clique.
- [ ] No GA4, em **Relatórios > Tempo real**, aparece o evento `whatsapp_click`.
- [ ] No Google Ads, a conversão aparece como "Gravando conversões" em até 24 horas após o primeiro clique.
