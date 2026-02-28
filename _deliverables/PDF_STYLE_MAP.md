# Mapeamento do PDF de Estilos para o Site

Este documento descreve como as diretrizes extraídas de `Paypers - Referências.pdf` (e demais direcionamentos) foram aplicadas nos blocos da aplicação.

## 1. Referência "Fintech Premium" (C6 / Nubank / Inter)
- **O que diz o PDF/Direcionamento:** Visual Forte, Minimalista, Tecnologia como protagonista, Comunicação limpa, Estética Premium.
- **Como foi aplicado:** 
  - Fundo limpo (branco) para o Hero para passar confiança e clareza, contrastando com blocos escuros em "Soluções" que transmitem o peso institucional e sofisticação financeira (verde bem escuro).
  - Tipografia forte e geométrica (Outfit) nos títulos para passar a sensação de "Tech".

## 2. Hero Section
- **O que diz o PDF:** H1 Forte e Comercial, Subheadline curta, CTAs diretos.
- **Como foi aplicado:** 
  - Fonte `Outfit` em tamanho `4xl` a `7xl` (responsivo).
  - Badge pulsante "O seu papel tem valor" para direcionar o olhar.
  - CTAs com ícones do Lucide-React e efeito hover scale + translação.

## 3. Bloco "Soluções"
- **O que diz o PDF:** Dois pilares principais (Venda Precatório / Transação Tributária) + Investidores separados mas na Home.
- **Como foi aplicado:** 
  - Background alterado para `--background` em modo "dark" (`148 35% 15%`) criando forte distinção e elegância (inspirado na imagem de referência enviada).
  - Cards em "glassmorphism" ou com leve borda branca.
  - Efeito hover que levanta o card em `-translate-y-2` (estabelecendo interação sofisticada mas não exagerada).
  - "Transação Tributária" tem destaque visual no centro com uso da cor Accent (`--accent`, Lime Green da referência da imagem).
