import { Clock, Shield, TrendingUp } from "lucide-react";

const CreditTypes = () => {
  const creditTypes = [
    {
      icon: Clock,
      title: "RPVs",
      subtitle: "Requisições de Pequeno Valor",
      description:
        "Valores menores e, em muitos casos, pagamento mais rápido — adequados para estratégias de curto prazo.",
      highlight: "Curto prazo",
      color: "bg-brand-light/20 text-brand-dark",
    },
    {
      icon: Shield,
      title: "Alimentares",
      subtitle: "Salários, aposentadorias e benefícios",
      description:
        "Possuem prioridade legal, favorecendo maior previsibilidade e interesse de investidores mais conservadores.",
      highlight: "Prioridade legal",
      color: "bg-brand/20 text-brand-darker",
    },
    {
      icon: TrendingUp,
      title: "Comuns",
      subtitle: "Prazos mais longos",
      description:
        "Em geral, prazos mais longos e deságios mais expressivos, criando oportunidades de retorno ajustado ao risco.",
      highlight: "Maior retorno",
      color: "bg-brand-dark/20 text-brand-darkest",
    },
  ];

  return (
    <section id="precatorios" className="py-24 gradient-dark text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-medium text-brand-light mb-4 tracking-wider uppercase">
            Tipos de Crédito
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            RPVs, alimentares e comuns: classificação, prazo e impacto no risco
          </h2>
          <p className="text-lg text-brand-lighter/80 leading-relaxed">
            Nem todo crédito judicial é igual. Entender a classificação é determinante para estimar{" "}
            <strong className="text-primary-foreground">prazo</strong>,{" "}
            <strong className="text-primary-foreground">previsibilidade</strong> e{" "}
            <strong className="text-primary-foreground">potencial de retorno</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {creditTypes.map((type, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-background/5 backdrop-blur-sm border border-primary-foreground/10 hover:border-brand-light/30 hover:bg-background/10 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-light/20 flex items-center justify-center">
                  <type.icon className="w-6 h-6 text-brand-light" />
                </div>
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${type.color}`}>
                  {type.highlight}
                </span>
              </div>
              <h3 className="font-bold text-xl mb-1 text-primary-foreground">{type.title}</h3>
              <p className="text-sm text-brand-light mb-4">{type.subtitle}</p>
              <p className="text-brand-lighter/70 leading-relaxed text-sm">{type.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-brand-lighter/70 max-w-2xl mx-auto">
            A Paypers classifica tecnicamente cada crédito e pondera esses fatores na estruturação das operações.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CreditTypes;
