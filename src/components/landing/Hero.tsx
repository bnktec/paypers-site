import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-brand-light/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-brand-lighter/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-lightest/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-8 animate-fade-up">
            <Shield className="w-4 h-4 text-brand" />
            <span className="text-sm text-muted-foreground">Governança e transparência em cada operação</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance animate-fade-up-delay-1">
            <span className="text-foreground">Paypers: inteligência, governança e eficiência em operações com </span>
            <span className="text-brand">precatórios</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-up-delay-2">
            A Paypers estrutura soluções completas para investidores e detentores de precatórios, unindo análise especializada, rigor jurídico e modelos de operação que ampliam segurança, liquidez e previsibilidade.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up-delay-3">
            <Button variant="hero" size="xl" className="group w-full sm:w-auto">
              Quero investir com governança
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
              Tenho um precatório e quero avaliar
            </Button>
          </div>

          {/* Supporting text */}
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto animate-fade-up-delay-4">
            Atuamos com metodologia, transparência e validação documental para transformar créditos judiciais em estratégias de investimento, liquidez ou compensação — com critérios técnicos e visão de risco.
          </p>
        </div>

      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
