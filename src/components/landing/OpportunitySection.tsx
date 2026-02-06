import { ArrowRight, Banknote, LineChart, Receipt } from "lucide-react";

const OpportunitySection = () => {
  const opportunities = [
    {
      icon: Banknote,
      title: "Venda / Comercialização",
      description: "Gerando liquidez ao credor de forma estruturada e segura.",
    },
    {
      icon: LineChart,
      title: "Aquisição como Investimento",
      description: "Com retorno potencial associado ao deságio e ao prazo de pagamento.",
    },
    {
      icon: Receipt,
      title: "Compensação",
      description: "Em cenários autorizados pela legislação, para otimização tributária ou financeira.",
    },
  ];

  return (
    <section className="py-24 bg-brand-lightest/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-medium text-brand mb-4 tracking-wider uppercase">
            Oportunidade
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Precatórios: natureza do crédito e onde está a oportunidade
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            O precatório representa um <strong className="text-foreground">crédito líquido e certo</strong> contra o poder público,
            decorrente de <strong className="text-foreground">decisão judicial definitiva</strong> (com trânsito em julgado).
            Esse ativo pode ser utilizado de três formas principais:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {opportunities.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-background border border-border hover:border-brand/30 transition-all duration-300 hover-lift"
            >
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-14 h-14 rounded-2xl bg-brand-lighter/50 flex items-center justify-center mb-6 group-hover:bg-brand-light/30 transition-colors duration-300">
                <item.icon className="w-7 h-7 text-brand-dark" />
              </div>
              <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A Paypers organiza e estrutura essas possibilidades para que façam sentido para o seu perfil —{" "}
            <strong className="text-foreground">como investidor, detentor do crédito ou ambos</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OpportunitySection;
