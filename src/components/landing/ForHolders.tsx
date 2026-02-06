import { Button } from "@/components/ui/button";
import { ArrowRight, FileSearch, Scale, Users, Wallet } from "lucide-react";

const ForHolders = () => {
  const services = [
    {
      icon: Scale,
      text: "Análise jurídica e financeira do caso",
    },
    {
      icon: FileSearch,
      text: "Organização documental e diagnóstico de riscos",
    },
    {
      icon: Wallet,
      text: "Construção de cenários (venda, compensação, carteira)",
    },
    {
      icon: Users,
      text: "Conexão com investidores compatíveis com o perfil do crédito",
    },
  ];

  return (
    <section className="py-24 gradient-dark text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="p-8 rounded-3xl bg-background/5 backdrop-blur-sm border border-primary-foreground/10">
                <h3 className="text-xl font-bold mb-6 text-primary-foreground">
                  De documento complexo a estratégia clara
                </h3>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl bg-background/5 border border-primary-foreground/5 hover:bg-background/10 transition-colors duration-300"
                    >
                      <div className="w-10 h-10 rounded-lg bg-brand-light/20 flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-5 h-5 text-brand-light" />
                      </div>
                      <p className="text-brand-lighter/90 pt-2">{service.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-block text-sm font-medium text-brand-light mb-4 tracking-wider uppercase">
                Para quem tem precatório
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
                Transforme complexidade em clareza e resultado
              </h2>
              <p className="text-lg text-brand-lighter/80 leading-relaxed mb-8">
                Se você tem um precatório e quer entender o melhor caminho,
                a Paypers atua como parceira técnica em todo o processo.
              </p>
              <p className="text-brand-lighter/60 mb-8">
                Você deixa de estar sozinho com um documento complexo e passa a ter uma
                equipe especializada ao seu lado.
              </p>

              <Button variant="secondary" size="lg" className="group">
                Quero que a Paypers avalie meu precatório
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForHolders;
