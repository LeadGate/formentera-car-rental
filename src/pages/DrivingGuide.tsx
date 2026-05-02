import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import DataTable from "@/components/DataTable";
import AffiliateWidget from "@/components/AffiliateWidget";
import Breadcrumbs from "@/components/Breadcrumbs";
import Section from "@/components/Section";
import ImageDivider from "@/components/ImageDivider";
import { InfoBox, WarningBox } from "@/components/InfoBox";
import CompanyCard from "@/components/CompanyCard";
import { Car } from "lucide-react";

const DrivingGuide = () => {
  const breadcrumbSchema =
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://formentera-car-rental.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Driving Tips",
        "item": "https://formentera-car-rental.com/driving-in-formentera"
      }
    ]
  };

  const articleSchema =
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Driving in Formentera: The Official 2026 Guide to Rules and Regulations",
    "description": "Driving in Formentera is straightforward for most visitors because Spain’s DGT traffic code applies, but the island adds three local rules that matter",
    "url": "https://formentera-car-rental.com/driving-in-formentera",
    "datePublished": "2026-05-02",
    "dateModified": "2026-05-02",
    "publisher": {
      "@type": "Organization",
      "name": "Formentera Car Rental",
      "url": "https://formentera-car-rental.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://formentera-car-rental.com/favicon-512x512.png"
      }
    },
    "mainEntityOfPage": "https://formentera-car-rental.com/driving-in-formentera",
    "inLanguage": "en"
  };

  return (
    <Layout>
      <SEOHead
        title="Driving in Formentera: The Official 2026 Guide to Rules... — Local Insider Guide"
        description="Driving in Formentera is straightforward for most visitors because Spain’s DGT traffic code applies, but the island adds three local rules that matter"
        canonical="https://formentera-car-rental.com/driving-in-formentera"
        jsonLd={[breadcrumbSchema, articleSchema]}
      />

      <Breadcrumbs items={[{ label: "Driving Tips" }]} />

      <HeroSection
        title="Driving in Formentera: The Official 2026 Guide to Rules..."
        subtitle={<><p className="text-white drop-shadow-md">Driving in Formentera is straightforward for most visitors because Spain’s DGT traffic code applies, but the island adds three local rules that matter immediately: the 70 km/h cap on the PM-820, the seasonal formentera.eco entry scheme, and the 2026 V-16 beacon requirement. A rental driver should also know that EU and UK photocard licences are usually accepted, while US, Canadian, and non-Latin-script licences often need an IDP or sworn Spanish translation under DGT practice.</p></>}
        image="/3.webp"
        imageAlt="Car rental in Formentera"
      />
      <AffiliateWidget />

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Speed Limits and the Island Road Network"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Formentera’s road network is compact, with the PM-820 running between La Savina port, Sant Francesc Xavier, Sant Ferran de ses Roques, Es Pujols, and the La Mola area. The core legal reference is Spain’s DGT signage system, and the practical value for drivers is simple: the island prioritises low-speed traffic, cyclists, and mopeds on narrow roads such as camí rural tracks and village streets.</p>
          <DataTable
            headers={["Road / Area", "Limit", "Practical note"]}
            rows={[
          ["PM-820", "70 km/h", "Main island spine; traffic usually makes 60–65 km/h more realistic in summer."],
          ["PMV-820-1", "50 km/h", "Used for access toward La Mola and Pilar de la Mola."],
          ["Camí rural", "Unsigned", "Drive slowly; surfaces can be narrow and uneven near Cala Saona and Es Caló de Sant Agustí."],
          ["Calle Almadrava", "30 km/h or lower by context", "Urban access in La Savina near formentera.eco cameras."],
          ["Rotonda del Hospital", "30 km/h", "Watch for permit enforcement and heavy island traffic flow."],
          ["Sant Francesc Xavier, Es Pujols, Sant Ferran de ses Roques", "30 km/h", "Urban DGT limit since 11 May 2021."],
          ["Cap de Barbaria access road", "50 km/h", "Seasonal access controls may apply in high summer."]
        ]}
          />
          <p className="text-gray-700 mb-4 leading-relaxed">The island’s calmer driving profile is one reason visitors book smaller cars such as the <strong>Fiat Panda</strong>, <strong>Fiat 500</strong>, <strong>Nissan Micra</strong>, <strong>Opel Corsa</strong>, or <strong>Dacia Sandero</strong> from operators like <strong>Motorent Pujols</strong>, <strong>Autos Ca Marí</strong>, and <strong>Rent a Car San Fernando</strong>, especially when parking near <strong>Es Pujols</strong> or <strong>Cala Saona</strong> is tight.</p>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>Parking near Ses Illetes and the beach zones</strong></p>
          <InfoBox><p>💡 <strong>Tip:</strong> If your route includes Ses Illetes, Es Caló des Mort, or Espalmador access by ferry, plan an early departure because the PM-820 and PMV-820-1 slow down quickly when day-trippers arrive at La Savina port.</p></InfoBox>
          <WarningBox><p>⚠️ <strong>Warning:</strong> Do not assume camí rural roads are “shortcut” roads; some are narrow, unmarked, and unsuitable for larger rental models such as the <strong>Renault Trafic</strong>, <strong>Nissan Primastar</strong>, <strong>Dacia Jogger</strong>, or <strong>Renault Clio Auto</strong>.</p></WarningBox>
          <p className="text-gray-700 mb-4 leading-relaxed">---</p>
      </Section>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="The 2026 V-16 Beacon Rule and Rental Car Equipment"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Spain’s warning-triangle replacement rule becomes fully mandatory on 1 January 2026 under <strong>Real Decreto 1030/2022</strong>, which requires a connected V-16 beacon linked to DGT 3.0. For a rental driver in Formentera, the practical issue is simple: the rental operator, not the tourist, should provide the compliant device in the boot or glove box, and the car should also include the required reflective vest.</p>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>Operator practice in Formentera:</strong> <strong>OK Mobility</strong>, <strong>Esformentera</strong>, <strong>Pitiusas Rent a Car</strong>, <strong>Formentera Meharis</strong>, and <strong>Rent a Car San Fernando</strong> commonly package roadside equipment differently, so the customer should verify whether the booking includes CDW, SCDW, or full coverage before accepting the keys.</p>
          <DataTable
            headers={["Item", "Legal status", "Rental note"]}
            rows={[
          ["Connected V-16 beacon", "Mandatory from 1 Jan 2026", "Must be homologated and connected to DGT 3.0."],
          ["Reflective vest", "Mandatory", "Must be accessible in the cabin, not buried in luggage."],
          ["Spare tyre or repair kit", "Required depending on vehicle spec", "Many small cars use sealant kits instead of full spares."],
          ["Licence and ID/passport", "Mandatory to carry", "Rental desk may also request a credit card preauthorisation."]
        ]}
          />
          <p className="text-gray-700 mb-4 leading-relaxed">The connected beacon rule matters even more for island drivers because breakdown assistance on roads toward <strong>Cap de Barbaria</strong>, <strong>La Mola</strong>, or <strong>Migjorn</strong> can take longer than in a mainland city. For that reason, some operators market zero excess add-ons or super CDW products to reduce the cost of damage claims.</p>
          <InfoBox><p>💡 <strong>Tip:</strong> When comparing insurance, ask for the exact excess/deductible in euros and the franquicia amount on the contract, because “full coverage” may still exclude tyres, glass, underbody damage, or a lost key.</p></InfoBox>
          <WarningBox><p>⚠️ <strong>Warning:</strong> A low-price booking can still leave a large preauthorisation hold on your card, especially with options like zero excess or super CDW; always check the deposit amount before signing.</p></WarningBox>
          <p className="text-gray-700 mb-4 leading-relaxed"><a href="/la-savina-port-pickup-guide" className="text-primary underline hover:text-accent">Formentera ferry and car pickup logistics</a></p>
          <p className="text-gray-700 mb-4 leading-relaxed">---</p>
      </Section>

      <ImageDivider src="/2.webp" alt="Formentera car rental" />

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Alcohol, Drugs, and Criminal Penalties"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Spain applies strict drink-driving and drug-driving thresholds in Formentera, and the Guardia Civil regularly checks vehicles near Es Pujols, La Savina port, and the routes returning from Migjorn at night. The administrative limit is 0.25 mg/L in breath, while new drivers and professionals face 0.15 mg/L; the criminal threshold is 0.60 mg/L under <strong>Article 379.2 Código Penal Español</strong>.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">For visitors, the relevant point is not theoretical: a standard rental car from <strong>Citcitroën e-Mehari</strong>-style beach use to <strong>Jeep Wrangler Unlimited</strong>-style tour bookings can be immobilised if the driver fails a test, and the consequences can include fines, licence suspension, and police action. The local police and national authorities operate under DGT rules, and the island also follows broader Spanish traffic enforcement standards published in the <strong>BOIB</strong> and linked to the <strong>Govern de les Illes Balears</strong> framework.</p>
      </Section>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Child Seats and Family Rentals"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Formentera’s child-seat rule is direct: any child under 135 cm must use an approved restraint system. The common rental response is an i-Size seat or booster supplied by the operator, often for €5–€10 per day, with availability varying by vehicle class and season.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">Families often choose practical models such as the <strong>Dacia Lodgy</strong>, <strong>Dacia Jogger</strong>, <strong>Renault Trafic</strong>, or <strong>Nissan Primastar</strong> when travelling with children, luggage, and beach equipment to <strong>Es Caló de Sant Agustí</strong>, <strong>Cala en Baster</strong>, or <strong>Ses Salines Natural Park</strong>. Larger vehicles generally make it easier to fit a rear-facing seat, stroller, and cooler bag without reducing visibility.</p>
          <InfoBox><p>💡 <strong>Tip:</strong> Ask the rental desk to install the child seat before you leave La Savina port, because swapping seats later in Sant Francesc Xavier or Es Pujols wastes time and can expose the family to a €200 fine if the child is not restrained correctly.</p></InfoBox>
          <WarningBox><p>⚠️ <strong>Warning:</strong> An i-Size label is helpful but not enough on its own; the seat must fit the child’s height, the vehicle’s anchor points, and the operator’s rental terms.</p></WarningBox>
      </Section>

      <ImageDivider src="/3.webp" alt="Formentera car rental" />

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Driving Licence Requirements by Country"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Your driving eligibility in Formentera depends on the licence issuer and script. EU and UK photocard licences are usually accepted, but many rental desks still request an IDP for non-EU visitors, especially for <strong>Nissan Juke</strong>, <strong>Hyundai Kona</strong>, <strong>Peugeot 3008</strong>, or <strong>BMW i3</strong> bookings where the contract is more formal and the deposit is higher.</p>
          <CompanyCard><p><strong>EU and UK:</strong> A valid photocard licence is generally sufficient in Spain, and the UK post-Brexit recognition framework has been in place since 1 May 2022.</p></CompanyCard>
          <CompanyCard><p><strong>US, Canada, Australia, and New Zealand:</strong> An IDP or official Spanish translation is commonly required by rental operators, and AAA-style IDP services typically cost about $20.</p></CompanyCard>
          <CompanyCard><p><strong>Non-Latin-script licences:</strong> A sworn translation (“traducción jurada”) or IDP is the safest option because the DGT and rental desks may reject documents they cannot read clearly.</p></CompanyCard>
          <p className="text-gray-700 mb-4 leading-relaxed">Source references are typically the DGT permit list and the rental operator’s own policy, so a driver should check the exact contract wording before departure.</p>
      </Section>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Police Checkpoints, Permits, and Camera Enforcement"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Formentera uses two main enforcement systems: formentera.eco cameras for vehicle entry and Guardia Civil checkpoints for traffic offences. The permit cameras are commonly placed at the rotonda del Hospital and calle Almadrava in La Savina, while police checkpoints are often found near Es Pujols and the road corridors returning toward La Savina port.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">The island’s permit environment also matters for electric-car users, because charging stops are limited and planning is required. Drivers of a <strong>Renault Zoe</strong>, <strong>BMW i3</strong>, <strong>Citroën e-Mehari</strong>, or <strong>Hyundai Kona</strong> should confirm the nearest charger with <strong>Endesa</strong>, <strong>Wenea</strong>, or <strong>Iberdrola</strong>, especially if the itinerary includes <strong>Sant Francesc 3 cluster</strong>, <strong>Es Pujols</strong>, <strong>Sant Ferran</strong>, <strong>Migjorn</strong>, or <strong>La Mola</strong>.</p>
          <DataTable
            headers={["Charging area", "Network examples", "Practical note"]}
            rows={[
          ["La Savina port", "Endesa, Wenea", "Best first stop after ferry arrival."],
          ["Sant Francesc 3 cluster", "Endesa, Iberdrola", "Useful central backup for island errands."],
          ["Es Pujols", "Wenea", "Convenient for beach-day parking and dining."],
          ["Sant Ferran", "Endesa", "Good for cross-island top-ups."],
          ["Migjorn", "Iberdrola", "Helpful for southern stays and villa rentals."],
          ["La Mola", "Endesa", "Limited options; plan before sunset."]
        ]}
          />
          <p className="text-gray-700 mb-4 leading-relaxed">Ferries from mainland Spain and nearby islands also shape rental demand, with <strong>Baleària</strong>, <strong>Trasmapi</strong>, <strong>Aquabus</strong>, and <strong>Formentera Lines</strong> driving the arrival waves into La Savina port, while the <strong>Cap de Barbaria (electric ferry)</strong> can matter for schedule comparisons.</p>
          <InfoBox><p>💡 <strong>Tip:</strong> If you want the lowest-stress pickup, choose the ferry arrival that matches your rental desk slot, then inspect the car for scratches, fuel level, and any existing excess/deductible before driving to Sant Francesc Xavier.</p></InfoBox>
          <WarningBox><p>⚠️ <strong>Warning:</strong> ANPR cameras for formentera.eco are not speed cameras, but they still record plate details; if your entry permit is missing or incorrect, the issue can turn into an administrative fine through the Consell Insular de Formentera.</p></WarningBox>
      </Section>

      <ImageDivider src="/4.webp" alt="Formentera car rental" />

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Rental Operators and Car Types Commonly Seen in Formentera"
      >
          <CompanyCard><p><strong>ProAuto Rent a Car:</strong> Often associated with compact island cars and short-term touring bookings, including the <strong>Fiat Panda</strong>, <strong>Fiat 500</strong>, and <strong>Opel Corsa</strong>, with pickup often arranged near La Savina port or central island hotels.</p></CompanyCard>
          <CompanyCard><p><strong>Formotor:</strong> A local-style operator name frequently associated with flexible island pickup and vehicles such as the <strong>Nissan Micra</strong>, <strong>Renault Clio Auto</strong>, and <strong>Dacia Sandero</strong>, which suit narrow streets in Sant Francesc Xavier and Es Pujols.</p></CompanyCard>
          <CompanyCard><p><strong>Motorent Pujols:</strong> Commonly linked to the Es Pujols area and practical rentals like the <strong>Hyundai Kona</strong>, <strong>Peugeot 3008</strong>, and <strong>Nissan Juke</strong>, especially for families or travellers carrying beach equipment.</p></CompanyCard>
          <CompanyCard><p><strong>La Savina Rent a Car:</strong> A port-focused operator with high turnover at ferry times, often offering <strong>Fiat 500</strong>, <strong>Fiat Panda</strong>, <strong>Renault Zoe</strong>, and <strong>BMW i3</strong> units for short island stays and charging-conscious visitors.</p></CompanyCard>
          <CompanyCard><p><strong>Autos Formentera:</strong> Frequently chosen by travellers wanting straightforward island coverage, with models such as <strong>Dacia Sandero</strong>, <strong>Dacia Lodgy</strong>, <strong>Dacia Jogger</strong>, and <strong>Renault Trafic</strong> for groups and luggage-heavy trips.</p></CompanyCard>
          <CompanyCard><p><strong>OK Mobility:</strong> A larger-scale brand often used for structured bookings and contract-heavy rentals, including compact hatchbacks and small SUVs such as the <strong>Opel Corsa</strong>, <strong>Nissan Juke</strong>, and <strong>Hyundai Kona</strong>.</p></CompanyCard>
          <CompanyCard><p><strong>Esformentera:</strong> Commonly discussed in local rental searches, with beach-friendly options like the <strong>Citroën e-Mehari</strong> and other open-air or compact vehicles for summer use around Cala Saona and Migjorn.</p></CompanyCard>
          <CompanyCard><p><strong>Autos Ca Marí:</strong> A local operator style associated with practical island delivery, including the <strong>Fiat 500</strong>, <strong>Dacia Sandero</strong>, and <strong>Renault Clio Auto</strong>, often suitable for urban driving in Sant Ferran de ses Roques.</p></CompanyCard>
          <CompanyCard><p><strong>Pitiusas Rent a Car:</strong> Typically linked to short-stay tourist traffic and vehicle rotation from the port, with models such as the <strong>Peugeot 3008</strong>, <strong>BMW i3</strong>, and <strong>Renault Zoe</strong> being useful for mixed urban and beach use.</p></CompanyCard>
          <CompanyCard><p><strong>Formentera Meharis:</strong> A niche island name frequently associated with the <strong>Citroën e-Mehari</strong>, plus seasonal small-car and open-top style driving around Cap de Barbaria, La Mola, and the southern beaches.</p></CompanyCard>
          <CompanyCard><p><strong>Rent a Car San Fernando:</strong> A practical choice for drivers based near Sant Ferran de ses Roques, with family and utility models such as the <strong>Dacia Lodgy</strong>, <strong>Dacia Jogger</strong>, <strong>Renault Trafic</strong>, and <strong>Nissan Primastar</strong>.</p></CompanyCard>
          <InfoBox><p>💡 <strong>Tip:</strong> If your rental operator offers both standard CDW and SCDW, ask whether glass, tyres, underbody, and keys are covered, because island road debris on PM-820 and camí rural tracks can produce extra charges.</p></InfoBox>
          <WarningBox><p>⚠️ <strong>Warning:</strong> Some contracts advertise “zero excess” or “full coverage” but still exclude a franchise or franquicia for certain parts, so read the contract before accepting the preauthorisation.</p></WarningBox>
      </Section>

      <div className="flex justify-center py-16 mt-8">
        <a href="#compare-cars" className="cta-button">Compare Car Rental Deals</a>
      </div>
    </Layout>
  );
};

export default DrivingGuide;
