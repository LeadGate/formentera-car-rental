import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import DataTable from "@/components/DataTable";
import AffiliateWidget from "@/components/AffiliateWidget";
import Breadcrumbs from "@/components/Breadcrumbs";
import Section from "@/components/Section";
import ImageDivider from "@/components/ImageDivider";
import { WarningBox } from "@/components/InfoBox";
import CompanyCard from "@/components/CompanyCard";
import { Car, MapPin } from "lucide-react";

const BeachGuide = () => {
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
        "name": "Beaches",
        "item": "https://formentera-car-rental.com/formentera-beaches-by-car"
      }
    ]
  };

  const articleSchema =
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Formentera Parking Guide (2026): Ses Illetes Access, Blue Zones, and Free Lots",
    "description": "Formentera parking in 2026 has three separate systems: regulated blue zones in **Es Pujols, La Savina, Sant Francesc Xavier, and Sant Ferran de ses",
    "url": "https://formentera-car-rental.com/formentera-beaches-by-car",
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
    "mainEntityOfPage": "https://formentera-car-rental.com/formentera-beaches-by-car",
    "inLanguage": "en"
  };

  return (
    <Layout>
      <SEOHead
        title="Formentera Parking Guide (2026): Ses Illetes Access,... — Local Insider Guide"
        description="Formentera parking in 2026 has three separate systems: regulated blue zones in Es Pujols, La Savina, Sant Francesc Xavier, and Sant Ferran de ses Roques,"
        canonical="https://formentera-car-rental.com/formentera-beaches-by-car/"
        jsonLd={[breadcrumbSchema, articleSchema]}
      />

      <Breadcrumbs items={[{ label: "Beaches" }]} />

      <HeroSection
        title="Formentera Parking Guide (2026): Ses Illetes Access,..."
        subtitle={<><p className="text-white drop-shadow-md">Formentera parking in 2026 has three separate systems: regulated blue zones in <strong>Es Pujols, La Savina, Sant Francesc Xavier, and Sant Ferran de ses Roques</strong>, a paid access control for <strong>Ses Illetes</strong> inside <strong>Ses Salines Natural Park</strong>, and free parking at most beaches such as <strong>Cala Saona, Migjorn, Cala en Baster, and Es Caló des Mort</strong>. The key practical rule is simple: if you are using a combustion car, plan for meters in town, controlled entry at Ses Illetes, and free dirt lots on the coast; if you are renting an EV such as a <strong>Renault Zoe, BMW i3, or Fiat 500</strong>, you may avoid both the blue-zone fee and the Ses Illetes access fee depending on the operator’s conditions.</p></>}
        image="/2.webp"
        imageAlt="Car rental in Formentera"
      />
      <AffiliateWidget />

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Blue Zone Matrix: Es Pujols, La Savina, Sant Francesc..."
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Formentera’s town centres use regulated “zona azul” parking to rotate short stays and protect local commerce, with the main tariff at <strong>€1.20 per hour</strong> and the official mobile-payment channel commonly handled through the <strong>Flowbird</strong> app. The four-town pattern is consistent, but <strong>La Savina</strong> is stricter on Sundays and public holidays than <strong>Sant Francesc Xavier</strong> and <strong>Sant Ferran de ses Roques</strong>, which are often free on those days in the current island practice.</p>
          <DataTable
            headers={["Town", "Active hours", "14:00–16:00", "Sundays / holidays", "Practical note"]}
            rows={[
          ["<strong>Es Pujols</strong>", "Mon–Sun 09:00–14:00 + 16:00–21:00", "Free", "Paid", "Seasonal high-turnover zone near hotels and restaurants"],
          ["<strong>La Savina</strong>", "Mon–Sun 09:00–14:00 + 16:00–21:00", "Free", "Paid", "Highest turnover near <strong>La Savina port</strong> and ferry arrivals"],
          ["<strong>Sant Francesc Xavier</strong>", "Mon–Sat 09:00–14:00 + 16:00–21:00", "Free", "Free", "Good for errands and lunch near the capital"],
          ["<strong>Sant Ferran de ses Roques</strong>", "Mon–Sat 09:00–14:00 + 16:00–21:00", "Free", "Free", "Useful for inland stops on the <strong>PMV-820-1</strong> corridor"]
        ]}
          />
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>Blue-zone details by operator and value:</strong></p>
          <CompanyCard><p><strong>Zona Azul concession:</strong> The commonly published tariff is <strong>€1.20 per hour</strong>, with a <strong>free 30-minute ticket</strong> available from the meter for marked high-rotation spaces. The concession materials cited by local operators indicate a <strong>72-hour maximum stay</strong>, while summer signage can be interpreted more strictly at some meters; verify the specific stall before leaving a car overnight.</p></CompanyCard>
          <CompanyCard><p><strong>Discounted parking categories:</strong> <strong>Electric vehicles</strong> such as a <strong>Renault Zoe, BMW i3, or Citroën e-Mehari</strong> may park for <strong>€0</strong>, hybrid vehicles typically receive a <strong>50% discount</strong>, reduced-mobility permit holders may park for <strong>€0</strong>, and accommodation guests may receive a <strong>25% discount</strong> with an invoice or receipt from a registered hotel, villa, or apartment.</p></CompanyCard>
          <CompanyCard><p><strong>Fine cancellation process:</strong> If a blue-zone ticket is exceeded, the standard operator practice is to cancel the notice for <strong>€3</strong> at a nearby parquímetro within <strong>60 minutes</strong> of the ticket being issued. This is a local administrative practice, not a guarantee of dismissal for every case, so the ticket reference number and timestamp matter.</p></CompanyCard>
          <WarningBox><p>💡 <strong>Tip:</strong> In <strong>Es Pujols</strong> and <strong>La Savina</strong>, parking between <strong>14:00 and 16:00</strong> is the cheapest daytime window because the blue zone is generally free for the lunch break. ⚠️ <strong>Warning:</strong> Do not assume Sunday rules are uniform across the island; <strong>La Savina</strong> can remain paid on Sundays and bank holidays, while <strong>Sant Francesc Xavier</strong> and <strong>Sant Ferran de ses Roques</strong> may be free on those days.</p></WarningBox>
          <p className="text-gray-700 mb-4 leading-relaxed">For a broader route plan that avoids meter stress, see <strong>parking strategy near Ses Illetes and the beaches</strong>.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">---</p>
      </Section>

      <Section
        icon={<MapPin className="w-6 h-6" />}
        title="Ses Illetes Beach Access Fee and Ses Salines Natural..."
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Access to <strong>Ses Illetes</strong> inside <strong>Ses Salines Natural Park</strong> is regulated to protect dunes, salt flats, and the fragile beach corridor that also affects nearby <strong>Estany Pudent</strong> and the channel toward <strong>Espalmador</strong>. The access fee is charged at the barrier, the vehicle cap is enforced by camera, and the published seasonal rules are typically confirmed in the <strong>BOIB</strong> each spring.</p>
          <DataTable
            headers={["Period", "Combustion car", "Motorbike", "Notes"]}
            rows={[
          ["10 May – 15 Jun", "€4", "€2", "Early season control window"],
          ["16 Jun – 15 Jul", "€5", "€3", "Higher summer demand"],
          ["16 Jul – 31 Aug", "€6", "€4", "Peak season tariff"],
          ["1 Sep – 15 Sep", "€5", "€3", "Late-summer reduction"],
          ["16 Sep – 15 Oct", "€4", "€2", "End-of-season control"]
        ]}
          />
          <CompanyCard><p><strong>Ses Illetes access facts:</strong> A combustion car usually pays the posted daily fee, while an electric car may enter for <strong>€0</strong> under the current park practice quoted by local operators. The access system uses ANPR-style number plate recognition at the barrier, and the operational cap is widely published as <strong>384 cars and 1,132 motorcycles</strong> at one time.</p></CompanyCard>
          <CompanyCard><p><strong>Legal and publication context:</strong> The seasonal rule set is typically aligned with <strong>Ley 7/2019</strong>, <strong>Decree 20/2015</strong>, and island-level publication through the <strong>BOIB</strong>; the concession reference commonly cited in 2025 materials is <strong>Park-Plan IBIFOR S.L.</strong>. If you are checking a live-season change, the <strong>Consell Insular de Formentera</strong> and the <strong>Govern de les Illes Balears</strong> are the public bodies to watch.</p></CompanyCard>
          <CompanyCard><p><strong>Vehicle classes at the gate:</strong> A combustion <strong>Fiat Panda</strong>, <strong>Opel Corsa</strong>, <strong>Nissan Micra</strong>, or <strong>Dacia Sandero</strong> pays the standard fee, while an EV such as a <strong>Hyundai Kona Electric</strong>, <strong>Renault Zoe</strong>, or <strong>BMW i3</strong> may be exempt depending on the published season rule. Motorbikes such as a <strong>Piaggio Typhoon 50/125</strong>, <strong>Aprilia SR Motard</strong>, <strong>Sym Symphony</strong>, <strong>Vespa LX 125</strong>, or <strong>Piaggio Beverly</strong> are charged at the motorcycle rate.</p></CompanyCard>
          <WarningBox><p>💡 <strong>Tip:</strong> If your main beach goal is <strong>Ses Illetes</strong>, ask a rental operator like <strong>Autos Ca Marí</strong>, <strong>Pitiusas Rent a Car</strong>, or <strong>Formentera Meharis</strong> whether the contracted EV exemption is written into the reservation before you confirm. ⚠️ <strong>Warning:</strong> A “full coverage” rental policy does not automatically override park-entry rules; the access fee and the parking fee are separate from <strong>CDW</strong>, <strong>SCDW</strong>, <strong>super CDW</strong>, or <strong>zero excess</strong> rental protection.</p></WarningBox>
          <p className="text-gray-700 mb-4 leading-relaxed">If you want an arrival plan from the ferry terminal, use <a href="/la-savina-port-pickup-guide/" className="text-primary underline hover:text-accent">La Savina port pickup and parking context</a> before heading to the barrier.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">---</p>
      </Section>

      <ImageDivider src="/2.webp" alt="Formentera car rental" />

      <Section
        icon={<MapPin className="w-6 h-6" />}
        title="Free Beach Parking: Cala Saona, Migjorn, Es Caló des..."
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Most of Formentera’s coast uses free, unpaved, or roadside parking rather than paid meters, which makes beach hopping efficient if you are driving a <strong>Fiat 500</strong>, <strong>Nissan Juke</strong>, <strong>Renault Clio Auto</strong>, or <strong>Dacia Jogger</strong>. The main rule is that free parking still depends on road width, season traffic, and whether the access lane is a <strong>camí rural</strong> rather than a paved street.</p>
          <CompanyCard><p><strong>Cala Saona parking:</strong> The beach has a large free dirt lot behind the dunes, and the lot commonly fills before <strong>11:00</strong> in July and August. The local approach is to arrive early, park once, and walk the final section to the cove rather than circling for a closer space.</p></CompanyCard>
          <CompanyCard><p><strong>Migjorn parking:</strong> The <strong>Platja de Migjorn</strong> coastline has multiple free lots along the southern strip, with the easiest access points usually near <strong>Es Arenals</strong> and <strong>Es Còdol Foradat</strong>. Drivers arriving from the island interior often follow the <strong>PM-820</strong> and then turn onto smaller access roads that branch toward the beach.</p></CompanyCard>
          <CompanyCard><p><strong>Es Caló des Mort parking:</strong> This cove has a small roadside parking strip rather than a formal lot, and the access turn is commonly reached from the <strong>PM-820</strong> via a short approach road near kilometre 8. The route is tighter than the town parking zones, so a compact car such as a <strong>Fiat Panda</strong> or <strong>Nissan Micra</strong> is easier to place than a larger van.</p></CompanyCard>
          <CompanyCard><p><strong>Cala en Baster parking:</strong> Free roadside parking is available near the cove entrance, and the area is typically simpler to use than the busier <strong>Es Pujols</strong> or <strong>La Savina</strong> streets. This is a practical half-day stop if you are pairing it with a later lunch in <strong>Sant Ferran de ses Roques</strong>.</p></CompanyCard>
          <CompanyCard><p><strong>Cap de Barbaria parking:</strong> The lighthouse road has seasonal vehicle control near kilometre 6.5, with access limits commonly applied from <strong>1 May to 15 October</strong> to reduce congestion. Outside that control period, parking is free, while in the regulated season the local arrangement can involve a paid or restricted approach depending on the posted gate rules.</p></CompanyCard>
          <WarningBox><p>💡 <strong>Tip:</strong> If you want the lowest-stress beach day, pair a free lot such as <strong>Cala Saona</strong> with an inland meal stop in <strong>Sant Francesc Xavier</strong> or <strong>Sant Ferran de ses Roques</strong>, then return before dusk. ⚠️ <strong>Warning:</strong> Never block a <strong>camí rural</strong> or park across a gate near <strong>Cap de Barbaria</strong> or <strong>Es Caló des Mort</strong>; local towing risk is higher than on standard blue-zone streets.</p></WarningBox>
          <p className="text-gray-700 mb-4 leading-relaxed">For more on where to leave the car near the island’s most visited beach, read <strong>Ses Illetes parking and access rules</strong>.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">---</p>
      </Section>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="What Happens If You Get a Fine?"
        alt
      >
          <WarningBox><p>Formentera uses two different enforcement systems, and the penalty depends on whether you overstay a parking meter or breach the island-access rules tied to <strong>formentera.eco</strong>. The practical distinction matters because a <strong>€3</strong> blue-zone correction is not the same as a <strong>€1,000–€10,000</strong> island circulation sanction.</p></WarningBox>
          <CompanyCard><p><strong>Blue-zone overstay fine:</strong> If you exceed your ticket time, the common local remedy is to pay <strong>€3</strong> at the nearest parquímetro within <strong>60 minutes</strong> of the notice being issued. This is a meter-based correction process associated with the blue-zone concession and is most relevant in <strong>Es Pujols</strong>, <strong>La Savina</strong>, <strong>Sant Francesc Xavier</strong>, and <strong>Sant Ferran de ses Roques</strong>.</p></CompanyCard>
          <CompanyCard><p><strong>Formentera.eco violation:</strong> If a vehicle is not authorised under the island-entry system, the sanction can be much higher, with reported fines of <strong>€1,000 to €10,000</strong> under <strong>Ley 7/2019</strong> and the enforcement framework used by the <strong>Consell Insular de Formentera</strong>. Cameras at <strong>rotonda del Hospital</strong> and <strong>calle Almadrava</strong> in <strong>La Savina</strong> identify circulating vehicles, so a rental made through a compliant operator is not a substitute for proper island registration.</p></CompanyCard>
          <CompanyCard><p><strong>Legal route for complaints:</strong> If you dispute a parking or rental-related charge, the route can involve the <strong>Direcció General de Consum</strong>, the <strong>Govern de les Illes Balears</strong>, or the <strong>Junta Arbitral de Consumo</strong>, and renters in Spain may also submit a "hoja de reclamaciones" at the local office or counter. Serious unsafe driving issues can also fall under <strong>Article 379.2 Código Penal Español</strong>, and road-rule monitoring remains part of the <strong>DGT</strong> framework.</p></CompanyCard>
          <p className="text-gray-700 mb-4 leading-relaxed">💡 <strong>Tip:</strong> Keep your rental contract, plate number, and ferry booking from <strong>Baleària, Trasmapi, Aquabus, or Formentera Lines</strong> available when you query a ticket, because the operator name and the booking timestamp are often the fastest way to verify whether a fine is legitimate. ⚠️ <strong>Warning:</strong> A vehicle can be legal for blue-zone parking and still be illegal under <strong>formentera.eco</strong> if the island-access registration was not completed correctly.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">---</p>
      </Section>

      <ImageDivider src="/3.webp" alt="Formentera car rental" />

      <Section
        icon={<MapPin className="w-6 h-6" />}
        title="Practical Day Routes and Charging Stops"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Formentera day planning works best when parking, ferries, and charging are coordinated in the same route decision, especially if you are using an EV such as a <strong>Renault Zoe, Peugeot 3008 Hybrid, Hyundai Kona, or BMW i3</strong>. The island’s charging network is concentrated around the arrival and town areas, so time-saving comes from parking once and finishing the day on foot.</p>
          <CompanyCard><p><strong>Route 1: Ses Illetes + Es Pujols lunch.</strong> Start at <strong>La Savina port</strong>, continue to <strong>Ses Illetes</strong> if your vehicle class is authorised, then return to <strong>Es Pujols</strong> for lunch and blue-zone parking between <strong>14:00 and 16:00</strong>. This route can combine a <strong>€4–€6</strong> park entry with a free parking window in town if you time it correctly.</p></CompanyCard>
          <CompanyCard><p><strong>Route 2: Migjorn + La Mola sunset.</strong> Use a free dirt lot on <strong>Migjorn</strong>, then drive to <strong>La Mola</strong> via the island interior for sunset and a short walk near the lighthouse. This route usually keeps the parking cost at <strong>€0</strong>, but fuel or charging time becomes the main variable.</p></CompanyCard>
          <CompanyCard><p><strong>Route 3: Cala Saona + Sant Francesc shopping.</strong> Park free at <strong>Cala Saona</strong>, then head to <strong>Sant Francesc Xavier</strong> for shops, coffee, or dinner. In a weekday scenario, the blue-zone cost is typically <strong>€1.20–€2.40</strong> for one to two hours, while Sundays and bank holidays can be free in the current practice.</p></CompanyCard>
          <CompanyCard><p><strong>Charging stops:</strong> Public EV charging is typically discussed in the <strong>La Savina port</strong>, <strong>Sant Francesc 3 cluster</strong>, <strong>Es Pujols</strong>, <strong>Sant Ferran</strong>, <strong>Migjorn</strong>, and <strong>La Mola</strong> areas, with network references commonly associated with <strong>Endesa, Wenea,</strong> and <strong>Iberdrola</strong>. Drivers renting an EV such as a <strong>Fiat 500e</strong>, <strong>Renault Zoe</strong>, or <strong>BMW i3</strong> should check connector type and parking time limits before plugging in.</p></CompanyCard>
          <WarningBox><p>💡 <strong>Tip:</strong> If you are using an EV, plan charging around lunch in <strong>Sant Francesc Xavier</strong> or a ferry break in <strong>La Savina port</strong>, because that is where you can pair energy top-up with the longest practical dwell time. ⚠️ <strong>Warning:</strong> Chargers can be occupied during the <strong>July–August</strong> peak, so a backup plan is essential if you arrive with under <strong>20% battery</strong> and still need to drive to <strong>La Mola</strong> or <strong>Migjorn</strong>.</p></WarningBox>
          <p className="text-gray-700 mb-4 leading-relaxed">---</p>
      </Section>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Rental Operators and Fleet Context"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Formentera’s rental market is split across local brands and island-wide operators, and the practical choice depends on the car class, insurance terms, and whether you need a scooter, compact car, or family van. Typical island fleets include <strong>ProAuto Rent a Car, Formotor, Motorent Pujols, La Savina Rent a Car, Autos Formentera, OK Mobility, Esformentera, Autos Ca Marí, Pitiusas Rent a Car, Formentera Meharis, and Rent a Car San Fernando</strong>.</p>
          <CompanyCard><p><strong>Compact cars:</strong> A <strong>Fiat Panda, Fiat 500, Nissan Micra, Opel Corsa, or Dacia Sandero</strong> is usually the cheapest category for short-town parking and narrow access roads. These models are useful for <strong>Es Caló de Sant Agustí</strong>, <strong>Cala en Baster</strong>, and the smaller tracks near <strong>Migjorn</strong>.</p></CompanyCard>
          <CompanyCard><p><strong>Electric and hybrid cars:</strong> A <strong>Renault Zoe, BMW i3, Citroën e-Mehari, Hyundai Kona, or Peugeot 3008 Hybrid</strong> can be a smart choice if you want to reduce parking fees and potentially reduce Ses Illetes entry costs. Ask the operator whether the rate includes <strong>CDW</strong>, <strong>SCDW</strong>, <strong>FDW</strong>, or <strong>full coverage</strong>, and whether the <strong>excess/deductible</strong> is set as a <strong>franquicia</strong> or a <strong>zero excess</strong> plan.</p></CompanyCard>
          <CompanyCard><p><strong>Family and group vehicles:</strong> A <strong>Dacia Lodgy, Dacia Jogger, Renault Trafic, or Nissan Primastar</strong> is better for larger groups, but these vehicles are less convenient on the tighter roads around <strong>Es Caló des Mort</strong> or <strong>Cap de Barbaria</strong>. A <strong>Jeep Wrangler</strong> or <strong>Jeep Wrangler Unlimited</strong> is useful for route confidence, although the size can make town parking slower in <strong>La Savina</strong> and <strong>Es Pujols</strong>.</p></CompanyCard>
          <CompanyCard><p><strong>Scooters:</strong> A <strong>Piaggio Typhoon 50/125, Aprilia SR Motard, Sym Symphony, Vespa LX 125, or Piaggio Beverly</strong> can simplify short hops between <strong>Sant Ferran</strong>, <strong>Sant Francesc Xavier</strong>, and <strong>Es Pujols</strong>. Scooter parking is still subject to the local space markings, and beach access lanes can be tightly monitored in summer.</p></CompanyCard>
          <WarningBox><p>💡 <strong>Tip:</strong> Ask the operator to confirm whether the reservation includes <strong>preauthorisation</strong> on the card, what the rental <strong>franquicia</strong> is, and whether the policy is <strong>SCDW</strong>, <strong>super CDW</strong>, or true <strong>zero excess</strong> before you arrive at <strong>La Savina port</strong>. ⚠️ <strong>Warning:</strong> A low advertised daily rate can hide a high <strong>excess/deductible</strong>, so compare the final deposit amount, the mileage rule, and the fuel policy before accepting the keys.</p></WarningBox>
          <p className="text-gray-700 mb-4 leading-relaxed">If you need a compact summary of island mobility rules, use <a href="/driving-in-formentera/" className="text-primary underline hover:text-accent">Formentera driving and parking essentials</a> and the local <a href="/formentera-car-rental-faq/" className="text-primary underline hover:text-accent">Formentera FAQ</a>.</p>
      </Section>

      <div className="flex justify-center py-6">
        <a href="/" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-primary-foreground font-semibold shadow-md hover:opacity-90 transition">
          Compare Car Rental Deals
        </a>
      </div>

      <div className="flex justify-center py-16 mt-8">
        <a href="#compare-cars" className="cta-button">Compare Car Rental Deals</a>
      </div>
    </Layout>
  );
};

export default BeachGuide;
