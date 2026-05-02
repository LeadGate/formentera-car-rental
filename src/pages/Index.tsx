import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import DataTable from "@/components/DataTable";
import AffiliateWidget from "@/components/AffiliateWidget";
import Section from "@/components/Section";
import ImageDivider from "@/components/ImageDivider";
import { InfoBox, WarningBox } from "@/components/InfoBox";
import CardGrid from "@/components/CardGrid";
import { Car, DollarSign, Shield, Ship } from "lucide-react";

const Index = () => {
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
      }
    ]
  };

  const websiteSchema =
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Formentera Car Rental",
    "url": "https://formentera-car-rental.com"
  };

  const organizationSchema =
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Formentera Car Rental",
    "url": "https://formentera-car-rental.com",
    "logo": "https://formentera-car-rental.com/favicon-512x512.png",
    "description": "Independent car rental comparison guide for Formentera. Compare deals from local and international providers.",
    "areaServed": {
      "@type": "Place",
      "name": "Formentera"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@formentera-car-rental.com",
      "url": "https://formentera-car-rental.com/contact"
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Formentera Car Rental — Compare Deals | Formentera Car..."
        description="Renting a car in Formentera is straightforward when you plan around La Savina port, the summer formentera.eco rules, and the island’s local fleet"
        canonical="https://formentera-car-rental.com"
        jsonLd={[breadcrumbSchema, websiteSchema, organizationSchema]}
      />

      <HeroSection
        title="Formentera Car Rental: Compare Local Prices & Book..."
        subtitle={<><p className="text-white drop-shadow-md">Renting a car in Formentera is straightforward when you plan around La Savina port, the summer formentera.eco rules, and the island’s local fleet structure. Every ferry passenger arrives at La Savina port, so the first decision is not “whether” to rent, but “which operator and which vehicle” to book.</p></>}
        image="/1.webp"
        imageAlt="Car rental in Formentera"
      />

      <AffiliateWidget id="compare" />

      <Section
        icon={<DollarSign className="w-6 h-6" />}
        title="How Much Does a Car Cost in Formentera in 2026?"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Formentera prices are seasonal, and the strongest value comes from local operators such as ProAuto Rent a Car, Formotor, Motorent Pujols, and Autos Formentera. A Fiat Panda is usually the lowest-cost car class, while electric options like the Citroën e-Mehari and Renault Zoe reduce parking and beach-access friction in Es Pujols, La Savina, and Ses Illetes.</p>
          <DataTable
            headers={["Vehicle", "Off-peak (Oct-May)", "Peak (Jul-Aug)"]}
            rows={[
          ["Fiat Panda manual", "€33-39/day", "€80-110/day"],
          ["Nissan Micra / Opel Corsa", "€43-49/day", "€95-130/day"],
          ["Hyundai Kona / Nissan Juke SUV", "€53-58/day", "€120-160/day"],
          ["Renault Clio Auto / Nissan Juke automatic", "€57-65/day", "€130-170/day"],
          ["Citroën e-Mehari (electric)", "€63-75/day", "€140-180/day"],
          ["Renault Zoe / BMW i3 (electric)", "€68-85/day", "€145-190/day"],
          ["Jeep Wrangler / Jeep Wrangler Unlimited", "€104/day", "€220-300/day"],
          ["Dacia Lodgy / Dacia Jogger 7-seater", "€70-106/day", "€170-240/day"],
          ["Renault Trafic / Nissan Primastar 9-seater", "€107-170/day", "€240-380/day"],
          ["Scooter 50cc (Piaggio Typhoon 50)", "€14.53/day", "€30-45/day"],
          ["Scooter 125cc (Vespa LX 125 / Sym Symphony / Piaggio Beverly / Aprilia SR Motard)", "€18.88-25.12/day", "€40-60/day"],
          ["Mountain bike", "€10/day", "€18-22/day"]
        ]}
          />
          <p className="text-gray-700 mb-4 leading-relaxed">Most operators require a 2-day minimum in shoulder season, and June-September availability tightens quickly for Fiat 500, Dacia Sandero, Opel Corsa, and Nissan Micra inventory. If your trip is built around beach hopping and short road distances, compare the running costs of <a href="/electric-cars-in-formentera" className="text-primary underline hover:text-accent">electric cars in Formentera</a> before choosing a petrol car.</p>
          <InfoBox><p>💡 <strong>Tip:</strong> Book the exact vehicle class, not a vague category, because local offices in La Savina port often allocate by fleet availability rather than by model promise. A reservation for “small manual car” may be fulfilled with a Fiat Panda, a Fiat 500, or a Nissan Micra depending on the day.</p></InfoBox>
      </Section>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Why Rent on Formentera Instead of Bringing an Ibiza Car"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Formentera.eco is the key 2026 rule set, and it is administered through the Consell Insular de Formentera under the island’s environmental vehicle cap. Between 1 June and 30 September, the system limits visitor access and makes Formentera-based rentals the practical option for most travellers.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">Under Ley 7/2019, the daily visitor quota is 1,732 cars and 122 motorcycles, while the island’s total authorised fleet includes 2,268 rental cars and 5,880 rental motorcycles. For rental compliance, the difference between an Ibiza car and a Formentera car is operational: the local vehicle is already in the register, while an outside vehicle needs a permit and may still be blocked at the port.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">If you bring a car from Ibiza, the usual cost structure is:</p>
          <CardGrid items={[{"icon": "", "title": "Permit request", "subtitle": "", "description": "approval is limited and not guaranteed under the quota system."}, {"icon": "", "title": "Eco-fee payment", "subtitle": "", "description": "€6/day in June and September with a €30 minimum, or €9/day in July and August with a €45 minimum."}, {"icon": "", "title": "Penalty exposure", "subtitle": "", "description": "unauthorised entry can trigger fines from €1,000 to €10,000, and many Ibiza rental contracts prohibit the crossing entirely."}]} columns={3} />
          <p className="text-gray-700 mb-4 leading-relaxed">For official dispute handling, the Direcció General de Consum and the Junta Arbitral de Consumo are the relevant consumer bodies in the Balearic Islands, while BOIB publications and DGT driving rules help define the legal framework. If you want to avoid these layers entirely, a local operator such as La Savina Rent a Car, Autos Ca Marí, or Rent a Car San Fernando is the cleaner option.</p>
          <WarningBox><p>⚠️ <strong>Warning:</strong> A rental car brought from Ibiza to Formentera may not be covered by the operator’s permission, even if the driver pays the eco-fee. Read the contract carefully for cross-island restrictions, excess/deductible clauses, and any franquicia amount before boarding the ferry.</p></WarningBox>
      </Section>

      <ImageDivider src="/2.webp" alt="Formentera car rental" />

      <Section
        icon={<Ship className="w-6 h-6" />}
        title="La Savina Port — Sole Entry Hub and Pickup Area"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Formentera has no airport, so all ferry passengers arrive at La Savina port and then disperse toward rental desks, taxi ranks, and parking areas. Baleària, Trasmapi, Aquabus, and Formentera Lines all use the port as the island’s main entry point, and some schedules also connect with the Cap de Barbaria electric ferry concept for lower-emission travel planning.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">Local rental offices are concentrated within walking distance of the terminal, including ProAuto Rent a Car, Formotor, Motorent Pujols, La Savina Rent a Car, Autos Formentera, Esformentera, Pitiusas Rent a Car, and Rent a Car San Fernando. In practice, the pickup pattern is simple: ferry arrival at La Savina port, short walk to the operator desk, ID and card preauthorisation, and vehicle handover.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">For the fastest arrival-to-drive process, use the <a href="/la-savina-port-pickup-guide" className="text-primary underline hover:text-accent">La Savina port pickup notes</a> and plan around ferry arrival times instead of expecting a hotel-style concierge desk.</p>
          <InfoBox><p>💡 <strong>Tip:</strong> On busy Saturdays, the small kiosks opposite the ferry exit can build queues longer than 60 minutes, especially when Baleària and Trasmapi arrivals overlap. If your booking is confirmed, walk directly to the named office behind the kiosks and mention your operator name, reservation number, and vehicle class.</p></InfoBox>
      </Section>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="The Electric-Vehicle Advantage on Formentera"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Electric cars can reduce both direct costs and friction at beaches, parking zones, and charging points. Formentera’s public network includes charging at La Savina port, Sant Francesc 3 cluster, Es Pujols, Sant Ferran, Migjorn, and La Mola, with operators such as Endesa, Wenea, and Iberdrola appearing in the local charging ecosystem.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">The main EV advantages are:</p>
          <CardGrid items={[{"icon": "", "title": "Ses Illetes access", "subtitle": "", "description": "combustion cars pay a daily fee of around €4 in May and up to €6/day from mid-July to late August, while EVs are exempt."}, {"icon": "", "title": "Blue-zone parking", "subtitle": "", "description": "regulated parking in Es Pujols, La Savina, Sant Francesc Xavier, and Sant Ferran can cost €1.20/hour, while EVs often park free with no time limit in the municipal rules."}, {"icon": "", "title": "Charging convenience", "subtitle": "", "description": "public charging is free at several island points, which helps lower the effective daily rental cost for a Renault Zoe, BMW i3, Citroën e-Mehari, or Hyundai Kona EV."}]} columns={3} />
          <p className="text-gray-700 mb-4 leading-relaxed">For beach-focused itineraries, electric models work especially well for Ses Illetes, Espalmador access planning, Cala Saona, Migjorn, and Cala en Baster. If you want a deeper cost comparison, see <a href="/electric-cars-in-formentera" className="text-primary underline hover:text-accent">why electric cars make sense in Formentera</a>.</p>
          <InfoBox><p>💡 <strong>Tip:</strong> An EV is the best fit when your route is La Savina port → Es Pujols → Sant Ferran → Cala Saona → back to La Savina, because the driving distance is short and the charging network is dense enough for day trips.</p></InfoBox>
      </Section>

      <ImageDivider src="/3.webp" alt="Formentera car rental" />

      <Section
        icon={<Shield className="w-6 h-6" />}
        title="What to Watch Out For: Insurance, Deposits, and Damage..."
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Most Formentera rentals are routine, but the main financial risk is not the base rate; it is the insurance wording. Standard cover often includes CDW with an excess/deductible or franquicia, while upgrades may add SCDW, super CDW, zero excess, or full coverage.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">Typical issues include:</p>
          <CardGrid items={[{"icon": "", "title": "Preauthorisation holds", "subtitle": "", "description": "many operators place a card hold before release, especially on Jeep Wrangler, Renault Trafic, Dacia Lodgy, and Citroën e-Mehari bookings."}, {"icon": "", "title": "Excluded damage", "subtitle": "", "description": "tyres, wheels, undercarriage, mirrors, keys, and glass may sit outside basic CDW unless SCDW or zero excess is purchased."}, {"icon": "", "title": "Complaint process", "subtitle": "", "description": "if the desk does not resolve the issue, ask for a \"hoja de reclamaciones\" and keep photos, timestamps, and the signed contract."}]} columns={3} />
          <p className="text-gray-700 mb-4 leading-relaxed">Under Decree 46/2009 and Ley 7/2014, Balearic businesses must maintain a consumer complaint mechanism, and the Direcció General de Consum can review disputes after return. Real-world billing conflicts are most likely when the office is busy, the car is returned after closing, or the customer accepts a contract without checking the franquicia amount.</p>
          <WarningBox><p>⚠️ <strong>Warning:</strong> Do not leave the rental desk without a signed damage sheet, fuel record, and return time stamp. A missing handover record is the easiest way for excess charges to appear after departure.</p></WarningBox>
      </Section>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="How We Compare Operators"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Our comparison focuses on local availability, contract clarity, and fleet authorisation, not just the headline price. Operators such as Autos Formentera, ProAuto Rent a Car, Formotor, Motorent Pujols, La Savina Rent a Car, Autos Ca Marí, Pitiusas Rent a Car, and Rent a Car San Fernando are checked against public and operational signals.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">We verify:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>formentera.eco fleet status and quota compliance through the Consell Insular de Formentera framework</li>
            <li>BOIB tariff notices and regulatory updates, including references connected to Decree 20/2015 and Decreto 46/2009</li>
            <li>complaint trends submitted to the Direcció General de Consum</li>
            <li>industry practice from AEVAB, BALEVAL, and FENEVAL members</li>
            <li>contract wording for CDW, SCDW, excess/deductible, franquicia, and preauthorisation terms</li>
          </ul>
          <p className="text-gray-700 mb-4 leading-relaxed">Vehicle coverage also matters, so we track whether an operator regularly offers Fiat Panda, Fiat 500, Dacia Sandero, Nissan Juke, Renault Clio Auto, Dacia Jogger, Renault Trafic, Piaggio Typhoon 50/125, Vespa LX 125, or Citroën e-Mehari units in peak periods.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">For trip planning, use the island-driving guide at <a href="/driving-in-formentera" className="text-primary underline hover:text-accent">driving in Formentera</a> to map routes that include PM-820, PMV-820-1, camí rural access roads, calle Almadrava, and the rotonda del Hospital. If your route includes Ses Salines Natural Park or Estany Pudent, plan extra time for parking and access rules.</p>
      </Section>
      <div className="flex justify-center py-16 mt-8">
        <a href="#compare-cars" className="cta-button">Compare Car Rental Deals</a>
      </div>

    </Layout>
  );
};

export default Index;
