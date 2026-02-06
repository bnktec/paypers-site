import { CheckCircle2, FileSearch, Scale, Shield, Building2, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

const GovernanceSection = () => {
  const { ref, isInView } = useInView();
  const checklistItems = [
    {
      icon: FileSearch,
      text: "Confirmação do trânsito em julgado e situação processual",
    },
    {
      icon: Building2,
      text: "Análise do ente devedor e histórico de pagamento",
    },
    {
      icon: Scale,
      text: "Verificação da posição na ordem cronológica / fila",
    },
    {
      icon: Shield,
      text: "Cruzamento de informações com bases oficiais e documentos do caso",
    },
    {
      icon: AlertTriangle,
      text: "Avaliação de riscos jurídicos, financeiros e operacionais",
    },
    {
      icon: CheckCircle2,
      text: "Checagem de viabilidade de compensação, quando aplicável",
    },
  ];

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
          <div className={cn(
            "opacity-0 translate-y-10",
            isInView && "reveal-up"
          )}>
            <span className="inline-block text-sm font-medium text-brand mb-4 tracking-wider uppercase">
              Governança
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Rigor metodológico: checklist Paypers de validação e elegibilidade
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Entrar no mercado de precatórios sem análise profunda é assumir risco desnecessário.
              Antes de incluir um crédito em qualquer operação — ou apresentá-lo a investidores —
              a Paypers aplica protocolos de governança e auditoria documental.
            </p>
            <div className="p-4 sm:p-6 rounded-2xl bg-brand-lightest/50 border border-brand/20">
              <p className="text-muted-foreground">
                O resultado é uma operação com mais <strong className="text-foreground">previsibilidade</strong>,
                menos <strong className="text-foreground">surpresas</strong> e melhor{" "}
                <strong className="text-foreground">alinhamento entre risco e retorno</strong>.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {checklistItems.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "group flex items-start gap-4 p-5 rounded-xl bg-secondary/30 border border-border hover:border-brand/30 hover:bg-brand-lightest/30 transition-all duration-300 opacity-0 translate-y-10",
                  isInView && `reveal-up stagger-delay-${index}`
                )}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-brand-dark" />
                </div>
                <p className="text-foreground font-medium pt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernanceSection;
