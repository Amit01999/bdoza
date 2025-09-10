import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import services1 from '../assets/service1.jpeg';
import services2 from '../assets/sercices2.jpeg';
import CTA from './CTA';

const ServicesSection = () => {
  return (
    <section className="sm:py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-16 text-center">
          Our Services
        </h2>

        {/* Services Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Customs Consultancy 1 */}
          <div className="flex flex-col items-center">
            {/* Circle Image */}
            <div className="w-40 h-40 rounded-full overflow-hidden mb-8 border-4 border-blue-100 shadow-lg">
              <img
                src={services1}
                alt="Customs Consultancy"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm w-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Customs Consultancy
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-justify">
                  Bangladesh is quickly becoming a key player in the global
                  economy, but companies that import goods into the country find
                  it difficult to navigate customs. Especially when there are
                  many rules and regulations that you, as an importer, do not
                  always know about.
                </p>
                <p className="text-gray-700 leading-relaxed text-justify">
                  At B Doza & Company, we stand ready to consult with you and
                  help you navigate any issue you may face. With over forty-plus
                  years of experience helping companies import raw materials and
                  capital machinery through Bangladesh's ports, our team of
                  experts will help you understand the customs process and help
                  you overcome any issues you may face.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Customs Consultancy 2 */}
          <div className="flex flex-col items-center">
            {/* Circle Image */}
            <div className="w-40 h-40 rounded-full overflow-hidden mb-8 border-4 border-blue-100 shadow-lg">
              <img
                src={services2}
                alt="Customs Clearance"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm w-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Customs Consultancy
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-justify">
                  The customs clearance process at Chittagong Port in Bangladesh
                  can be difficult and time-consuming. The slightest mistake can
                  cause delays in releasing your imported raw materials and
                  capital machinery and even subject you to penalties – which
                  can impact your revenue negatively.
                </p>
                <p className="text-gray-700 leading-relaxed text-justify">
                  We here at the B Doza & Company can help you to navigate the
                  customs clearance process at Chittagong Port quickly and
                  efficiently.
                </p>
                <p className="text-gray-700 leading-relaxed text-justify">
                  We will work tirelessly to ensure that your imports are
                  cleared as quickly as possible and without you facing any
                  hassle or harassment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-20 h-1 bg-gray-300 mx-auto my-12"></div>

        {/* Contact Section */}
        <div className="text-center mb-12">
          {/* Social Links */}

          <CTA />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
