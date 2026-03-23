"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, MessageCircle, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: integrar com API externa
    setSending(true);
    setTimeout(() => {
      setSubmitted(true);
      setSending(false);
    }, 500);
  };

  if (submitted) {
    return (
      <section id="contato" className="py-24 bg-subtle-grid">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-6">
            <CheckCircle2 className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-[28px] font-semibold mb-4">Recebemos sua solicitacao!</h2>
          <p className="text-muted-foreground text-[16px]">Em breve nosso time entrara em contato com orientacao personalizada.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="py-24 bg-subtle-grid">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">

          <div>
            <div className="w-8 h-1 bg-primary mb-6" />
            <h2 className="text-[36px] text-secondary font-semibold leading-[1.2] tracking-tight mb-6">
              Fale com Nosso Time
            </h2>
            <p className="text-muted-foreground text-[16px] leading-[1.6] mb-10">
              Envie sua mensagem ou fale diretamente pelo WhatsApp. Nosso time retornara com orientacao personalizada.
            </p>

            <a
              href="https://wa.me/5561999160682?text=Estou%20entrando%20em%20contato%20pelo%20site%2C%20preciso%20de%20mais%20informa%C3%A7%C3%B5es."
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-whatsapp-contact"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white font-semibold rounded-lg px-8 h-[56px] hover:bg-[#20BD5A] transition-colors text-[15px]"
            >
              <MessageCircle className="w-5 h-5" />
              Conversar no WhatsApp
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[14px] font-medium mb-1.5 block" htmlFor="name">Nome Completo *</label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Seu nome"
                  className="h-[48px] rounded-lg border-neutral-light"
                  data-testid="input-name"
                />
              </div>
              <div>
                <label className="text-[14px] font-medium mb-1.5 block" htmlFor="email">E-mail *</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="seu@email.com"
                  className="h-[48px] rounded-lg border-neutral-light"
                  data-testid="input-email"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[14px] font-medium mb-1.5 block" htmlFor="phone">Telefone</label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="(00) 00000-0000"
                  className="h-[48px] rounded-lg border-neutral-light"
                  data-testid="input-phone"
                />
              </div>
              <div>
                <label className="text-[14px] font-medium mb-1.5 block" htmlFor="company">Empresa (opcional)</label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Sua empresa"
                  className="h-[48px] rounded-lg border-neutral-light"
                  data-testid="input-company"
                />
              </div>
            </div>
            <div>
              <label className="text-[14px] font-medium mb-1.5 block" htmlFor="subject">Assunto *</label>
              <Input
                id="subject"
                name="subject"
                required
                placeholder="Ex: Venda de Precatorio"
                className="h-[48px] rounded-lg border-neutral-light"
                data-testid="input-subject"
              />
            </div>
            <div>
              <label className="text-[14px] font-medium mb-1.5 block" htmlFor="message">Mensagem *</label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Descreva sua necessidade..."
                rows={5}
                className="rounded-lg border-neutral-light resize-none"
                data-testid="input-message"
              />
            </div>
            <Button
              type="submit"
              disabled={sending}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-lg h-[56px] text-[16px]"
              data-testid="button-submit-contact"
            >
              {sending ? "Enviando..." : (
                <>
                  Enviar Mensagem <Send className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
