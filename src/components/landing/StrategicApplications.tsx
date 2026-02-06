import { BarChart3, FileCheck, Wallet } from "lucide-react";

const StrategicApplications = () => {
  const applications = [
    {
      number: "01",
      icon: BarChart3,
      title: "Investir em operações estruturadas",
      description:
        "Montar posições de curto, médio ou longo prazo, com composição de risco, critérios de seleção e acompanhamento transparente.",
    },
    {
      number: "02",
      icon: FileCheck,
      title: "Avaliar possibilidade de compensação",
      description:
        "Analisar a viabilidade legal para abatimento de passivos (quando aplicável), com modelagem jurídica e verificação de aderência às regras vigentes.",
    },
    {
      number: "03",
      icon: Wallet,
      title: "Vender ou antecipar o crédito",
      description:
        "Transformar um recebimento futuro em liquidez no presente, com estruturação profissional e análise aprofundada do caso.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-medium text-brand mb-4 tracking-wider uppercase">
            Aplicações
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Aplicações estratégicas do crédito de precatório
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Com suporte técnico e jurídico da Paypers, o precatório deixa de ser apenas um direito "no papel"
            e passa a ser tratado como <strong className="text-foreground">ativo estratégico</strong>.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {applications.map((app, index) => (
            <div
              key={index}
              className="group flex flex-col md:flex-row gap-6 p-8 rounded-2xl bg-secondary/30 border border-border hover:border-brand/30 hover:bg-brand-lightest/30 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <span className="text-5xl font-bold text-brand/20 group-hover:text-brand/40 transition-colors duration-300">
                  {app.number}
                </span>
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                    <app.icon className="w-5 h-5 text-brand-dark" />
                  </div>
                  <h3 className="font-semibold text-xl">{app.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{app.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicApplications;
