# PROMPT — Extrair Design System de 1 Imagem + Implementar Site Paypers (Next.js) com /system-design + Deploy AWS Amplify

Você é um **Front-end Tech Lead + Design Systems Engineer + Motion/3D Specialist + Amplify Deploy Engineer**.
Seu trabalho é **analisar 1 imagem** enviada como referência visual e **derivar um design system completo**, implementando/atualizando o site **Paypers** no repositório existente e garantindo que ele esteja **pronto para deploy no AWS Amplify**.

---

## 0) Contexto e Repositório (OBRIGATÓRIO)

- Repositório a ser usado (base do projeto):
  - `https://github.com/bnktec/paypers-site`

- Você deve:
  1) **Clonar/usar este repositório como base**
  2) **Não criar um projeto do zero fora do repo**
  3) Manter o site na raiz `/`
  4) Criar a documentação do Design System acessível em:
     - `https://<host>/system-design`

---

## 1) Entradas (ARQUIVOS OBRIGATÓRIOS)

### 1.1 Imagem base (OBRIGATÓRIA)
- `./reference/design.png` (ou `.jpg/.webp`)

### 1.2 PDF de referência de estilização (OBRIGATÓRIO E PRIORITÁRIO)
- `./docs/Paypers - Referências.pdf`

> ESTE PDF é a referência principal para **estilizar os blocos do site** (layout, tipografia, cores, espaçamentos, componentes e “blocos”/seções).
> Se houver divergência entre a imagem e o PDF, **o PDF vence** para decisões de diagramação e estilo dos blocos.

### 1.3 Outros PDFs (se existirem)
- `./docs/**/*.pdf` (usar para copy, instruções e consistência)

---

## 2) Objetivo Final (ENTREGÁVEIS)

Você deve entregar:

1) **Site principal no root `/`** (home e seções necessárias)
2) **Design System navegável em `/system-design`**
3) **Tokens do design system** (cores, tipografia, spacing, radius, shadows, motion, blur) usados de forma real (sem hardcode)
4) **Component library mínima** (Button, Card, Badge, Input, Navbar, Section, etc.)
5) **Motion/3D spec** + exemplos implementados (com fallback e acessibilidade)
6) **Integração com AWS Amplify pronta** (build compatível e configuração documentada)
7) **Relatórios em Markdown** explicando:
   - o que foi inferido da imagem
   - o que foi extraído/seguido do PDF
   - decisões técnicas e trade-offs

---

## 3) Stack Técnica (INVIOLÁVEL)

- **Next.js (App Router) + TypeScript**
- **TailwindCSS**
- **Framer Motion** (motion base)
- **GSAP + ScrollTrigger** (somente para scroll complexo)
- **Three.js ou React Three Fiber** (somente se justificar 3D real, ex. “celular girando”)
- **Acessibilidade:** respeitar `prefers-reduced-motion`
- **Performance:** lazy-load 3D, limitar blur pesado, evitar shaders caros

---

## 4) Deploy no AWS Amplify (OBRIGATÓRIO)

O projeto deve estar pronto para deploy via Amplify com GitHub.

### Regras:
- Não depender de runtime custom fora do padrão
- Garantir que `npm ci`/`npm install` e `npm run build` funcionem no ambiente padrão do Amplify
- Incluir instruções claras no `README.md` sobre:
  - Node version (se necessário via `.nvmrc`)
  - comandos de build
  - variáveis de ambiente (se houver)

### Entregável adicional:
- Criar `./_deliverables/AMPLIFY.md` contendo:
  - configurações recomendadas do Amplify
  - comandos de build
  - considerações de cache e artifacts
  - troubleshooting comum

> Se o repo já possuir `amplify.yml`, você deve **manter/ajustar** e documentar as mudanças.

---

## 5) Regras de Estilo (PDF é Lei)

Você deve usar **o arquivo `Paypers - Referências.pdf`** como base para:

- Estilo de blocos/seções
- Tipografia (hierarquia visual e tamanhos)
- Layout e grid
- Espaçamentos e rhythm
- Componentes (botões, cards, badges etc.)
- Uso de blur, sombras e fundos
- Tom visual (minimalista, tech, premium etc.)

Obrigatório:
- Criar `./_deliverables/PDF_STYLE_MAP.md` com:
  - “Bloco do PDF” → “Seção/Componente no site”
  - regras de estilização aplicadas
  - prints/descrição (sem OCR pesado; descreva visualmente)

---

## 6) Análise e Extração da Imagem (OBRIGATÓRIO)

Ao analisar `./reference/design.png`, você deve inferir:

