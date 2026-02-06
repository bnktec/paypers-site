import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, FileCheck, Shield, TrendingUp, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

const ForInvestors = () => {
  const { ref, isInView } = useInView();
  const benefits = [
    {
      icon: FileCheck,
      title: "Curadoria técnica",
      description: "Seleção técnica de créditos com análise rigorosa.",
    },
    {
      icon: BarChart3,
      title: "Carteiras balanceadas",
      description: "Por tipo, prazo e potencial de retorno.",
    },
    {
      icon: TrendingUp,
      title: "Relatórios claros",
      description: "Sobre deságio, fluxo e cenários.",
    },
    {
      icon: Shield,
      title: "Mitigação de risco",
      description: "Operacional e jurídico com processos definidos.",
    },
    {
      icon: Users,
      title: "Acompanhamento",
      description: "Contínuo e comunicação transparente.",
    },
  ];

  return (
    <section id="investidores" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className={cn(
              "opacity-0 translate-y-10",
              isInView && "reveal-up"
            )}>
              <span className="inline-block text-sm font-medium text-brand mb-4 tracking-wider uppercase">
                Para Investidores
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Acesso a operações estruturadas, com governança e transparência
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Se você busca diversificar seu portfólio com ativos de crédito judicial,
                a Paypers estrutura operações em cotas com:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex items-start gap-3 opacity-0 translate-y-10",
                      isInView && `reveal-up stagger-delay-${index}`
                    )}
                  >
                    <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-4 h-4 text-brand-dark" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{benefit.title}</h4>
                      <p className="text-xs text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="hero" size="lg" className="group w-full sm:w-auto text-xs sm:text-base md:text-lg px-3 sm:px-6 md:px-8 py-3 sm:py-4 gap-2 leading-tight">
                Quero conhecer as oportunidades de investimento
                <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Button>
            </div>

            <div className={cn(
              "relative opacity-0 scale-95",
              isInView && "reveal-scale"
            )}>
              <div className="absolute inset-0 gradient-primary rounded-3xl opacity-10 blur-3xl" />
              <div className="relative p-4 sm:p-8 rounded-3xl gradient-card border border-border shadow-elevated">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary mb-4">
                    <TrendingUp className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Potencial diferenciado</h3>
                  <p className="text-muted-foreground text-sm">
                    Mercado com alto potencial e baixa correlação com ativos tradicionais
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Retorno potencial anualizado", value: "15-25%" },
                    { label: "Correlação com Ibovespa", value: "Baixa" },
                    { label: "Lastro", value: "Crédito judicial" },
                  ].map((item, index) => (
                    <div key={index} className={cn(
                      "flex items-center justify-between p-4 rounded-xl bg-secondary/50 opacity-0 translate-y-10",
                      isInView && `reveal-up stagger-delay-${index}`
                    )}>
                      <span className="text-muted-foreground text-sm">{item.label}</span>
                      <span className="font-semibold text-brand-dark">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForInvestors;
