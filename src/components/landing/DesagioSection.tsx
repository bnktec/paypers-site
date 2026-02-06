import { ArrowDownRight, Calculator, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

const DesagioSection = () => {
  const { ref, isInView } = useInView();
  const factors = [
    "Tipo do crédito (RPV, alimentar, comum)",
    "Ente devedor",
    "Prazo estimado de pagamento",
    "Riscos jurídicos e operacionais identificados",
  ];

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className={cn(
            "text-center mb-16 opacity-0 translate-y-10",
            isInView && "reveal-up"
          )}>
            <span className="inline-block text-sm font-medium text-brand mb-4 tracking-wider uppercase">
              Precificação
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Deságio: lógica de precificação e como alinhar expectativa com realidade
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Na prática, quem vende um precatório raramente recebe o valor de face. O mercado trabalha com{" "}
              <strong className="text-foreground">deságio</strong> — percentual de desconto sobre o valor nominal.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className={cn(
              "lg:col-span-1 p-8 rounded-2xl bg-brand-lightest/50 border border-brand/20 opacity-0 translate-y-10",
              isInView && "reveal-up"
            )}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-brand-dark" />
                </div>
                <h3 className="font-semibold text-lg">Fatores do deságio</h3>
              </div>
              <ul className="space-y-4">
                {factors.map((factor, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ArrowDownRight className="w-4 h-4 text-brand mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{factor}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              <div className={cn(
                "p-8 rounded-2xl bg-secondary/30 border border-border hover:border-brand/30 transition-all duration-300 hover-lift opacity-0 translate-y-10",
                isInView && "reveal-up stagger-delay-0"
              )}>
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-brand-dark" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Para o credor</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Apresentamos uma <strong className="text-foreground">faixa de valor fundamentada</strong>,
                  com transparência sobre os critérios utilizados.
                </p>
              </div>

              <div className={cn(
                "p-8 rounded-2xl bg-secondary/30 border border-border hover:border-brand/30 transition-all duration-300 hover-lift opacity-0 translate-y-10",
                isInView && "reveal-up stagger-delay-1"
              )}>
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-6">
                  <Calculator className="w-6 h-6 text-brand-dark" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Para o investidor</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Oferecemos <strong className="text-foreground">projeções realistas de retorno</strong> e
                  cenários de risco para tomada de decisão.
                </p>
              </div>
            </div>
          </div>

          <div className={cn(
            "mt-12 text-center opacity-0 translate-y-10",
            isInView && "reveal-up stagger-delay-2"
          )}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Você sabe exatamente em que operação está entrando e quais são os cenários possíveis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesagioSection;
