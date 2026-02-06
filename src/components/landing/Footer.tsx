import { AlertTriangle } from "lucide-react";

const Footer = () => {
  const links = [
    { label: "Início", href: "#" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Para investidores", href: "#investidores" },
    { label: "Para quem tem precatório", href: "#precatorios" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#" },
  ];

  return (
    <footer className="bg-brand-darkest text-brand-lighter/80">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo-light.png" alt="Paypers" className="h-10" />
            </div>
            <p className="text-brand-lighter/60 leading-relaxed max-w-xl">
              A Paypers é uma plataforma especializada na análise, estruturação e intermediação
              de operações com precatórios e RPVs. Atuamos com governança, rigor jurídico e
              modelos de risco consistentes, conectando investidores e detentores de créditos
              em estruturas seguras, transparentes e robustas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Links rápidos</h4>
            <nav className="grid grid-cols-2 gap-2">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-brand-lighter/60 hover:text-brand-light transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Risk Warning */}
        <div className="p-6 rounded-xl bg-brand-darker/50 border border-brand-dark/30 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-5 h-5 text-brand-light flex-shrink-0 mt-0.5" />
            <p className="text-sm text-brand-lighter/60 leading-relaxed">
              <strong className="text-brand-lighter/80">Aviso de risco:</strong> Operações com precatórios
              envolvem riscos e não há garantia de retorno ou de prazos de recebimento. Antes de tomar
              qualquer decisão, avalie cuidadosamente as informações e, se necessário, consulte assessoria
              jurídica e financeira.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-brand-dark/30">
          <p className="text-sm text-brand-lighter/40">
            © {new Date().getFullYear()} Paypers. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-brand-lighter/40 hover:text-brand-light transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-sm text-brand-lighter/40 hover:text-brand-light transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
