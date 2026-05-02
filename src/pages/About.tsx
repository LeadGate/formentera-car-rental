import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import Section from "@/components/Section";
import { Info } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <SEOHead
        title="About Formentera Car Rental | Car Rental in Formentera"
        description="Learn about Formentera Car Rental — your trusted car rental comparison service in Formentera. We help you find the best deals from local and international providers."
        canonical="https://formentera-car-rental.com/about"
        jsonLd={[{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "About Formentera Car Rental",
          "url": "https://formentera-car-rental.com/about"
        }]}
      />

      <Breadcrumbs items={[{ label: "About" }]} />

      <Section
        icon={<Info className="w-6 h-6" />}
        title="About Formentera Car Rental"
      >
        <p className="text-gray-700 mb-4 leading-relaxed">
          Formentera Car Rental is a car rental comparison service focused on Formentera. We aggregate offers from trusted local and international rental providers so you can easily compare prices, vehicle types, and rental conditions in one place.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Our goal is to save you time and money by presenting transparent, up-to-date information about car hire options in Formentera and the surrounding area.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Affiliate Disclosure</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          This website contains affiliate links. When you book a rental car through our comparison widget, we may earn a commission at no extra cost to you. This helps us maintain and improve our service. We only partner with reputable providers to ensure you get reliable deals.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Our Commitment</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          We are committed to providing accurate, helpful content about car rental in Formentera. Our guides, tips, and destination articles are created to help you plan a smooth and enjoyable trip.
        </p>
      </Section>
    </Layout>
  );
};

export default About;
