import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ExpertTeamSection from '@/components/ExpertTeamSection';
import ConsultationSection from '@/components/ConsultationSection';
import WhyUsSection from '@/components/WhyUsSection';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ExpertTeamSection />
        <ConsultationSection />
        <WhyUsSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
