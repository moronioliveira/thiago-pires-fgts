# Landing page: Rescisão indireta por FGTS

Landing page de captação de leads para o escritório **Thiago Pires Advocacia e Consultoria**, focada em trabalhadores CLT cuja empresa não deposita (ou deposita errado) o FGTS. Atendimento online para todo o Brasil, com conversão direta pelo WhatsApp.

**Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4. Sem banco de dados e sem formulário.

## Como rodar

```bash
npm install
cp .env.example .env.local   # ajuste as variáveis
npm run dev                  # http://localhost:3000
```

Outros comandos:

| Comando | O que faz |
| --- | --- |
| `npm run build` | Gera a versão de produção |
| `npm run start` | Roda a versão de produção localmente |
| `npm run lint` | Verifica o código com ESLint |
| `npm run typecheck` | Verifica os tipos do TypeScript |

## Variáveis de ambiente

| Variável | Para que serve |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Endereço final da página. Usado no canonical, sitemap, Open Graph e dados estruturados. |
| `NEXT_PUBLIC_GTM_ID` | ID do Google Tag Manager (`GTM-XXXXXXX`). Vazio = GTM não carrega. |

## Estrutura de pastas

```
public/
  images/            Fotos, logo e imagens de fundo
  llms.txt           Resumo da página para assistentes de IA (GEO)
src/
  app/               Rotas e arquivos especiais do Next.js
    layout.tsx       HTML base, fontes, metadados de SEO, GTM
    page.tsx         Página principal: só monta as seções na ordem
    globals.css      Cores, fontes e animações (Tailwind v4)
    sitemap.ts       /sitemap.xml
    robots.ts        /robots.txt (libera buscadores e robôs de IA)
    manifest.ts      /manifest.webmanifest
    opengraph-image.tsx  Imagem de compartilhamento gerada no build
    icon.png, apple-icon.png  Ícones da aba e do celular
    politica-de-privacidade/  Página da política de privacidade
  content/           TODOS os textos editáveis da página
    site.ts          Dados do escritório, OAB, WhatsApp, redes, números
    seo.ts           Title, description e palavras-chave
    hero.ts          Textos do topo e extrato ilustrativo
    sections.ts      Textos das demais seções
    faq.ts           Perguntas frequentes (viram dados estruturados)
    reviews.ts       Avaliações do Google
    campaigns.ts     Códigos das campanhas de tráfego pago
    privacy.ts       Texto da política de privacidade
  components/
    layout/          Header, Footer, botão flutuante, aviso de cookies
    sections/        Uma pasta por seção da página
    ui/              Peças reutilizáveis (botão do WhatsApp, ícones, títulos...)
    seo/             Dados estruturados (JSON-LD)
    analytics/       Google Tag Manager
  lib/               Lógica simples: link do WhatsApp, rastreamento, schema.org
  types/             Tipos do conteúdo
```

### Regra geral para manutenção

- **Mudar um texto:** edite o arquivo correspondente em `src/content`. Não é preciso mexer nos componentes.
- **Mudar a ordem das seções:** reordene os componentes em `src/app/page.tsx`.
- **Mudar cores ou fontes:** edite o bloco `@theme` em `src/app/globals.css`.
- **Trocar imagens:** substitua os arquivos em `public/images` mantendo o mesmo nome.

## Conversão e rastreamento (Google Ads)

> Guia completo de configuração (GA4, Google Ads, GTM, Clarity) e indicadores para o relatório do cliente: [`docs/medicao.md`](docs/medicao.md). Contêiner do GTM pronto para importar: [`gtm/container-lp-fgts.json`](gtm/container-lp-fgts.json).

Todos os botões abrem o WhatsApp `(86) 99929-0429` com uma mensagem pronta. A cada clique, a página envia para o `dataLayer`:

```js
{ event: "whatsapp_click", cta_location: "hero" | "header" | "sinais" | "checklist" | "final" | "flutuante", campaign: "<utm_campaign>" | "organico" }
```

No Google Tag Manager:

1. Crie um acionador do tipo **Evento personalizado** com o nome `whatsapp_click`.
2. Crie a tag **Acompanhamento de conversões do Google Ads** com o ID e o rótulo da conversão, usando esse acionador.
3. Opcional: crie variáveis da camada de dados `cta_location` e `campaign` para relatórios.

A abertura de perguntas do FAQ também gera o evento `faq_open` com `faq_question` (registrado em `src/components/analytics/InteractionTracker.tsx`).

### Identificação da campanha na conversa

Se o anúncio usar `?utm_campaign=` com um dos valores de `src/content/campaigns.ts`, a mensagem do WhatsApp termina com `(ref. C1)`, `(ref. C2)` ou `(ref. C3)`. Assim o escritório sabe, na própria conversa, qual campanha trouxe o contato.

Exemplo de URL final no Google Ads:

```
https://fgts.thiagopiresadvocacia.com.br/?utm_source=google&utm_medium=cpc&utm_campaign=rescisao-indireta
```

## SEO e GEO

- Title, description, canonical, Open Graph e Twitter em `src/app/layout.tsx` (textos em `src/content/seo.ts`).
- Dados estruturados em `src/lib/structured-data.ts`: `WebSite`, `WebPage`, `LegalService` (área atendida: Brasil), `Person` (com as inscrições na OAB) e `FAQPage`.
- Um único `h1`, títulos `h2`/`h3` em ordem, textos alternativos nas imagens.
- `robots.txt` libera buscadores e robôs de IA; `llms.txt` resume os fatos principais para assistentes de IA.
- Imagens otimizadas com `next/image` e fontes com `next/font` (sem carregar fontes externas no navegador).

## Animações

As animações de entrada usam CSS. As animações ligadas à rolagem usam `animation-timeline` (Chrome, Edge e Safari recente); nos demais navegadores o conteúdo aparece normalmente, sem efeito. Quem desativa animações no sistema não vê nenhuma.

## Publicação na Vercel

1. Suba o projeto para um repositório no GitHub e importe na Vercel.
2. Configure as variáveis de ambiente.
3. Em **Domains**, adicione `fgts.thiagopiresadvocacia.com.br` e crie no DNS do domínio o registro `CNAME fgts -> cname.vercel-dns.com`.

## Antes de publicar

- Revisar a política de privacidade (`src/content/privacy.ts`).
- Confirmar com a OAB/PI a menção à análise gratuita e as avaliações com superlativos.
- Atualizar `seo.lastUpdated` sempre que mudar o conteúdo.
