"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { Send, MessageCircle, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const mutation = useMutation({
    mutationFn: async (data: Record<string, string>) => {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Erro ao enviar mensagem");
      return res.json();
    },
    onSuccess: () => {
      setSubmitted(true);
      toast({ title: "Mensagem enviada!", description: "Nosso time entrará em contato em breve." });
    },
    onError: () => {
      toast({ title: "Erro", description: "Não foi possível enviar. Tente novamente.", variant: "destructive" });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;
    mutation.mutate(data);
  };

  if (submitted) {
    return (
      <section id="contato" className="py-24 bg-subtle-grid">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-6">
            <CheckCircle2 className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-[28px] font-semibold mb-4">Recebemos sua solicitação!</h2>
          <p className="text-muted-foreground text-[16px]">Em breve nosso time entrará em contato com orientação personalizada.</p>
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
              Envie sua mensagem ou fale diretamente pelo WhatsApp. Nosso time retornará com orientação personalizada.
            </p>
            
            <a
              href="https://wa.me/5500000000000"
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
                placeholder="Ex: Venda de Precatório"
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
              disabled={mutation.isPending}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-lg h-[56px] text-[16px]"
              data-testid="button-submit-contact"
            >
              {mutation.isPending ? "Enviando..." : (
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
