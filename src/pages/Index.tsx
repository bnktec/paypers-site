import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import AboutSection from "@/components/landing/AboutSection";
import OpportunitySection from "@/components/landing/OpportunitySection";
import StrategicApplications from "@/components/landing/StrategicApplications";
import CreditTypes from "@/components/landing/CreditTypes";
import GovernanceSection from "@/components/landing/GovernanceSection";
import CommonMistakes from "@/components/landing/CommonMistakes";
import DesagioSection from "@/components/landing/DesagioSection";
import AnalysisTimeSection from "@/components/landing/AnalysisTimeSection";
import ForInvestors from "@/components/landing/ForInvestors";
import ForHolders from "@/components/landing/ForHolders";
import BothRolesSection from "@/components/landing/BothRolesSection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <OpportunitySection />
        <StrategicApplications />
        <CreditTypes />
        <GovernanceSection />
        <CommonMistakes />
        <DesagioSection />
        <AnalysisTimeSection />
        <ForInvestors />
        <ForHolders />
        <BothRolesSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
