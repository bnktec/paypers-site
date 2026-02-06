import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

const FAQSection = () => {
  const { ref, isInView } = useInView();
  const faqs = [
    {
      question: "Preciso ter precatório para investir com a Paypers?",
      answer:
        "Não. Você pode participar como investidor adquirindo cotas de operações estruturadas selecionadas e validadas pela equipe Paypers.",
    },
    {
      question: "Qual é o prazo médio de análise do meu precatório?",
      answer:
        "Após o envio completo da documentação pela plataforma, realizamos a análise inicial em até 3 a 5 dias úteis.",
    },
    {
      question: "A Paypers compra meu precatório diretamente?",
      answer:
        "A Paypers estrutura e intermedeia operações com investidores, indicando caminhos viáveis para venda, antecipação, compensação ou inclusão em carteira, conforme o perfil do crédito e as oportunidades de mercado.",
    },
    {
      question: "Posso ser investidor e vender meu próprio precatório ao mesmo tempo?",
      answer:
        "Sim. Muitos clientes fazem exatamente isso: investem em operações estruturadas e também avaliam e comercializam seus próprios créditos com apoio da Paypers.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-brand-lightest/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className={cn(
            "text-center mb-16 opacity-0 translate-y-10",
            isInView && "reveal-up"
          )}>
            <span className="inline-block text-sm font-medium text-brand mb-4 tracking-wider uppercase">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Perguntas frequentes</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={cn(
                  "bg-background border border-border rounded-xl px-6 data-[state=open]:shadow-card transition-shadow duration-300 opacity-0 translate-y-10",
                  isInView && `reveal-up stagger-delay-${index}`
                )}
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
