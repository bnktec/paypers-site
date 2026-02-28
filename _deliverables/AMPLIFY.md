# Deploy AWS Amplify - Guia

Este projeto foi construído utilizando React + Vite (como SPAs), emulado através de uma configuração padrão de frontend moderno.
Ele está perfeitamente apto para ser hospedado via AWS Amplify Console.

## Configuração Recomendada (amplify.yml)

Se você conectar seu repositório no AWS Amplify, ele deve detectar automaticamente a stack Vite/React.
Certifique-se de que as configurações de Build (`amplify.yml`) sejam:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist/public
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

## Considerações sobre Roteamento (SPAs)
Como estamos usando `wouter` para navegação no lado do cliente, o Amplify precisará de uma regra de redirecionamento para garantir que rotas (como `/system-design`) não retornem erro 404 (Access Denied) quando acessadas diretamente pelo navegador.

Vá em "Rewrites and redirects" no console do Amplify e adicione a seguinte regra:
- **Source address**: `</^[^.]+$|\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|woff2|ttf|map|json|webp)$)([^.]+$)/>`
- **Target address**: `/index.html`
- **Type**: `200 (Rewrite)`

## Variáveis de Ambiente
O projeto atual é totalmente client-side e as rotas são estáticas, não exigindo variáveis de ambiente complexas a não ser que integre APIs externas no futuro.

## Troubleshooting
- **Erro de rota ao recarregar a página**: Falta a regra de Rewrite 200 mencionada acima.
- **Falha no Build (Typescript)**: Se houver problemas de tipagem que bloqueiem o build do Vite, você pode ignorar localmente rodando `tsc --noEmit && vite build`, ou configurar o `tsconfig.json` do Vite adequadamente. No ambiente atual, `npm run build` executa o script local que realiza o build da pasta client.
