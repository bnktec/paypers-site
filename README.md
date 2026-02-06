# Paypers

Plataforma especializada em estruturação, análise e intermediação de operações com precatórios e RPVs. Conectamos investidores e credores com governança, dados e rigor jurídico.

## Sobre o Projeto

O Paypers oferece inteligência, governança e eficiência em operações com precatórios através de:

- **Análise Técnica**: Avaliação especializada de viabilidade e risco de precatórios
- **Governança**: Processos estruturados e transparentes em todas as operações
- **Intermediação Qualificada**: Conexão entre investidores institucionais e detentores de precatórios
- **Rigor Jurídico**: Compliance e análise legal em todas as etapas

## Tecnologias

Este projeto foi construído com:

- **Vite** - Build tool e dev server de alta performance
- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utility-first
- **shadcn/ui** - Componentes de UI reutilizáveis
- **React Router** - Navegação client-side
- **TanStack Query** - Gerenciamento de estado assíncrono
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas

## Desenvolvimento Local

### Pré-requisitos

- Node.js 18+ e npm instalados
- Recomendamos o uso do [nvm](https://github.com/nvm-sh/nvm) para gerenciar versões do Node

### Instalação

```sh
git clone https://github.com/bnktec/paypers-site.git
cd paypers-site
npm install
```

### Scripts Disponíveis

```sh
npm run dev         # Inicia servidor de desenvolvimento (porta 8080)
npm run build       # Build de produção
npm run build:dev   # Build em modo desenvolvimento
npm run preview     # Preview do build de produção
npm run lint        # Executa linting do código
npm run test        # Executa testes unitários
npm run test:watch  # Executa testes em modo watch
```

## Estrutura do Projeto

```
paypers-site/
├── src/
│   ├── components/     # Componentes React reutilizáveis
│   ├── pages/          # Páginas da aplicação
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utilitários e configurações
│   └── main.tsx        # Ponto de entrada da aplicação
├── public/             # Arquivos estáticos
├── .claude/            # Regras e configurações do projeto
└── vite.config.ts      # Configuração do Vite
```

## Convenções de Código

Este projeto segue regras específicas de código documentadas em `.claude/rules/`:

- **no-comments.md**: Código auto-explicativo sem comentários
- **no-emojis.md**: Comunicação profissional sem emojis

Consulte os arquivos de regras para detalhes completos.

## Build e Deploy

O projeto gera uma build otimizada de produção:

```sh
npm run build
```

Os arquivos de build serão gerados no diretório `dist/` e podem ser servidos por qualquer servidor de arquivos estáticos.

## Licença

Propriedade da Paypers. Todos os direitos reservados.
