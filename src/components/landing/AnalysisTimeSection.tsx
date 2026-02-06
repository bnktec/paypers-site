import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, FileText, CheckCircle2, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

const AnalysisTimeSection = () => {
  const { ref, isInView } = useInView();
  const steps = [
    {
      icon: Send,
      title: "Envio",
      description: 'Clique em "Tenho um precatório e quero avaliar" e envie dados e documentos pela plataforma.',
    },
    {
      icon: FileText,
      title: "Verificação",
      description: "Fazemos verificação preliminar e checklist documental.",
    },
    {
      icon: CheckCircle2,
      title: "Parecer",
      description: "Em até 3 a 5 dias úteis após o envio completo, entregamos o parecer técnico.",
    },
  ];

  const deliverables = [
    "Elegibilidade do crédito",
    "Caminhos possíveis (venda, compensação, inclusão em carteira)",
    "Faixa de deságio e estimativa de prazo",
    "Riscos relevantes e observações jurídicas",
  ];

  return (
    <section className="py-24 bg-brand-lightest/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className={cn(
            "text-center mb-16 opacity-0 translate-y-10",
            isInView && "reveal-up"
          )}>
            <span className="inline-block text-sm font-medium text-brand mb-4 tracking-wider uppercase">
              Processo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Em quanto tempo a Paypers analisa um precatório?
            </h2>
            <p className="text-lg text-muted-foreground">
              Nosso fluxo foi desenhado para ser simples e objetivo.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative mb-16">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-brand/20 -translate-y-1/2" />
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={cn(
                    "relative flex flex-col items-center text-center opacity-0 translate-y-10",
                    isInView && `reveal-up stagger-delay-${index}`
                  )}
                >
                  <div className="relative z-10 w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-6 shadow-card">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium text-brand mb-2">Passo {index + 1}</span>
                  <h3 className="font-semibold text-xl mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={cn(
            "p-8 rounded-2xl bg-background border border-border shadow-card mb-12 opacity-0",
            isInView && "reveal-fade"
          )}>
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-brand" />
              <h3 className="font-semibold text-xl">O que você recebe no parecer:</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {deliverables.map((item, index) => (
                <div key={index} className={cn(
                  "flex items-center gap-3 opacity-0 translate-y-10",
                  isInView && `reveal-up stagger-delay-${index}`
                )}>
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={cn(
            "text-center opacity-0 translate-y-10",
            isInView && "reveal-up"
          )}>
            <Button variant="hero" size="xl" className="group">
              Enviar meu precatório para análise técnica
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalysisTimeSection;
