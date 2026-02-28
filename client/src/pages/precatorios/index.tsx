import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, ChevronRight, FileText, Search, PenTool, CreditCard, Shield } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LeadModal from "@/components/sections/LeadModal";

export default function Precatorios() {
  const [leadOpen, setLeadOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <LeadModal
        open={leadOpen}
        onClose={() => setLeadOpen(false)}
        type="precatorio"
        title="Solicitar Análise Gratuita"
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/precatorios-hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-secondary/40" />
        <div className="relative z-50"><Header variant="transparent" /></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-24 md:py-32">
          <div className="max-w-[650px]">
            <h1 className="text-white text-[36px] md:text-[52px] font-semibold leading-[1.1] tracking-tight mb-6">
              Venda seu Precatório com{" "}
              <span className="text-primary">Segurança e Agilidade</span>
            </h1>
            <p className="text-white/80 text-[16px] md:text-[18px] leading-[1.6] mb-8 max-w-[500px]">
              Antecipe valores judiciais com estrutura jurídica sólida e negociação transparente.
            </p>
            <Button
              onClick={() => setLeadOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg px-8 h-[56px] text-[15px] group"
              data-testid="button-precatorio-cta"
            >
              Solicitar Análise Gratuita
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-24 bg-subtle-grid">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="w-8 h-1 bg-primary mx-auto mb-6" />
            <h2 className="text-[32px] md:text-[40px] text-secondary font-semibold leading-[1.2] tracking-tight">
              Como Funciona
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Envio da documentação", desc: "Você nos envia os documentos do precatório para análise.", icon: FileText },
              { step: "02", title: "Análise Jurídica", desc: "Nossa equipe realiza avaliação completa do crédito judicial.", icon: Search },
              { step: "03", title: "Proposta Formal", desc: "Enviamos proposta personalizada com condições claras.", icon: PenTool },
              { step: "04", title: "Assinatura e Pagamento", desc: "Formalização do contrato e pagamento ágil.", icon: CreditCard },
            ].map((item, i, arr) => (
              <div key={item.step} className="flex flex-col items-center text-center relative" data-testid={`precatorio-step-${item.step}`}>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-secondary text-white flex items-center justify-center mb-5 mx-auto shadow-lg">
                    <item.icon className="w-7 h-7" />
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-[2px]">
                    <div className="w-full h-full bg-gradient-to-r from-primary/50 to-primary/20" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-primary/40" />
                  </div>
                )}
                <span className="text-[12px] font-bold text-primary tracking-widest uppercase mb-2">Passo {item.step}</span>
                <h4 className="text-[16px] font-semibold text-secondary mb-2 px-2">{item.title}</h4>
                <p className="text-[13px] text-muted-foreground leading-[1.5] px-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-24 bg-neutral-lightest border-t border-neutral-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="w-8 h-1 bg-primary mx-auto mb-6" />
            <h2 className="text-[32px] md:text-[40px] text-secondary font-semibold leading-[1.2] tracking-tight">
              Benefícios
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { num: "01", title: "Liquidez Imediata", desc: "Transforme seu crédito judicial em capital disponível rapidamente." },
              { num: "02", title: "Eliminação de incerteza de prazo", desc: "Sem depender de cronogramas do governo para receber." },
              { num: "03", title: "Processo estruturado", desc: "Cada etapa documentada e transparente do início ao fim." },
              { num: "04", title: "Segurança contratual", desc: "Formalização jurídica completa com respaldo técnico." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-5 group" data-testid={`beneficio-${i}`}>
                <span className="text-[48px] font-bold text-primary/15 leading-none flex-shrink-0 group-hover:text-primary/30 transition-colors duration-300">{item.num}</span>
                <div className="pt-2">
                  <h3 className="text-[17px] font-semibold text-secondary mb-2">{item.title}</h3>
                  <p className="text-[14px] text-muted-foreground leading-[1.5]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEGURANÇA */}
      <section className="py-24 bg-subtle-dots">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="w-8 h-1 bg-primary mb-6" />
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
              <Shield className="w-6 h-6" />
            </div>
            <h2 className="text-[32px] md:text-[40px] text-secondary font-semibold leading-[1.2] tracking-tight">
              Segurança Jurídica
            </h2>
          </div>
          <p className="text-muted-foreground text-[16px] leading-[1.6]">
            Todas as operações seguem critérios técnicos rigorosos, análise documental completa e formalização contratual transparente.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-neutral-lightest border-t border-neutral-light">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="w-8 h-1 bg-primary mb-6" />
          <h2 className="text-[32px] md:text-[40px] text-secondary font-semibold leading-[1.2] tracking-tight mb-12">
            Perguntas Frequentes
          </h2>
          <div className="space-y-4">
            {[
              { q: "Quanto tempo leva para vender meu precatório?", a: "O processo completo leva em média de 7 a 15 dias úteis, dependendo da documentação e análise jurídica." },
              { q: "É seguro vender meu precatório?", a: "Sim. Toda operação é formalizada com contrato, análise documental completa e acompanhamento jurídico." },
              { q: "Quais tipos de precatórios são aceitos?", a: "Trabalhamos com precatórios federais, estaduais e municipais, alimentares e comuns." },
            ].map((item, i) => (
              <details key={i} className="bg-white rounded-xl border border-neutral-light p-6 group" data-testid={`faq-${i}`}>
                <summary className="font-semibold text-[16px] text-secondary cursor-pointer list-none flex justify-between items-center">
                  {item.q}
                  <span className="text-primary text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-muted-foreground text-[14px] leading-[1.6] mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <h2 className="text-[32px] md:text-[40px] text-primary-foreground font-semibold leading-[1.2] mb-8">
            Receba uma proposta personalizada.
          </h2>
          <Button
            onClick={() => setLeadOpen(true)}
            className="bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-lg px-10 h-[56px] text-[16px] group"
            data-testid="button-precatorio-cta-bottom"
          >
            Falar com Especialista
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
