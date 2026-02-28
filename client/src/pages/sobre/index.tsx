import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Shield, Eye, Target, ChevronRight } from "lucide-react";

export default function Sobre() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/sobre-hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-secondary/40" />
        <div className="relative z-50"><Header variant="transparent" /></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-24 md:py-32">
          <div className="max-w-[650px]">
            <h1 className="text-white text-[36px] md:text-[52px] font-semibold leading-[1.1] tracking-tight">
              Estrutura, Técnica e Compromisso com{" "}
              <span className="text-primary">Segurança Jurídica</span>
            </h1>
          </div>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section className="py-24 bg-subtle-grid">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="w-8 h-1 bg-primary mb-6" />
              <h2 className="text-[32px] md:text-[40px] text-secondary font-semibold leading-[1.2] tracking-tight mb-8">
                Quem Somos
              </h2>
              <p className="text-muted-foreground text-[16px] leading-[1.6]">
                Atuamos na estruturação de operações envolvendo precatórios e passivos tributários, com abordagem técnica, transparente e orientada a resultados. A Paypers não é apenas intermediadora — é uma plataforma de estruturação financeira baseada em tecnologia.
              </p>
            </div>
            <div>
              <div className="w-8 h-1 bg-primary mb-6" />
              <h2 className="text-[32px] md:text-[40px] text-secondary font-semibold leading-[1.2] tracking-tight mb-8">
                Missão
              </h2>
              <p className="text-muted-foreground text-[16px] leading-[1.6]">
                Gerar liquidez e eficiência financeira por meio de estrutura jurídica sólida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POSICIONAMENTO */}
      <section className="py-24 bg-neutral-lightest border-t border-neutral-light">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <div className="w-8 h-1 bg-primary mx-auto mb-6" />
          <h2 className="text-[32px] md:text-[40px] text-secondary font-semibold leading-[1.2] tracking-tight mb-8">
            Posicionamento
          </h2>
          <p className="text-[20px] text-muted-foreground leading-[1.6] font-medium italic">
            "Tecnologia e estratégia para transformar ativos judiciais em oportunidades."
          </p>
        </div>
      </section>

      {/* ESTRUTURA */}
      <section className="py-24 bg-subtle-blocks">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="w-8 h-1 bg-primary mx-auto mb-6" />
            <h2 className="text-[32px] md:text-[40px] text-secondary font-semibold leading-[1.2] tracking-tight">
              Nossa Estrutura
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Target, title: "Plataforma digital própria", desc: "Tecnologia para estruturar e monitorar operações com eficiência." },
              { icon: Shield, title: "Estrutura jurídica especializada", desc: "Equipe técnica focada em compliance e segurança operacional." },
              { icon: Eye, title: "Processo transparente", desc: "Atendimento consultivo com foco em eficiência e liquidez." },
            ].map((item, i) => (
              <div
                key={i}
                className="relative p-8 rounded-2xl bg-white group hover:-translate-y-1 transition-all duration-300"
                data-testid={`estrutura-${i}`}
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

      {/* SEGURANÇA & COMPLIANCE */}
      <section className="py-24 bg-secondary text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <div className="w-8 h-1 bg-primary mx-auto mb-6" />
          <h2 className="text-[32px] md:text-[40px] font-semibold leading-[1.2] tracking-tight mb-8">
            Segurança & Compliance
          </h2>
          <p className="text-white/70 text-[16px] leading-[1.6]">
            Operações conduzidas com rigor técnico, compliance e foco em previsibilidade jurídica. Atuamos com parceiros especializados e processos estruturados para garantir segurança em todas as etapas. Governança e transparência são pilares fundamentais da nossa atuação.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
