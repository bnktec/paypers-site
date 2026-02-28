# Paypers - Fintech Website

Projeto frontend para a Paypers, focado na conversão de usuários através de precatórios e transações tributárias.

## Como Rodar Localmente

Certifique-se de ter o Node.js instalado. O projeto foi construído usando React + Vite e Tailwind V4.

1. **Instale as dependências:**
```bash
npm install
```

2. **Rode o servidor de desenvolvimento:**
```bash
npm run dev:client
```
*(A aplicação estará disponível em `http://localhost:5000`)*

3. **Gere o build para produção:**
```bash
npm run build
```

## Onde alterar Tokens e Design System

- As variáveis CSS de cor, fontes, espaçamentos e raios estão no arquivo `client/src/index.css`. Utilizamos a nova sintaxe do Tailwind v4 (`@theme inline`). As cores seguem o formato HSL (`H S% L%`).
- Verifique a documentação visual viva rodando o app e acessando a rota `/system-design`.

## Como Ajustar Motion/Interações

- As regras base de hover e transição (ex: `hover:-translate-y-2`, `transition-all`) estão aplicadas via classes utilitárias do Tailwind diretos nos componentes no arquivo `client/src/pages/home/index.tsx`.
- Para animações mais complexas ou customizações de *glassmorphism*, verifique as classes `.glass-panel` em `index.css`.

## Deploy (AWS Amplify)

O projeto está pronto para AWS Amplify. Para mais informações, acesse o guia específico em `_deliverables/AMPLIFY.md`.
