import { MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CTA from './CTA';

const ExpertTeamSection = () => {
  return (
    <section className=" px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-1 items-center mb-6">
        {/* Left Title */}
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h2 className="text-4xl md:text-7xl font-semibold text-black leading-tight space-y-2">
            <span className="block">Expert</span>
            <span className="block">Team of</span>
            <span className="block">Custom</span>
            <span className="block">Brokers</span>
          </h2>
        </div>

        {/* Right Content */}
        <div className="space-y-6 text-gray-900 leading-relaxed text-justify">
          <p>
            B Doza & Company, led by Proprietor Istiaque Doza and Manager ASA
            Akrarmuddowla Khan, is more than just a team of experienced custom
            brokers; it's a symbol of dedication and expertise in customs
            brokerage. With over forty years of experience, B Doza & Company has
            become a trusted and reliable partner for clients in need of custom
            clearance services.
          </p>

          <p>
            Our team offers comprehensive customs clearance solutions that
            exceed industry standards. We specialize in efficient paperwork
            filing, cargo transportation, and timely duty payments, ensuring a
            smooth and hassle-free experience for our clients.
          </p>

          <p>
            Staying updated with the latest customs regulations and technologies
            is a priority for us. This commitment allows us to handle customs
            procedures with confidence, precision, and speed, making us a top
            choice for businesses looking for custom brokerage services.
          </p>

          <p>
            At B Doza & Company, we value your time and trust. Our team is
            focused on not just meeting your current needs but also anticipating
            future challenges. We provide personalized advice and solutions,
            tailored to the changing needs of your business.
          </p>

          <p>
            Choose B Doza & Company for unparalleled expertise, commitment, and
            a proactive approach in customs brokerage. Let us be your trusted
            partner in navigating the complexities of customs clearance.
          </p>
        </div>
      </div>
      <div className="text-center my-10">
        {' '}
        <CTA />
      </div>
    </section>
  );
};

export default ExpertTeamSection;
