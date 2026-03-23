import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos e Condições",
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden bg-secondary">
        <div className="relative z-50"><Header variant="transparent" /></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-16 md:py-20">
          <div className="max-w-[650px]">
            <h1 className="text-white text-[36px] md:text-[52px] font-semibold leading-[1.1] tracking-tight">
              Termos e Condições <span className="text-primary">de Uso</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="py-24 bg-subtle-grid">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <p className="text-[14px] text-muted-foreground/60">Última atualização: 23 de março de 2026</p>

            <div>
              <h2 className="text-[20px] font-semibold text-secondary mb-4">1. Aceitação dos Termos</h2>
              <p className="text-[16px] leading-[1.8]">
                Ao acessar e utilizar o site da Paypers (paypers.com.br), você concorda integralmente com estes Termos e Condições de Uso. Caso não concorde com qualquer disposição aqui apresentada, recomendamos que não utilize nossos serviços.
              </p>
            </div>

            <div>
              <h2 className="text-[20px] font-semibold text-secondary mb-4">2. Sobre a Paypers</h2>
              <p className="text-[16px] leading-[1.8]">
                A Paypers é uma plataforma de estruturação financeira que atua na intermediação e estruturação de operações envolvendo precatórios e passivos tributários. Nossos serviços incluem a venda de precatórios, transação tributária e acesso estruturado a operações com lastro jurídico para investidores.
              </p>
            </div>

            <div>
              <h2 className="text-[20px] font-semibold text-secondary mb-4">3. Serviços Oferecidos</h2>
              <p className="text-[16px] leading-[1.8]">
                A Paypers oferece, por meio de sua plataforma digital, os seguintes serviços:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-[16px] leading-[1.8]">
                <li>Estruturação e intermediação de operações de venda de precatórios federais, estaduais e municipais;</li>
                <li>Consultoria e estratégia em transação tributária;</li>
                <li>Acesso estruturado a operações com lastro jurídico para investidores qualificados;</li>
                <li>Análise jurídica e due diligence de créditos judiciais.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[20px] font-semibold text-secondary mb-4">4. Cadastro e Informações do Usuário</h2>
              <p className="text-[16px] leading-[1.8]">
                Ao preencher formulários em nosso site, você se compromete a fornecer informações verdadeiras, completas e atualizadas. A Paypers não se responsabiliza por informações incorretas fornecidas pelo usuário.
              </p>
            </div>

            <div>
              <h2 className="text-[20px] font-semibold text-secondary mb-4">5. Propriedade Intelectual</h2>
              <p className="text-[16px] leading-[1.8]">
                Todo o conteúdo deste site, incluindo textos, imagens, logotipos, marcas, layout e software, é de propriedade da Paypers ou de seus licenciadores e está protegido pela legislação brasileira de propriedade intelectual. É proibida a reprodução, distribuição ou modificação sem autorização prévia e por escrito.
              </p>
            </div>

            <div>
              <h2 className="text-[20px] font-semibold text-secondary mb-4">6. Limitação de Responsabilidade</h2>
              <p className="text-[16px] leading-[1.8]">
                As informações disponibilizadas neste site possuem caráter informativo e não constituem oferta, promessa ou garantia de resultados financeiros. A contratação de serviços está sujeita à análise individual e à formalização contratual específica. A Paypers não se responsabiliza por decisões tomadas exclusivamente com base nas informações do site.
              </p>
            </div>

            <div>
              <h2 className="text-[20px] font-semibold text-secondary mb-4">7. Disponibilidade do Site</h2>
              <p className="text-[16px] leading-[1.8]">
                A Paypers se esforça para manter o site disponível de forma contínua, mas não garante que o acesso será ininterrupto ou livre de erros. Poderemos suspender temporariamente o acesso para manutenção, atualização ou melhorias.
              </p>
            </div>

            <div>
              <h2 className="text-[20px] font-semibold text-secondary mb-4">8. Links para Terceiros</h2>
              <p className="text-[16px] leading-[1.8]">
                Este site pode conter links para sites de terceiros. A Paypers não se responsabiliza pelo conteúdo, políticas de privacidade ou práticas de sites externos.
              </p>
            </div>

            <div>
              <h2 className="text-[20px] font-semibold text-secondary mb-4">9. Alterações nos Termos</h2>
              <p className="text-[16px] leading-[1.8]">
                A Paypers reserva-se o direito de modificar estes Termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no site. Recomendamos a consulta periódica desta página.
              </p>
            </div>

            <div>
              <h2 className="text-[20px] font-semibold text-secondary mb-4">10. Legislação Aplicável</h2>
              <p className="text-[16px] leading-[1.8]">
                Estes Termos são regidos pela legislação da República Federativa do Brasil. Fica eleito o foro da Comarca de Brasília/DF para dirimir quaisquer controvérsias decorrentes destes Termos, com renúncia a qualquer outro, por mais privilegiado que seja.
              </p>
            </div>

            <div>
              <h2 className="text-[20px] font-semibold text-secondary mb-4">11. Contato</h2>
              <p className="text-[16px] leading-[1.8]">
                Para dúvidas ou solicitações relacionadas a estes Termos, entre em contato pelo WhatsApp (61) 99916-0682 ou através da nossa página de contato.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
