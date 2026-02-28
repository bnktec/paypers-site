"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, FileSearch, FileText, BarChart2, Briefcase } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LeadModal from "@/components/sections/LeadModal";

export default function Investidores() {
  const [leadOpen, setLeadOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <LeadModal
        open={leadOpen}
        onClose={() => setLeadOpen(false)}
        type="investidor"
        title="Falar com a Área de Investimentos"
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/investidores-hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-secondary/40" />
        <div className="relative z-50"><Header variant="transparent" /></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-24 md:py-32">
          <div className="max-w-[650px]">
            <h1 className="text-white text-[36px] md:text-[52px] font-semibold leading-[1.1] tracking-tight mb-6">
              Acesso Estruturado a Operações com{" "}
              <span className="text-primary">Lastro Jurídico</span>
            </h1>
            <p className="text-white/80 text-[16px] md:text-[18px] leading-[1.6] mb-8 max-w-[500px]">
              Plataforma dedicada a investidores qualificados que buscam previsibilidade e análise técnica rigorosa.
            </p>
            <Button
              onClick={() => setLeadOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg px-8 h-[56px] text-[15px] group"
              data-testid="button-investidores-cta"
            >
              Falar com a Área de Investimentos
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* POR QUE ATIVOS JUDICIAIS */}
      <section className="py-24 bg-subtle-grid">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="w-8 h-1 bg-primary mb-6" />
          <h2 className="text-[32px] md:text-[40px] text-secondary font-semibold leading-[1.2] tracking-tight mb-8">
            Por que ativos judiciais?
          </h2>
          <p className="text-muted-foreground text-[16px] leading-[1.6] mb-6">
            Ativos judiciais como precatórios representam créditos com lastro do poder público, oferecendo uma classe de ativos alternativa com características únicas: previsibilidade de pagamento, baixa correlação com o mercado financeiro tradicional e potencial de retorno estruturado.
          </p>
        </div>
      </section>

      {/* O QUE OFERECEMOS */}
      <section className="py-24 bg-neutral-lightest border-t border-neutral-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="w-8 h-1 bg-primary mx-auto mb-6" />
            <h2 className="text-[32px] md:text-[40px] text-secondary font-semibold leading-[1.2] tracking-tight">
              O que oferecemos
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { icon: FileSearch, title: "Análise jurídica detalhada", desc: "Due diligence completa com parecer técnico e avaliação de risco." },
              { icon: FileText, title: "Estruturação contratual", desc: "Contratos sob medida com segurança jurídica em todas as etapas." },
              { icon: BarChart2, title: "Modelagem de risco", desc: "Análise quantitativa e qualitativa para decisões fundamentadas." },
              { icon: Briefcase, title: "Acompanhamento processual", desc: "Monitoramento contínuo e relatórios de evolução das operações." },
            ].map((item, i) => (
              <div
                key={i}
                className="relative p-8 rounded-2xl bg-white group hover:-translate-y-1 transition-all duration-300"
                data-testid={`oferta-inv-${i}`}
              >
                <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl bg-primary/0 group-hover:bg-primary transition-colors duration-300" />
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-[18px] font-semibold text-secondary mb-3">{item.title}</h3>
                <p className="text-[14px] text-muted-foreground leading-[1.6]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERFIL DO INVESTIDOR */}
      <section className="py-24 bg-subtle-dots">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="w-8 h-1 bg-primary mb-6" />
          <h2 className="text-[32px] md:text-[40px] text-secondary font-semibold leading-[1.2] tracking-tight mb-8">
            Perfil do Investidor
          </h2>
          <p className="text-muted-foreground text-[16px] leading-[1.6]">
            Voltado para investidores qualificados que buscam diversificação com lastro jurídico e previsibilidade de retorno. Empresários, profissionais liberais e investidores de ativos alternativos que desejam retorno estruturado, segurança jurídica e operações com transparência.
          </p>
        </div>
      </section>

      {/* SEGURANÇA E GOVERNANÇA */}
      <section className="py-24 bg-secondary text-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <div className="w-8 h-1 bg-primary mx-auto mb-6" />
          <h2 className="text-[32px] md:text-[40px] font-semibold leading-[1.2] tracking-tight mb-8">
            Segurança e Governança
          </h2>
          <p className="text-white/70 text-[16px] leading-[1.6]">
            Todas as operações são conduzidas com rigor técnico, compliance e foco em previsibilidade jurídica. Atuamos com parceiros especializados e processos estruturados para garantir segurança em todas as etapas.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <h2 className="text-[32px] md:text-[40px] text-primary-foreground font-semibold leading-[1.2] mb-8">
            Solicite acesso às oportunidades disponíveis.
          </h2>
          <Button
            onClick={() => setLeadOpen(true)}
            className="bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-lg px-10 h-[56px] text-[16px] group"
            data-testid="button-investidores-cta-bottom"
          >
            Falar com Investimentos
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
