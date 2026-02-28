# Paypers Website

## Overview
Site institucional/conversão da Paypers, fintech especializada em precatórios e transações tributárias. O objetivo principal é gerar downloads do app e capturar leads qualificados.

## Stack
- **Frontend:** React + Vite + Tailwind CSS v4 + wouter (routing) + Framer Motion
- **Backend:** Express.js + TypeScript
- **Database:** PostgreSQL (Drizzle ORM)
- **Fonts:** Montserrat (Google Fonts)

## Architecture
- `client/` - Frontend React SPA
  - `src/pages/home/` - Home (Hero, O Que Fazemos, Diferenciais, Como Funciona, Prova/Autoridade)
  - `src/pages/precatorios/` - Venda de Precatórios (Hero, Como Funciona, Benefícios, Segurança, FAQ, CTA)
  - `src/pages/tributaria/` - Transação Tributária (Hero, O que é, Para quem é, Benefícios, Estrutura, Segurança, FAQ, CTA)
  - `src/pages/investidores/` - Investidores (Hero, Por que, O que oferecemos, Perfil, Segurança, CTA)
  - `src/pages/sobre/` - Sobre (Hero, Quem Somos, Missão, Posicionamento, Estrutura, Compliance)
  - `src/pages/contato/` - Contato (Hero, Formulário + WhatsApp)
  - `src/pages/system-design/` - Design System documentation
  - `src/components/layout/` - Header (with dropdown), Footer (with CTA + WhatsApp floating)
  - `src/components/sections/` - ContactForm, LeadModal
  - `src/components/ui/` - shadcn/ui components
- `server/` - Express backend
  - `routes.ts` - API routes (/api/contacts, /api/leads)
  - `storage.ts` - Database storage interface (Drizzle)
  - `db.ts` - Database connection
- `shared/schema.ts` - Drizzle schema (users, contacts, leads)

## Design System
- **Brand Color:** #93C11F (green) - from Figma
- **Base Dark:** #10101B
- **Neutrals:** #FAFAFA to #0A0A0A scale (7-step)
- **Typography:** Montserrat (SemiBold for headings, Regular for body)
- All tokens defined as CSS variables in `client/src/index.css`

## Database Tables
- `contacts` - Form submissions (name, email, phone, company, subject, message)
- `leads` - Lead captures from CTA modals (name, email, phone, type)
- `users` - Base user table

## Routes
- `/` - Home
- `/precatorios` - Venda de Precatórios
- `/tributaria` - Transação Tributária
- `/investidores` - Para Investidores
- `/sobre` - Sobre
- `/contato` - Contato
- `/system-design` - Design System

## Copy Source
All page copy comes from `Paypers - Copy Final.pdf`. Headlines, subheadlines, CTAs and body text match the PDF exactly.
