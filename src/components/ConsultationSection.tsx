import CTA from './CTA';

const ConsultationSection = () => {
  return (
    <section className="max-sm:py-5 py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-2xl md:text-5xl font-medium text-black mb-8">
          Free 30-Minute Consultation!
        </h2>

        {/* Description */}
        <p className="text-lg text-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
          We understand that navigating customs can be a complicated process,
          which is why we offer a free 30-minute consultation service upon form
          submission. Our experienced team of custom brokers can provide you
          with advice and support during the customs clearance process, so you
          can rest assured that your goods will arrive safely and on time. Plus,
          you can enjoy competitive pricing on our custom clearance services.
        </p>

        {/* CTA and Social Links */}
        <CTA />
      </div>
    </section>
  );
};

export default ConsultationSection;
