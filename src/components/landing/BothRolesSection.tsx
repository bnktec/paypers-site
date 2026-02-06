import { ArrowLeftRight, Wallet, TrendingUp } from "lucide-react";

const BothRolesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-sm font-medium text-brand mb-4 tracking-wider uppercase">
            Estratégia completa
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Uma estratégia completa: investidor e detentor de créditos
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            Na Paypers, você não precisa escolher apenas um papel. É possível investir em operações estruturadas
            e, ao mesmo tempo, submeter seus próprios créditos para análise e monetização.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex-1 max-w-xs p-8 rounded-2xl gradient-card border border-border shadow-card">
              <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Investidor</h3>
              <p className="text-muted-foreground text-sm">
                Acesse operações estruturadas com governança
              </p>
            </div>

            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-brand/10">
              <ArrowLeftRight className="w-6 h-6 text-brand" />
            </div>

            <div className="flex-1 max-w-xs p-8 rounded-2xl gradient-card border border-border shadow-card">
              <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                <Wallet className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Detentor</h3>
              <p className="text-muted-foreground text-sm">
                Monetize seus créditos com suporte técnico
              </p>
            </div>
          </div>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma abordagem integrada que combina{" "}
            <strong className="text-foreground">liquidez, retorno e eficiência</strong>,
            com suporte jurídico e governança operacional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BothRolesSection;