### 6.1 Tokens
- **Cores**: HEX + nomenclatura (primary/secondary/accent/neutral/feedback)
- **Tipografia**: família (inferida), pesos, escala (xs–6xl), line-height, tracking
- **Spacing**: escala (2–96) e uso por seção
- **Radius**: escala (sm/md/lg/xl/2xl)
- **Shadows**: níveis (1–4)
- **Blur/Glass**: intensidades e regras de uso
- **Z-index**: camadas padrão
- **Motion**: durations, easing, delay tokens

Tudo isso deve virar arquivos em:
- `./design-system/tokens/*`

---

## 7) Motion / 3D / Scroll / Blur (OBRIGATÓRIO E COM CONTEXTO)

Você deve identificar e especificar padrões como:
- blur com profundidade e glass
- reveal/enter animations
- parallax contextual (não aleatório)
- sticky sections e scroll-driven transitions
- 3D (ex.: “celular girando”) — somente se fizer sentido e for justificável

### Para cada animação proposta:
Criar ficha em:
- `./design-system/motion/motion-spec.md`

Cada ficha deve conter:
- Nome
- Onde aparece (seção)
- Objetivo UX (por que existe)
- Gatilho (scroll/hover/viewport/time)
- Duração e easing
- Performance notes
- Fallback (sem 3D, reduced motion)
- Arquivos de implementação e referência

### Diretriz 3D (celular girando)
Só implemente 3D se:
- tiver função clara (apresentar produto)
- for leve/performance ok
- tiver fallback 2D
- respeitar reduced motion

Se não houver assets 3D:
- usar placeholder geométrico ou imagem 2D com transform
- documentar como substituir por modelo real posteriormente

---

## 8) Estrutura Obrigatória de Pastas e Rotas

Implemente (mínimo):

### Rotas:
- `/` = site
- `/system-design` = documentação do design system

---

## 9) Página /system-design (REQUISITOS)

A página `/system-design` deve renderizar e documentar:

- Paleta de cores (swatches + nomes + HEX)
- Tipografia (escala + exemplos)
- Spacing (escala + exemplos)
- Radius + Shadows + Blur (exemplos)
- Componentes com variantes (Button, Card, Badge, Input, etc.)
- Motion guidelines (resumo + links para exemplos)
- Do/Don’t (pelo menos 5 regras práticas)
- Checklist de consistência (tokens e uso real)

---

## 10) Uso de PDFs para Copy (OBRIGATÓRIO)

Você deve ler `./docs/**/*.pdf` (inclui o Paypers - Referências.pdf) e extrair:
- headlines
- subtítulos
- proposta de valor
- bullets
- CTAs

Entregável:
- `./_deliverables/COPY_MAP.md` mapeando **texto → seção**
- `./_deliverables/COPY_TONE.md` definindo tom/voz (regras)

Regras:
- Não colar blocos enormes sem adaptação.
- Se algo estiver faltando, criar placeholder **marcado como TODO**.

---

## 11) Checklist de Aceitação (OBRIGATÓRIO)

Criar `./_deliverables/CHECKLIST.md` e marcar ✅ quando cumprir:

- [ ] Repositório bnktec/paypers-site usado como base
- [ ] `npm install` funciona
- [ ] `npm run build` funciona
- [ ] `/` renderiza o site
- [ ] `/system-design` renderiza o design system
- [ ] Tokens existem e são usados (sem hardcode)
- [ ] Componentes base implementados e documentados
- [ ] Motion spec completo e com exemplos
- [ ] `prefers-reduced-motion` respeitado
- [ ] PDF “Paypers - Referências.pdf” aplicado nos blocos do site
- [ ] Amplify pronto e documentado (`_deliverables/AMPLIFY.md`)
- [ ] `README.md` atualizado com instruções

---

## 12) Saída Final (OBRIGATÓRIO)

Ao finalizar:
- Garantir que rode com:
  - `npm i`
  - `npm run dev`
  - `npm run build`
- Atualizar `README.md` com:
  - como rodar
  - onde alterar tokens
  - como ajustar componentes
  - como ajustar motion/3D
  - como fazer deploy no Amplify

---

## 13) Comece Agora

1) Inspecione o repo `bnktec/paypers-site` (estrutura atual, dependências, App Router vs Pages Router).
2) Importe/coloque tokens e estrutura do design system conforme definido.
3) Estilize os blocos do site seguindo **Paypers - Referências.pdf**.
4) Implemente `/system-design` completo.
5) Documente tudo em `./_deliverables/`.

Entregue o trabalho com código + documentação.
