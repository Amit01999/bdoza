import React from 'react';
import CTA from './CTA';

const WhyUsSection = () => {
  return (
    <section className="py-16 px-4 md:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
          Why Us?
        </h2>

        {/* Two-Column Layout for Main Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-16">
          {/* Left Column */}
          <div className="space-y-16">
            {/* Expert Cargo */}
            <div className="text-center px-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 leading-tight">
                Expert Cargo
                <br />
                Clearance Processing
              </h3>
              <p className="text-gray-700 leading-relaxed text-justify mx-4">
                B Doza & Co. has decades of custom brokerage experience and a
                team of certified customs clearance specialists who provide
                customers with expert cargo clearance solutions.
              </p>
            </div>

            {/* Comprehensive */}
            <div className="text-center px-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 leading-tight">
                Comprehensive
                <br />
                Custom Clearance
                <br />
                Support
              </h3>
              <p className="text-gray-700 leading-relaxed text-justify mx-4">
                From free 30-minute consultations to competitively-priced custom
                clearances, customers can expect comprehensive support for their
                requirements from B Doza & Co.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-16">
            {/* Quick and Efficient */}
            <div className="text-center px-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 leading-tight">
                Quick and Efficient
                <br />
                Customs Brokerage
                <br />
                Services
              </h3>
              <p className="text-gray-700 leading-relaxed text-justify mx-4">
                Customers can enjoy fast and efficient custom clearance services
                from B Doza & Co., meeting their needs promptly.
              </p>
            </div>

            {/* Save Time */}
            <div className="text-center px-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 leading-tight">
                Save Time and Money
                <br />
                on Custom Clearance
                <br />
                Requirements
              </h3>
              <p className="text-gray-700 leading-relaxed text-justify mx-4">
                Customers can save time and money thanks to quick turnaround
                times, competitive pricing structures, and knowledgeable staff
                members at B Doza & Co.
              </p>
            </div>
          </div>
        </div>

        {/* Worry-Free Solutions - Centered */}
        <div className="mb-12 text-center max-w-lg mx-auto">
          <div className="p-6 px-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Worry-Free Solutions
            </h3>
            <p className="text-gray-700 leading-relaxed text-justify mx-4">
              Rely on the experts at B Doza & Company to deliver worry-free
              solutions with full transparency throughout the entire process so
              customers know exactly what is happening with their shipments at
              all times.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <CTA />
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
