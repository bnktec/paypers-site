import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";

export default function Contato() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/contato-hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-secondary/40" />
        <div className="relative z-50"><Header variant="transparent" /></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-24 md:py-32">
          <div className="max-w-[650px]">
            <h1 className="text-white text-[36px] md:text-[52px] font-semibold leading-[1.1] tracking-tight mb-6">
              Fale com <span className="text-primary">Nosso Time</span>
            </h1>
            <p className="text-white/80 text-[16px] md:text-[18px] leading-[1.6] max-w-[500px]">
              Envie sua mensagem ou fale diretamente pelo WhatsApp. Nosso time retornará com orientação personalizada.
            </p>
          </div>
        </div>
      </section>

      <ContactForm />

      <Footer />
    </div>
  );
}
