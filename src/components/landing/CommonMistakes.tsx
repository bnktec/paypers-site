import { AlertCircle, X, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

const CommonMistakes = () => {
  const { ref, isInView } = useInView();
  const mistakes = [
    "Comprar ou vender sem validação jurídica completa",
    "Ignorar a classificação do crédito ao estimar prazo e risco",
    "Basear decisões em promessas, boatos ou expectativas irreais",
    "Desconsiderar a capacidade e histórico de pagamento do ente público",
    "Entrar em operações sem clareza sobre deságio, estrutura e cenários",
  ];

  return (
    <section className="py-24 bg-brand-lightest/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className={cn(
            "text-center mb-16 opacity-0 translate-y-10",
            isInView && "reveal-up"
          )}>
            <span className="inline-block text-sm font-medium text-brand mb-4 tracking-wider uppercase">
              Atenção
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Os erros mais comuns no setor — e como a Paypers evita que você caia neles
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A informalidade e a falta de critério técnico ainda geram decisões equivocadas no mercado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className={cn(
                "flex items-center gap-3 mb-6 opacity-0 translate-y-10",
                isInView && "reveal-up stagger-delay-0"
              )}>
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="font-semibold text-lg">Erros comuns do mercado</h3>
              </div>
              {mistakes.map((mistake, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-start gap-3 p-4 rounded-xl bg-destructive/5 border border-destructive/10 opacity-0 translate-y-10",
                    isInView && `reveal-up stagger-delay-${index + 1}`
                  )}
                >
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground text-sm">{mistake}</p>
                </div>
              ))}
            </div>

            <div className={cn(
              "flex flex-col justify-center opacity-0 translate-y-10",
              isInView && "reveal-up stagger-delay-6"
            )}>
              <div className="p-8 rounded-2xl gradient-card border border-border shadow-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-brand-dark" />
                  </div>
                  <h3 className="font-semibold text-lg">Abordagem Paypers</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A Paypers existe para corrigir essas falhas:
                </p>
                <div className="space-y-3">
                  {["Metodologia", "Governança", "Transparência"].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand" />
                      <span className="font-medium text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  No centro das decisões.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonMistakes;
