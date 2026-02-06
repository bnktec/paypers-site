import { Database, Scale, Shield, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Scale,
      title: "Rigor Jurídico",
      description: "Análise completa de cada crédito com validação documental e parecer técnico.",
    },
    {
      icon: Database,
      title: "Dados e Governança",
      description: "Decisões baseadas em modelos de risco e protocolos de validação.",
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Processos claros e transparentes para cada transação.",
    },
    {
      icon: TrendingUp,
      title: "Eficiência",
      description: "Estruturação profissional que maximiza resultados.",
    },
  ];

  return (
    <section id="como-funciona" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-medium text-brand mb-4 tracking-wider uppercase">
            Sobre a Paypers
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A Paypers e seu propósito
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A Paypers é uma plataforma especializada na{" "}
            <strong className="text-foreground">estruturação, análise e intermediação de operações com precatórios e RPVs</strong>,
            conectando investidores e credores com base em{" "}
            <strong className="text-foreground">governança, dados e rigor jurídico</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-secondary/50 border border-border hover:border-brand/30 hover:bg-brand-lightest/50 transition-all duration-300 hover-lift"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl gradient-card border border-border shadow-card">
            <p className="text-muted-foreground leading-relaxed text-center">
              Nosso propósito é <strong className="text-foreground">reduzir a assimetria de informação</strong> do setor
              e elevar o padrão das operações por meio de{" "}
              <strong className="text-foreground">protocolos de validação</strong>,{" "}
              <strong className="text-foreground">modelos de risco</strong> e{" "}
              <strong className="text-foreground">processos claros de decisão</strong>, garantindo que cada transação
              esteja sustentada por critérios técnicos consistentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
