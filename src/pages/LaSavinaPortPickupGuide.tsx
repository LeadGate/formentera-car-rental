import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import AffiliateWidget from "@/components/AffiliateWidget";
import Breadcrumbs from "@/components/Breadcrumbs";
import Section from "@/components/Section";
import ImageDivider from "@/components/ImageDivider";
import { InfoBox, WarningBox } from "@/components/InfoBox";
import CompanyCard from "@/components/CompanyCard";
import { Car, Shield } from "lucide-react";

const LaSavinaPortPickupGuide = () => {
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
        "name": "La Savina Port Pickup Guide",
        "item": "https://formentera-car-rental.com/la-savina-port-pickup-guide"
      }
    ]
  };

  const articleSchema =
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "La Savina Port Car Rental: The Ultimate Pickup Guide for Formentera",
    "description": "Formentera has no airport, so every La Savina port car rental starts at the ferry terminal in La Savina, beside the PM-820 access road and the rotonda del",
    "url": "https://formentera-car-rental.com/la-savina-port-pickup-guide",
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
    "mainEntityOfPage": "https://formentera-car-rental.com/la-savina-port-pickup-guide",
    "inLanguage": "en"
  };

  return (
    <Layout>
      <SEOHead
        title="La Savina Port Car Rental: The Ultimate Pickup Guide for... — Local Insider Guide"
        description="Formentera has no airport, so every La Savina port car rental starts at the ferry terminal in La Savina, beside the PM-820 access road and the rotonda del"
        canonical="https://formentera-car-rental.com/la-savina-port-pickup-guide/"
        jsonLd={[breadcrumbSchema, articleSchema]}
      />

      <Breadcrumbs items={[{ label: "La Savina Port Pickup Guide" }]} />

      <HeroSection
        title="La Savina Port Car Rental: The Ultimate Pickup Guide for..."
        subtitle={<><p className="text-white drop-shadow-md">Formentera has no airport, so every La Savina port car rental starts at the ferry terminal in La Savina, beside the PM-820 access road and the rotonda del Hospital approach. An Ibiza Airport (IBZ) transfer usually means an 8 km taxi or L10 bus ride to Ibiza port, then a 30–45 minute crossing with Baleària, Trasmapi, Aquabus, or Formentera Lines to La Savina port.</p></>}
        image="/4.webp"
        imageAlt="Car rental in Formentera"
      />
      <AffiliateWidget />

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Where the rental offices are at La Savina port"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">The La Savina port pickup zone is compact, but the exact office matters because some operators use a port kiosk while others use a larger office a few minutes away on foot. In practice, the shortest queues are often at standalone offices rather than the small ferry-side desk, especially when the ferry from Ibiza arrives with a full load of passengers.</p>
          <CompanyCard><p><strong>Formotor:</strong> Formotor operates multiple La Savina offices, including Vapor Manolito local 6, Carrer de s'Almadrava 11/13, and Venda des Brolls 2, plus a fifth office in Es Caló de Sant Agustí on PM-820 km 11.50.</p></CompanyCard>
          <CompanyCard><p><strong>La Savina Rent a Car:</strong> La Savina Rent a Car lists S1 Oficina Central, S2 Puerto, and S3 Oficina in the La Savina area, with additional desks in Es Pujols for guests staying near the resorts.</p></CompanyCard>
          <CompanyCard><p><strong>ProAuto Rent a Car:</strong> ProAuto Rent a Car has a port-facing presence in La Savina, and the operator also serves Es Pujols and several island hotels, which can reduce transfer friction for arriving ferry passengers.</p></CompanyCard>
          <CompanyCard><p><strong>Autos Formentera:</strong> Autos Formentera keeps a front-line office at the port, which usually means a shorter walk than a shuttle-based pickup and a faster start for drivers heading to Sant Francesc Xavier or Es Pujols.</p></CompanyCard>
          <CompanyCard><p><strong>Motorent Pujols:</strong> Motorent Pujols maintains offices in La Savina and Es Pujols, which is useful if your lodging is near the Estany Pudent area or the southbound route toward Migjorn.</p></CompanyCard>
          <CompanyCard><p><strong>OK Mobility:</strong> OK Mobility operates year-round in La Savina port, and the chain is a practical backup for late arrivals because winter opening patterns are often more limited among smaller local operators.</p></CompanyCard>
          <CompanyCard><p><strong>Esformentera:</strong> Esformentera is one of the clearer off-season options, with year-round coverage that can matter for November-to-April trips when island inventory is thinner.</p></CompanyCard>
          <CompanyCard><p><strong>Autos Ca Marí:</strong> Autos Ca Marí is another locally verified year-round operator, and its availability can be useful for travellers heading onward to Cala Saona, Cap de Barbaria, or La Mola.</p></CompanyCard>
          <CompanyCard><p><strong>Formentera Meharis:</strong> Formentera Meharis serves the island with compact vehicles that suit narrow camí rural access roads and short scenic transfers from La Savina to Pilar de la Mola.</p></CompanyCard>
          <InfoBox><p>💡 <strong>Tip:</strong> If your ferry docks at La Savina port during July or August, walk to the operator’s main office first and only use the kiosk if the reservation email specifically says the handover is there; this can cut the wait from 60–90 minutes to roughly 15–30 minutes.</p></InfoBox>
      </Section>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="What the pickup queue is really like"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Queue length at La Savina port is mostly a function of arrival time, ferry load, and operator layout. On a Tuesday morning in May, a prebooked Fiat Panda or Nissan Micra can often be collected in about 15 minutes, while a Saturday midday arrival in August can push the wait to 60–90 minutes at the busiest kiosks.</p>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>Direct operational point:</strong> A company desk at La Savina port is usually faster than a crowded ferry-exit counter, and a reservation with a named operator such as Formotor, ProAuto Rent a Car, or Autos Formentera reduces confusion at the handover stage.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">The practical rule is simple: reserve online, identify the exact office, and follow the operator’s pickup instructions rather than joining the first visible queue. This is especially important if your return timing is linked to ferry departure control, because passengers are often asked to arrive at the port about one hour before sailing in high season.</p>
          <p className="text-gray-700 mb-4 leading-relaxed"><a href="/la-savina-port-pickup-guide/" className="text-primary underline hover:text-accent">La Savina port pickup details</a> can help if you want a shorter on-foot transfer from the ferry exit.</p>
      </Section>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Off-season operations from late October to Easter"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Formentera’s rental market changes materially outside peak season, and some companies close entirely from late October until Easter (“Setmana Santa”). That pattern matters because a closed office means no immediate counter support for a preauthorisation issue, a CDW claim, or a post-return cleaning dispute.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">Verified year-round operators commonly include OK Mobility, Esformentera, Autos Ca Marí, Motorent Pujols, Formotor, and Formentera Meharis.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">Smaller family-run fleets may suspend operations, and a traveller who arrives in January should assume limited staffing until confirmed otherwise by email. If you need a winter backup, a chain operator can be safer than an office that only opens for Easter-to-October demand.</p>
          <WarningBox><p>⚠️ <strong>Warning:</strong> A closed winter office can make a later complaint harder to file, so keep every contract page, fuel receipt, and photo set until the card preauthorisation is released and the final invoice is settled.</p></WarningBox>
      </Section>

      <ImageDivider src="/3.webp" alt="Formentera car rental" />

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Documents needed at the counter"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">To rent a car in La Savina port, the lead driver should arrive with a valid licence, identity document, and payment card in the same name as the booking. Spanish DGT guidance also matters for non-Latin licences, and that can change whether an IDP is required.</p>
          <CompanyCard><p><strong>Driver’s licence:</strong> An EU or UK photocard licence is usually sufficient, while drivers from the USA, Canada, or Australia may need an International Driving Permit or a Spanish translation depending on the operator’s policy.</p></CompanyCard>
          <CompanyCard><p><strong>Passport or national ID:</strong> The operator will normally request an ID document to match the booking and contract details.</p></CompanyCard>
          <CompanyCard><p><strong>Credit card for deposit:</strong> A credit card in the lead driver’s name is commonly required for the security deposit, with typical excess/deductible amounts around €600 + VAT for an economy car and €1,500+ for premium models or convertibles.</p></CompanyCard>
          <CompanyCard><p><strong>Booking voucher:</strong> A printed or digital confirmation speeds up the desk handover and helps the staff reconcile your reservation with the rental agreement.</p></CompanyCard>
          <CompanyCard><p><strong>Child-seat proof if relevant:</strong> A minor’s birth certificate is not usually mandatory, but it can help staff select the correct child seat size faster when the booking includes a child restraint.</p></CompanyCard>
          <p className="text-gray-700 mb-4 leading-relaxed"><a href="/formentera-car-rental-faq/" className="text-primary underline hover:text-accent">Formentera rental questions and documents</a> covers common licence and deposit scenarios in more detail.</p>
      </Section>

      <Section
        icon={<Shield className="w-6 h-6" />}
        title="Insurance, deposits, and what the contract should say"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Most La Savina rentals start with a standard CDW policy that includes an excess/franquicia, and the desk may offer SCDW, super CDW, FDW, zero excess, or full coverage as an upgrade. The difference matters because the card preauthorisation can be much higher on basic coverage than on a zero-excess contract.</p>
          <InfoBox><p>A typical island contract may show a €600–€1,500 excess/deductible on an economy car, while a premium model such as a Peugeot 3008, Dacia Jogger, Jeep Wrangler, Jeep Wrangler Unlimited, or Renault Trafic may require a larger guarantee. Operators sometimes quote “full coverage” but still exclude tyres, underbody, glass, lost keys, or wrong-fuel incidents unless the policy wording says otherwise.</p></InfoBox>
          <p className="text-gray-700 mb-4 leading-relaxed">A traveler's safest approach is to read the CDW and SCDW clauses line by line, confirm whether the policy is true zero excess, and ask whether the preauthorisation releases automatically after return. If the contract is unclear, request a written explanation before signing, and if the operator refuses to correct the paperwork, the road to a “hoja de reclamaciones” is usually the formal complaint route.</p>
          <InfoBox><p>💡 <strong>Tip:</strong> Ask the desk staff to show the exact insurance line on the rental agreement, because “full coverage” can still leave a franquicia or deductible unless the contract explicitly says zero excess.</p></InfoBox>
      </Section>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Three common pickup disputes and how to avoid them"
        alt
      >
          <h3 className="text-xl font-bold mt-6 mb-3">Card not accepted at pickup</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">A card issue usually means the operator needs a credit card for preauthorisation and will not accept a debit card, or the lead driver’s name does not match the cardholder name. This is common on higher-value rentals such as a Renault Clio Auto, Hyundai Kona, Nissan Juke, or BMW i3.</p>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>How to avoid it:</strong> Confirm the payment policy before arrival and carry the exact card type the operator requests, because a last-minute counter dispute can delay pickup by 30–60 minutes. If the rental is handled by a chain such as OK Mobility, the policy may be stricter than at some smaller local desks.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Damage found after return</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">A scratch dispute usually happens when a customer did not document pre-existing damage before leaving the port. A rental with a small scratch on a Fiat Panda or Citroën e-Mehari can be photographed and noted at handover, but a missing record makes later disputes harder to win.</p>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>How to avoid it:</strong> Take 25–30 photos, record a 360° walk-around video, and ask the staff to mark every visible defect before you drive away. Under Spanish consumer practice, keeping dated photos and the signed contract is the strongest evidence if the matter later moves to the Direcció General de Consum or the Junta Arbitral de Consumo.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Cleaning fee or sand charge</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">A cleaning fee often appears after beach use, especially if the car returns with sand from Ses Illetes, Es Caló des Mort, Cala Saona, Cala en Baster, or Migjorn. A charge of €30–€50 is common for obvious interior sand, pet hair, or mud.</p>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>How to avoid it:</strong> Brush out the mats before returning the car, avoid leaving wet towels inside, and never sign a blank slip that allows an open-ended charge. A quick rinse at a station near the PM-820 can prevent a fee that is far more expensive than a few minutes of cleaning.</p>
          <WarningBox><p>⚠️ <strong>Warning:</strong> If the operator adds a disputed fee, do not leave the counter without a copy of the contract, the final invoice, and a written explanation, because those documents are critical if you later file a complaint under Ley 7/2019 or through consumer authorities in the Balearic Islands.</p></WarningBox>
      </Section>

      <ImageDivider src="/4.webp" alt="Formentera car rental" />

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Returning the car and refuelling before the ferry"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Formentera has two principal fuel stations, and the fuel-plan matters more than many first-time visitors expect. REPSOL on Ctra. La Savina–El Pilar km 4.6 is usually the easier stop for drivers heading back from central or southern routes, while CEPSA on PM-820 km 1.2 is closer to the port.</p>
          <CompanyCard><p><strong>REPSOL:</strong> The station at Ctra. La Savina–El Pilar km 4.6 is generally used for larger refuelling stops before a return drive from the west or south of the island.</p></CompanyCard>
          <CompanyCard><p><strong>CEPSA:</strong> The PM-820 km 1.2 station is closer to La Savina port and is often more convenient for last-minute top-ups before ferry check-in.</p></CompanyCard>
          <p className="text-gray-700 mb-4 leading-relaxed">A full-to-full policy is the safest option, because returning a car at 7/8 tank or lower can trigger a refuelling service charge of €30–€80 in addition to the fuel you still owe. Fuel queues are common on Sunday afternoons in August, so a 4:00 PM refuel target is often safer than a late dash before sailing.</p>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>Parking near Ses Illetes</strong> is useful if your last beach stop is close to the natural park entrance.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">*As of 15 February 2026, average island fuel prices were Gasolina 95 at €1.604/L and Diésel at €1.577/L.*</p>
      </Section>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Electric cars, scooters, and island charging points"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Electric and low-emission options are increasingly practical on Formentera, especially for short trips between La Savina, Es Pujols, Sant Ferran de ses Roques, and Sant Francesc Xavier. Common EV models on the island include Renault Zoe, BMW i3, and Citroën e-Mehari, while scooter fleets may include Piaggio Typhoon 50/125, Aprilia SR Motard, Sym Symphony, Vespa LX 125, and Piaggio Beverly.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">Charging is most useful when your itinerary includes repeated port-to-village trips rather than one long all-day circuit. Public and semi-public charging references often mention La Savina port, the Sant Francesc 3 cluster, Es Pujols, Sant Ferran, Migjorn, and La Mola, with network names such as Endesa, Wenea, and Iberdrola appearing in current guidance.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">For a quiet, efficient short-hop route, a Renault Zoe or BMW i3 can work well if you return to a charger before the battery gets too low. For rougher camí rural stretches, some travellers prefer a compact petrol model such as a Dacia Sandero or Nissan Micra instead.</p>
          <p className="text-gray-700 mb-4 leading-relaxed"><a href="/electric-cars-in-formentera/" className="text-primary underline hover:text-accent">Electric car charging in Formentera</a> explains where to top up before driving inland or south.</p>
      </Section>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Ferries, island access, and booking timing"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">The La Savina pickup flow is tied directly to ferry choice, because Baleària, Trasmapi, Aquabus, and Formentera Lines arrive on schedules that can create very different counter rushes. A midday ferry in high season is usually the busiest arrival window, while early morning sailings often give the calmest handover.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">If your operator uses a preauthorisation system, the ferry timing matters twice: once for pickup and once for return, because a delay can affect the office’s ability to release your deposit quickly. Travellers who plan the trip around a Cap de Barbaria (electric ferry) style routing should still verify that their rental office is open at the exact arrival hour.</p>
          <InfoBox><p>💡 <strong>Tip:</strong> Align ferry arrival and car pickup so you reach La Savina port with enough time for the contract, photos, and fuel checks; a 30-minute buffer can be the difference between a calm handover and a rushed one.</p></InfoBox>
      </Section>

      <div className="flex justify-center py-6">
        <a href="/" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-primary-foreground font-semibold shadow-md hover:opacity-90 transition">
          Compare Car Rental Deals
        </a>
      </div>

      <ImageDivider src="/6.webp" alt="Formentera car rental" />

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Local roads and where the cars actually go"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Most island driving flows out of La Savina along the PM-820, then branches through PMV-820-1, camí rural tracks, and short access roads toward the beaches and villages. That means a compact car such as a Fiat 500, Opel Corsa, Dacia Sandero, or Nissan Micra is often easier to park than a larger Jeep Wrangler Unlimited or Renault Trafic.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">Drivers heading toward Cala Saona, Cap de Barbaria, Es Pujols, Sant Ferran de ses Roques, Pilar de la Mola, or Es Caló de Sant Agustí should expect mixed road conditions, including narrow lanes and occasional slow sections. The rotonda del Hospital and the calle Almadrava area can become congestion points when multiple ferries arrive at once.</p>
      </Section>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Common operators and vehicle classes"
      >
          <CompanyCard><p><strong>ProAuto Rent a Car:</strong> ProAuto Rent a Car typically suits travellers who want straightforward La Savina pickup plus a compact class such as a Fiat Panda, Fiat 500, or Opel Corsa for short island routes.</p></CompanyCard>
          <CompanyCard><p><strong>Formotor:</strong> Formotor offers broad local coverage, and its inventory is useful for drivers seeking mid-size options such as a Renault Clio Auto, Hyundai Kona, or Dacia Jogger.</p></CompanyCard>
          <CompanyCard><p><strong>La Savina Rent a Car:</strong> La Savina Rent a Car is practical for port arrivals that need a quick handover and an easy walk to the office after ferry disembarkation.</p></CompanyCard>
          <CompanyCard><p><strong>Autos Formentera:</strong> Autos Formentera is often associated with front-line port access and is a common choice for families heading to Ses Illetes or Cala en Baster.</p></CompanyCard>
          <CompanyCard><p><strong>Motorent Pujols:</strong> Motorent Pujols is a useful option if your accommodation is near Es Pujols or if you want a simple route back from the beach before sunset.</p></CompanyCard>
          <CompanyCard><p><strong>OK Mobility:</strong> OK Mobility is a chain operator that can suit travellers who want a familiar booking process and year-round presence.</p></CompanyCard>
          <CompanyCard><p><strong>Esformentera:</strong> Esformentera is commonly used for island stays that need a balance of local service and off-season continuity.</p></CompanyCard>
          <CompanyCard><p><strong>Autos Ca Marí:</strong> Autos Ca Marí is a practical fit for travellers who want a local operator with winter coverage.</p></CompanyCard>
          <CompanyCard><p><strong>Pitiusas Rent a Car:</strong> Pitiusas Rent a Car can be relevant for travellers comparing local fleets and looking for alternative vehicle classes.</p></CompanyCard>
          <CompanyCard><p><strong>Formentera Meharis:</strong> Formentera Meharis is associated with compact and open-air island driving, especially for scenic routes with light luggage.</p></CompanyCard>
          <CompanyCard><p><strong>Rent a Car San Fernando:</strong> Rent a Car San Fernando is the sort of operator travellers should verify in advance during the off-season because opening patterns can change.</p></CompanyCard>
      </Section>

      <div className="flex justify-center py-16 mt-8">
        <a href="#compare-cars" className="cta-button">Compare Car Rental Deals</a>
      </div>
    </Layout>
  );
};

export default LaSavinaPortPickupGuide;
