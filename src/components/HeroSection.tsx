import bdozaLogo from '@/assets/bdoza-logo.webp';
import CTA from './CTA';

const HeroSection = () => {
  return (
    <section className="py-3 px-6 bg-background">
      <div className="max-w-6xl mx-auto text-center">
        {/* Hero Text */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-6xl font-normal text-black mb-8 space-y-3">
            <span className="block">Get Comprehensive</span>
            <span className="block">Custom Clearance Services</span>
            <span className="block ">with</span>
          </h1>
          {/* Large Logo */}
          <div className="my-12">
            <img
              src={bdozaLogo}
              alt="B Doza & Company"
              className="mx-auto h-32 md:h-48 w-auto"
            />
          </div>
          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-10">
            40+ Years of Excellence in Customs Clearance
          </h2>
          {/* CTA Button */}
          <CTA />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
