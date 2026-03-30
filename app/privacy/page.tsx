import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden bg-secondary">
        <div className="relative z-50"><Header variant="transparent" /></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-16 md:py-20">
          <div className="max-w-[650px]">
            <h1 className="text-white text-[36px] md:text-[52px] font-semibold leading-[1.1] tracking-tight">
              Política de <span className="text-primary">Privacidade</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="py-24 bg-subtle-grid">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <p className="text-[14px] text-muted-foreground/60">Última atualização: 23 de março de 2026</p>

            <div>
              <h2 className="text-[20px] font-semibold text-secondary mb-4">1. Introdução</h2>
              <p className="text-[16px] leading-[1.8]">
                A Paypers está comprometida com a proteção da privacidade e dos dados pessoais de seus usuários, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018). Esta Política descreve como coletamos, utilizamos, armazenamos e protegemos suas informações pessoais.
              </p>
            </div>

            <div>
              <h2 className="text-[20px] font-semibold text-secondary mb-4">2. Dados Coletados</h2>
              <p className="text-[16px] leading-[1.8]">
                Coletamos os seguintes dados pessoais quando você utiliza nosso site:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-[16px] leading-[1.8]">
                <li><strong>Dados de identificação:</strong> nome completo, e-mail, telefone e empresa;</li>
                <li><strong>Dados de comunicação:</strong> mensagens enviadas através do formulário de contato;</li>
                <li><strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas e tempo de permanência;</li>
                <li><strong>Dados de interesse:</strong> informações sobre precatórios ou operações tributárias fornecidas voluntariamente.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[20px] font-semibold text-secondary mb-4">3. Finalidade do Tratamento</h2>
              <p className="text-[16px] leading-[1.8]">
                Os dados pessoais coletados são utilizados para as seguintes finalidades:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-[16px] leading-[1.8]">
                <li>Responder solicitações e mensagens enviadas pelo formulário de contato;</li>
                <li>Fornecer orientação personalizada sobre nossos serviços;</li>
                <li>Realizar análises jurídicas e estruturação de operações;</li>
                <li>Enviar comunicações relevantes sobre nossos serviços, mediante consentimento;</li>
                <li>Melhorar a experiência de navegação e o funcionamento do site;</li>
                <li>Cumprir obrigações legais e regulatórias.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[20px] font-semibold text-secondary mb-4">4. Base Legal</h2>
              <p className="text-[16px] leading-[1.8]">
                O tratamento dos dados pessoais é realizado com base nas seguintes hipóteses legais previstas na LGPD:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-[16px] leading-[1.8]">
                <li><strong>Consentimento:</strong> quando você preenche formulários ou entra em contato conosco;</li>
                <li><strong>Execução de contrato:</strong> para viabilizar a prestação dos serviços contratados;</li>
                <li><strong>Legítimo interesse:</strong> para melhorar nossos serviços e comunicações;</li>
                <li><strong>Cumprimento de obrigação legal:</strong> quando exigido pela legislação aplicável.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[20px] font-semibold text-secondary mb-4">5. Compartilhamento de Dados</h2>
              <p className="text-[16px] leading-[1.8]">
                A Paypers não comercializa dados pessoais. Seus dados poderão ser compartilhados apenas nas seguintes situações:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-[16px] leading-[1.8]">
                <li>Com parceiros jurídicos envolvidos na estruturação de operações, mediante necessidade e sigilo;</li>
                <li>Com prestadores de serviços que auxiliam no funcionamento do site e comunicação;</li>
                <li>Por determinação legal, judicial ou de autoridade competente.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[20px] font-semibold text-secondary mb-4">6. Armazenamento e Segurança</h2>
              <p className="text-[16px] leading-[1.8]">
                Os dados pessoais são armazenados em ambiente seguro, com medidas técnicas e organizacionais adequadas para proteger contra acesso não autorizado, destruição, perda ou alteração. Os dados são retidos pelo período necessário para cumprir as finalidades descritas nesta Política ou conforme exigido pela legislação.
              </p>
            </div>

            <div>
              <h2 className="text-[20px] font-semibold text-secondary mb-4">7. Direitos do Titular</h2>
              <p className="text-[16px] leading-[1.8]">
                Em conformidade com a LGPD, você possui os seguintes direitos sobre seus dados pessoais:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-[16px] leading-[1.8]">
                <li>Confirmação da existência de tratamento;</li>
                <li>Acesso aos dados pessoais;</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
                <li>Portabilidade dos dados;</li>
                <li>Eliminação dos dados tratados com consentimento;</li>
                <li>Revogação do consentimento a qualquer momento.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[20px] font-semibold text-secondary mb-4">8. Cookies</h2>
              <p className="text-[16px] leading-[1.8]">
                Nosso site pode utilizar cookies e tecnologias semelhantes para melhorar a experiência de navegação, analisar o tráfego e personalizar conteúdo. Você pode gerenciar as preferências de cookies através das configurações do seu navegador.
              </p>
            </div>

            <div>
              <h2 className="text-[20px] font-semibold text-secondary mb-4">9. Alterações nesta Política</h2>
              <p className="text-[16px] leading-[1.8]">
                Esta Política de Privacidade pode ser atualizada periodicamente. Quaisquer alterações serão publicadas nesta página com a data de atualização revisada. Recomendamos a consulta periódica.
              </p>
            </div>

            <div>
              <h2 className="text-[20px] font-semibold text-secondary mb-4">10. Contato</h2>
              <p className="text-[16px] leading-[1.8]">
                Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de dados pessoais, entre em contato pelo WhatsApp (11) 5286-7978 ou através da nossa página de contato.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
