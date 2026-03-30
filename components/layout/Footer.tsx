"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* CTA FINAL */}
      <section className="py-24 bg-secondary text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <h2 className="text-[32px] md:text-[40px] font-semibold leading-[1.2] mb-4">
            Pronto para estruturar sua operação?
          </h2>
          <p className="text-white/70 text-[16px] mb-10">
            Fale agora com nosso time especializado
          </p>
          <a
            href="https://wa.me/551152867978?text=Estou%20entrando%20em%20contato%20pelo%20site%2C%20preciso%20de%20mais%20informa%C3%A7%C3%B5es."
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-cta-whatsapp"
          >
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-10 h-[56px] text-[16px] font-semibold group">
              Iniciar Conversa no WhatsApp
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative text-white py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-default-bg.png')" }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="max-w-[350px]">
              <img src="/horizontal-logo.png" alt="Paypers" className="h-8 object-contain brightness-0 invert mb-6" />
              <p className="text-white/50 text-[14px] leading-[1.6] mb-5">
                Tecnologia e estratégia para transformar ativos judiciais em oportunidades.
              </p>
              <a
                href="https://www.instagram.com/paypersoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white/60 hover:bg-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
            <div className="flex flex-wrap gap-16">
              <div>
                <h4 className="text-[14px] font-semibold mb-4 text-white/80">Soluções</h4>
                <ul className="space-y-3 text-[14px] text-white/50">
                  <li><Link href="/precatorios" className="hover:text-primary transition-colors">Venda de Precatórios</Link></li>
                  <li><Link href="/tributaria" className="hover:text-primary transition-colors">Transação Tributária</Link></li>
                  <li><Link href="/investidores" className="hover:text-primary transition-colors">Investidores</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-[14px] font-semibold mb-4 text-white/80">Empresa</h4>
                <ul className="space-y-3 text-[14px] text-white/50">
                  <li><Link href="/sobre" className="hover:text-primary transition-colors">Sobre</Link></li>
                  <li><Link href="/contato" className="hover:text-primary transition-colors">Contato</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-[14px] font-semibold mb-4 text-white/80">Legal</h4>
                <ul className="space-y-3 text-[14px] text-white/50">
                  <li><Link href="/terms" className="hover:text-primary transition-colors">Termos e Condições</Link></li>
                  <li><Link href="/privacy" className="hover:text-primary transition-colors">Política de Privacidade</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-[14px] text-white/30">
            &copy; 2026 Paypers. O seu papel tem valor.
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/551152867978?text=Estou%20entrando%20em%20contato%20pelo%20site%2C%20preciso%20de%20mais%20informa%C3%A7%C3%B5es."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        data-testid="button-whatsapp-floating"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
}
