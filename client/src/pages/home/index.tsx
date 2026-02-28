import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Scale, ShieldCheck, TrendingUp, Shield, Search, Settings, Eye, Users } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LeadModal from "@/components/sections/LeadModal";
import { Link } from "wouter";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-[36px] md:text-[48px] font-semibold text-primary leading-none mb-2">
      {count}{suffix}
    </div>
  );
}

function SolucoesSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) return;

    let current = 0;
    const sequence = [0, 1, 2];
    const timers: NodeJS.Timeout[] = [];

    function runCycle() {
      setActiveCard(sequence[current]);
      const holdTimer = setTimeout(() => {
        setActiveCard(null);
        const gapTimer = setTimeout(() => {
          current = (current + 1) % 3;
          runCycle();
        }, 400);
        timers.push(gapTimer);
      }, 1200);
      timers.push(holdTimer);
    }

    const startDelay = setTimeout(() => runCycle(), 600);
    timers.push(startDelay);

    return () => timers.forEach(t => clearTimeout(t));
  }, [isHovering]);

  const cards = [
    { href: "/precatorios", icon: Scale, title: "Venda de Precatórios", desc: "Antecipe valores judiciais com segurança e previsibilidade", testId: "card-precatorio" },
    { href: "/tributaria", icon: ShieldCheck, title: "Transação Tributária", desc: "Negocie débitos fiscais com estratégia e redução real", testId: "card-tributaria" },
    { href: "/investidores", icon: TrendingUp, title: "Plataforma para Investidores", desc: "Acesso estruturado a operações com lastro jurídico", testId: "card-investidor" },
  ];

  return (
    <section className="py-24 bg-subtle-grid">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="w-8 h-1 bg-primary mb-6" />
            <h2 className="text-[32px] md:text-[40px] text-secondary font-semibold leading-[1.2] tracking-tight mb-6">
              Soluções Estruturadas para Alta Performance Financeira
            </h2>
            <p className="text-muted-foreground text-[16px] leading-[1.6] mb-10">
              Atuamos na estruturação, intermediação e aquisição de precatórios, além da construção de estratégias em transação tributária. Nosso foco é unir inteligência jurídica e eficiência financeira para gerar liquidez, redução de passivos e oportunidades de investimento seguras.
            </p>

            <div
              className="flex flex-col gap-4"
              onMouseEnter={() => { setIsHovering(true); setActiveCard(null); }}
              onMouseLeave={() => setIsHovering(false)}
            >
              {cards.map((card, i) => {
                const Icon = card.icon;
                const isActive = !isHovering && activeCard === i;
                return (
                  <Link href={card.href} className="block" key={card.href}>
                    <div
                      className={`flex items-center gap-5 p-6 rounded-2xl transition-all duration-300 relative overflow-hidden cursor-pointer ${
                        isActive
                          ? "bg-secondary border border-secondary -translate-y-1"
                          : "bg-white border border-neutral-light hover:bg-secondary hover:border-secondary hover:-translate-y-1"
                      } group`}
                      data-testid={card.testId}
                    >
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl transition-all duration-500 ${isActive ? "opacity-100 scale-150" : "opacity-0 group-hover:opacity-100 group-hover:scale-150"}`} />
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-primary transition-colors duration-300 ${isActive ? "bg-white/10" : "bg-primary/10 group-hover:bg-white/10"}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1 relative z-10">
                        <h3 className={`text-[17px] font-semibold mb-1 transition-colors duration-300 ${isActive ? "text-white" : "text-secondary group-hover:text-white"}`}>{card.title}</h3>
                        <p className={`text-[13px] leading-[1.5] transition-colors duration-300 ${isActive ? "text-white/80" : "text-muted-foreground group-hover:text-white/80"}`}>{card.desc}</p>
                      </div>
                      <ChevronRight className={`w-5 h-5 text-primary flex-shrink-0 relative z-10 transition-transform ${isActive ? "translate-x-1" : "group-hover:translate-x-1"}`} />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center relative">
            <div className="relative">
              <img
                src="/app-mockup.png"
                alt="App Paypers"
                className="w-[280px] md:w-[360px] lg:w-[420px] drop-shadow-[0_20px_40px_rgba(147,193,31,0.25)]"
                data-testid="img-solucoes-mockup"
              />
              <img src="/app-icon.png" alt="" className="floating-icon-1 absolute -top-4 right-4 w-24 h-24 rounded-2xl shadow-xl opacity-65 blur-[0.5px]" />
              <img src="/app-icon.png" alt="" className="floating-icon-3 absolute bottom-20 left-2 w-20 h-20 rounded-xl shadow-lg opacity-50 blur-[1px]" />
              <img src="/app-icon.png" alt="" className="floating-icon-4 absolute bottom-4 right-16 w-16 h-16 rounded-xl shadow-lg opacity-55 blur-[1px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [leadModal, setLeadModal] = useState<{ open: boolean; type: string; title: string }>({
    open: false, type: "", title: "",
  });

  const openLead = (type: string, title: string) => {
    setLeadModal({ open: true, type, title });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <LeadModal
        open={leadModal.open}
        onClose={() => setLeadModal({ open: false, type: "", title: "" })}
        type={leadModal.type}
        title={leadModal.title}
      />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />
        <div className="absolute inset-0 bg-secondary/40" />

        <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
          <div className="hero-glow-1 absolute top-[10%] left-[5%] w-[350px] h-[350px] rounded-full bg-primary/25 blur-[100px]" />
          <div className="hero-glow-2 absolute bottom-[15%] right-[10%] w-[300px] h-[300px] rounded-full bg-primary/20 blur-[120px]" />
          <div className="hero-glow-3 absolute top-[35%] right-[25%] w-[450px] h-[450px] rounded-full bg-primary/15 blur-[150px]" />

          <div className="hero-light-streak-1 absolute top-[25%] left-0 w-[500px] h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          <div className="hero-light-streak-2 absolute top-[55%] left-0 w-[400px] h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="hero-light-streak-3 absolute top-[40%] left-0 w-[600px] h-[1.5px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="hero-light-streak-4 absolute top-[70%] left-0 w-[350px] h-[1.5px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <div className="hero-shimmer absolute top-[20%] left-0 w-[500px] h-[3px] bg-gradient-to-r from-transparent via-primary/60 to-transparent rounded-full" />
          <div className="hero-shimmer-2 absolute top-[65%] left-0 w-[400px] h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full" />

          <div className="hero-sparkle absolute top-[18%] left-[20%] w-[5px] h-[5px] rounded-full bg-primary" />
          <div className="hero-sparkle-2 absolute top-[30%] right-[18%] w-[4px] h-[4px] rounded-full bg-white/80" />
          <div className="hero-sparkle-3 absolute bottom-[25%] left-[35%] w-[6px] h-[6px] rounded-full bg-primary/80" />
          <div className="hero-sparkle-4 absolute top-[45%] left-[55%] w-[4px] h-[4px] rounded-full bg-white/60" />
          <div className="hero-sparkle-5 absolute bottom-[35%] right-[30%] w-[5px] h-[5px] rounded-full bg-primary/90" />
          <div className="hero-sparkle-6 absolute top-[15%] right-[40%] w-[4px] h-[4px] rounded-full bg-primary" />
          <div className="hero-sparkle-7 absolute bottom-[45%] left-[15%] w-[3px] h-[3px] rounded-full bg-white/70" />
        </div>
        
        <div className="relative z-50">
          <Header variant="transparent" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 flex-1 flex flex-col justify-center py-20">
          <div className="max-w-[700px] space-y-6">
            <h1 className="text-white text-[40px] md:text-[56px] lg:text-[68px] font-semibold leading-[1.1] tracking-tight">
              Transformamos Precatórios e Créditos Tributários em{" "}
              <span className="text-primary">Liquidez Estratégica</span>
            </h1>
            <p className="text-[16px] md:text-[18px] text-white/80 max-w-[550px] leading-[1.6]">
              Estruturação jurídica, segurança operacional e soluções sob medida para empresas e investidores que querem antecipar resultados com segurança.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <Button
                onClick={() => openLead("especialista", "Falar com um Especialista")}
                className="btn-neon bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg px-8 h-[56px] text-[15px] group"
                data-testid="button-hero-cta"
              >
                Falar com um Especialista
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link href="/precatorios">
                <Button variant="outline" className="btn-neon-outline rounded-lg px-8 h-[56px] text-[15px] font-semibold border-white/30 text-white hover:bg-white/10 hover:text-white" data-testid="button-hero-secondary">
                  Conhecer as Soluções
                </Button>
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* O QUE FAZEMOS */}
      <SolucoesSection />

      {/* DIFERENCIAIS */}
      <section className="py-24 relative overflow-hidden border-t border-neutral-light">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/diferenciais-center.jpg')" }}
        />
        <div className="absolute inset-0 bg-white/90" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="w-8 h-1 bg-primary mx-auto mb-6" />
            <h2 className="text-[32px] md:text-[40px] text-secondary font-semibold leading-[1.2] tracking-tight">
              Por que escolher nossa estrutura?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
            <div className="flex flex-col gap-10">
              {[
                { icon: Shield, title: "Segurança jurídica em todas as etapas" },
                { icon: Search, title: "Análise técnica criteriosa" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 md:text-right md:flex-row-reverse" data-testid={`diferencial-${i}`}>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <p className="text-[15px] font-semibold text-secondary leading-[1.4] pt-2">{item.title}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <img
                src="/horizontal-logo.png"
                alt="Paypers"
                className="w-[200px] md:w-[260px] lg:w-[300px] drop-shadow-[0_10px_30px_rgba(147,193,31,0.3)]"
                data-testid="img-diferenciais-center"
              />
            </div>

            <div className="flex flex-col gap-10">
              {[
                { icon: Settings, title: "Estruturação personalizada" },
                { icon: Eye, title: "Governança e transparência" },
                { icon: Users, title: "Atendimento consultivo" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4" data-testid={`diferencial-${i + 2}`}>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <p className="text-[15px] font-semibold text-secondary leading-[1.4] pt-2">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TUDO EM UM SÓ LUGAR */}
      <section className="py-24 bg-subtle-dots">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-[32px] md:text-[44px] text-secondary font-semibold leading-[1.2] tracking-tight mb-6">
              Tudo em um só lugar
            </h2>
            <p className="text-muted-foreground text-[16px] md:text-[18px] leading-[1.6]">
              Gerencie seus investimentos e acompanhe sua performance de forma simples e prática.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-20">
            <div className="text-center" data-testid="stat-0">
              <AnimatedNumber value={116} />
              <p className="text-[13px] md:text-[14px] text-muted-foreground">Corretoras e bancos</p>
            </div>
            <div className="text-center" data-testid="stat-1">
              <AnimatedNumber value={3} suffix="M+" />
              <p className="text-[13px] md:text-[14px] text-muted-foreground">Usuários cadastrados</p>
            </div>
            <div className="text-center" data-testid="stat-2">
              <AnimatedNumber value={4} suffix=".8" />
              <p className="text-[13px] md:text-[14px] text-muted-foreground">Nota média no app</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex justify-center relative">
              <div className="relative">
                <img
                  src="/mascote-app.png"
                  alt="App Paypers"
                  className="w-[260px] md:w-[320px] lg:w-[380px] drop-shadow-[0_20px_40px_rgba(147,193,31,0.25)]"
                  data-testid="img-app-mockup"
                />

                <img src="/app-icon.png" alt="" className="floating-icon-1 absolute top-2 right-2 w-14 h-14 rounded-xl shadow-lg opacity-70 blur-[0.5px]" />
                <img src="/app-icon.png" alt="" className="floating-icon-2 absolute bottom-16 left-4 w-10 h-10 rounded-lg shadow-md opacity-50 blur-[1px]" />
                <img src="/app-icon.png" alt="" className="floating-icon-3 absolute top-1/3 right-0 w-8 h-8 rounded-md shadow-md opacity-40 blur-[1.5px]" />
                <img src="/app-icon.png" alt="" className="floating-icon-4 absolute bottom-4 right-12 w-12 h-12 rounded-xl shadow-lg opacity-60 blur-[0.5px]" />
              </div>
            </div>

            <div>
              <h3 className="text-[28px] md:text-[36px] text-primary font-semibold leading-[1.2] tracking-tight mb-10">
                Processo Simples e Estruturado
              </h3>
              <div className="bg-neutral-lightest border border-neutral-light rounded-2xl p-8">
                {[
                  { step: "01", title: "Análise Técnica", desc: "Recebemos a documentação e realizamos avaliação jurídica e financeira." },
                  { step: "02", title: "Estruturação da Proposta", desc: "Modelamos a operação conforme perfil e necessidade." },
                  { step: "03", title: "Formalização e Execução", desc: "Contrato, cessão ou negociação estruturada." },
                  { step: "04", title: "Acompanhamento", desc: "Monitoramento e suporte até a conclusão." },
                ].map((item, i, arr) => (
                  <div key={item.step} data-testid={`step-${item.step}`}>
                    <div className="flex items-start gap-5">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_0_16px_rgba(147,193,31,0.4)]">
                          <span className="text-[14px] font-bold">{item.step}</span>
                        </div>
                        {i < arr.length - 1 && (
                          <div className="w-[2px] h-10 bg-gradient-to-b from-primary/60 to-primary/10 mt-2" />
                        )}
                      </div>
                      <div className="pt-2">
                        <h4 className="text-[16px] font-semibold text-secondary mb-1">{item.title}</h4>
                        <p className="text-[14px] text-muted-foreground leading-[1.5]">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROVA / AUTORIDADE */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <div className="w-8 h-1 bg-secondary mx-auto mb-6" />
          <h2 className="text-[32px] md:text-[40px] font-semibold leading-[1.2] tracking-tight mb-8">
            Experiência, Estrutura e Confiança
          </h2>
          <p className="text-primary-foreground/80 text-[16px] md:text-[18px] leading-[1.6]">
            Operações conduzidas com rigor técnico, compliance e foco em previsibilidade jurídica. Atuamos com parceiros especializados e processos estruturados para garantir segurança em todas as etapas.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
