"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { X, CheckCircle2 } from "lucide-react";

interface LeadModalProps {
  open: boolean;
  onClose: () => void;
  type: string;
  title: string;
}

export default function LeadModal({ open, onClose, type, title }: LeadModalProps) {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const mutation = useMutation({
    mutationFn: async (data: Record<string, string>) => {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type }),
      });
      if (!res.ok) throw new Error("Erro ao enviar");
      return res.json();
    },
    onSuccess: () => {
      setSubmitted(true);
      toast({ title: "Solicitação enviada!", description: "Um especialista entrará em contato." });
    },
    onError: () => {
      toast({ title: "Erro", description: "Tente novamente.", variant: "destructive" });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;
    mutation.mutate(data);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-[480px] p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-neutral-regular hover:text-neutral-darkest" data-testid="button-close-modal">
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-6">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-[24px] font-semibold mb-3">Recebemos!</h3>
            <p className="text-muted-foreground">Um especialista entrará em contato em breve.</p>
            <Button onClick={onClose} className="mt-8 bg-primary text-primary-foreground rounded-lg px-8 h-[48px]">
              Fechar
            </Button>
          </div>
        ) : (
          <>
            <h3 className="text-[24px] font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground text-[14px] mb-6">Preencha seus dados para receber uma proposta personalizada.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input name="name" required placeholder="Nome completo" className="h-[48px] rounded-lg" data-testid="input-lead-name" />
              </div>
              <div>
                <Input name="email" type="email" required placeholder="Seu e-mail" className="h-[48px] rounded-lg" data-testid="input-lead-email" />
              </div>
              <div>
                <Input name="phone" placeholder="Telefone (opcional)" className="h-[48px] rounded-lg" data-testid="input-lead-phone" />
              </div>
              <Button
                type="submit"
                disabled={mutation.isPending}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-lg h-[56px] text-[16px]"
                data-testid="button-submit-lead"
              >
                {mutation.isPending ? "Enviando..." : "Solicitar Proposta"}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
