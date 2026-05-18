import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import AffiliateWidget from "@/components/AffiliateWidget";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import { InfoBox, WarningBox } from "@/components/InfoBox";

const FAQ = () => {
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
        "name": "FAQ",
        "item": "https://formentera-car-rental.com/formentera-car-rental-faq"
      }
    ]
  };

  const faqSchema =
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Q1: Can I bring an Ibiza rental car to Formentera in summer 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, an Ibiza rental car is usually not allowed on Formentera, and the major operators that serve Ibiza generally prohibit island hopping to Formentera in their rental terms. If a company did allow it, the cost would usually include the formentera.eco fee of €6/day in June and September or €9/day in July and August, plus ferry transport on Baleària, Trasmapi, Aquabus, or Formentera Lines, which often pushes the total over €89-€130 round trip before any parking or insurance fees. A breach can trigger a €1,000-€10,000 fine under Ley 7/2019 and can also create a contractual claim from the rental operator. If you want a car on the island, book directly with local operators such as Autos Ca Marí, Pitiusas Rent a Car, or Rent a Car San Fernando instead."
        }
      },
      {
        "@type": "Question",
        "name": "Q2: What does the formentera.eco eco-tax cost in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The formentera.eco fee for non-resident vehicles is €6 per day in June and September and €9 per day in July and August. The rule applies a minimum charge of five days, so a short stay can still cost €30 in June or September and €45 in July or August, even if you stay fewer nights. Non-resident cars entering from the mainland or Ibiza via ferry are subject to this system, while local rental fleets operating from La Savina port and the island’s quota-managed operators are treated differently under the current vehicle cap. For current rules, the Consell Insular de Formentera and the BOIB publish the live quota and calendar updates each season."
        }
      },
      {
        "@type": "Question",
        "name": "Q3: Do I need an International Driving Permit (IDP) to rent in Formentera?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An IDP is not required for every driver, but many non-EU drivers should carry one to avoid rejection at the desk. EU licences and UK photocard licences are generally accepted, while US, Canadian, Australian, and New Zealand licences can require an IDP or sworn translation under Spanish practice and DGT guidance, and many desks in La Savina or Es Pujols will apply the stricter option as company policy. Spanish road-control practice and DGT checks also mean that non-Latin scripts are a real problem without an IDP, so it is safer to travel with one. The fee in the US is often around $20 through AAA, but rental desks such as OK Mobility or La Savina Rent a Car may still refuse a licence if the document set is incomplete."
        }
      },
      {
        "@type": "Question",
        "name": "Q4: How much does car rental cost in Formentera in peak summer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Peak-season prices are usually highest for automatic and SUV categories, with a Fiat Panda often priced around €80-€130/day, a Nissan Micra or Opel Corsa similar in the lower compact tier, and a Jeep Wrangler or Jeep Wrangler Unlimited commonly reaching €180-€300/day. A scooter such as a Piaggio Typhoon 50/125, Sym Symphony, Vespa LX 125, or Piaggio Beverly generally sits around €40-€60/day, while a Renault Trafic, Nissan Primastar, or Dacia Lodgy for family travel can move well above compact-car pricing in July and August. Published rates from operators such as La Savina Rent a Car, Formotor, and Motorent Pujols usually drop by 40%-50% from October to May, especially for off-airport and port pickup. If you are comparing arrival options, see La Savina port pickup logistics](/la-savina-port-pickup) and the ferry timing from Baleària or Trasmapi before you book."
        }
      },
      {
        "@type": "Question",
        "name": "Q5: Is Ses Illetes really free if I rent an electric car?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, a 100% electric car can enter Ses Illetes without the standard combustion-engine entry fee. The park rule used by IBIFOR sets a daily charge of roughly €4-€6 for conventional cars, while hybrid cars normally receive a partial discount and electric vehicles pay €0, which makes a Renault Zoe, BMW i3, or Fiat 500 electric a practical beach option. Capacity still matters because Ses Illetes, Estany Pudent, and the access lanes near Espalmador are controlled during peak hours, so free entry does not guarantee immediate access. If you want to compare charging and route planning, review [electric car rental options on Formentera](/electric-cars-formentera) and plan around La Savina port, Sant Francesc 3 cluster, Es Pujols, Sant Ferran, Migjorn, and La Mola charging points."
        }
      },
      {
        "@type": "Question",
        "name": "Q6: What insurance excess or deductible should I expect on a Formentera rental?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A basic Formentera rental usually includes CDW with an excess or deductible of about €600 plus VAT, which is the amount a renter can still owe after damage or theft. To reduce that liability, local desks may offer SCDW, super CDW, FDW, zero excess, or full coverage packages, with typical add-ons around €12-€14/day for an economy car and €16-€27/day for premium models such as a Peugeot 3008 or Nissan Juke. Standard policies often exclude tyres, wheels, glass, mirrors, undercarriage damage, and damage on camí rural tracks, calle Almadrava access lanes, or rough approaches near Cap de Barbaria. Before signing, confirm whether the preauthorisation is capped in euros and whether the operator states the franquicia clearly in the contract."
        }
      },
      {
        "@type": "Question",
        "name": "Q7: Are there any rental companies open year-round?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, several operators keep desks open in winter so that residents and off-season visitors can still rent a car or scooter. Verified year-round names include OK Mobility, Esformentera, Autos Ca Marí, Motorent Pujols, Formotor, and Formentera Meharis, with local demand concentrated around La Savina port, Sant Francesc Xavier, Sant Ferran de ses Roques, and Es Pujols. Winter continuity matters because roughly 30% of the island’s rental businesses stay open after late October, while others close until Easter and reopen around Setmana Santa; that gap affects availability for a Fiat 500, Dacia Sandero, or Renault Clio Auto. If you need a winter booking, ask for the office hours in writing and verify the vehicle class before payment."
        }
      },
      {
        "@type": "Question",
        "name": "Q8: How can I avoid scam charges after returning my car?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A careful pickup and return record is the best protection against disputed damage charges. Take 25-30 photos and a 360° video at pickup, then repeat the same record at return, including mirrors, glass, wheels, fuel level, and the undercarriage if the car has touched a camí rural route or a rough shoulder near PM-820, PMV-820-1, or the rotonda del Hospital. Under Decree 46/2009, you should never pre-sign a blank credit card preauthorisation slip, and you should ask for the \"hoja de reclamaciones\" immediately if the desk refuses inspection or tries to add an unexplained charge. Licensed operators normally display a Balearic registry number and are overseen by the Direcció General de Consum, the Govern de les Illes Balears, and consumer mediation bodies such as the Junta Arbitral de Consumo."
        }
      },
      {
        "@type": "Question",
        "name": "Q9: Can I rent a Citroën Mehari for a wedding or photoshoot?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, a Citroën e-Mehari or classic Citroën Mehari is commonly rented for weddings, shoots, and promotional events on Formentera. Formentera Meharis is the specialist operator most closely associated with the model, with shoulder-season pricing often starting around €90/day after earlier base rates near €75/day, while Esformentera also offers electric or hybrid-style leisure vehicles for styled events. If the shoot location is in Sant Francesc Xavier, La Mola, or a restricted church-square area, you may need an on-site permit from the island office at the OAC in advance. For route planning, check access near Sant Ferran de ses Roques, Es Caló de Sant Agustí, and Cala Saona before confirming the booking."
        }
      },
      {
        "@type": "Question",
        "name": "Q10: What's the speed limit on PM-820, the main island road?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The PM-820 has a maximum speed limit of 70 km/h, while PMV-820-1 and the road climbs toward La Mola and Cap de Barbaria are typically limited to 50 km/h. Inside urban areas such as Sant Francesc Xavier, Sant Ferran de ses Roques, Es Pujols, and La Savina port, the DGT urban limit is 30 km/h, and shared pedestrian platforms can drop to 20 km/h. For safe driving, plan extra time on camí rural connectors to Cala Saona, Es Caló des Mort, Cala en Baster, and Migjorn because narrow lanes and local traffic slow average speed below the posted limit. If you need route and parking specifics, see [driving in Formentera](/driving-in-formentera) before you leave the ferry terminal."
        }
      },
      {
        "@type": "Question",
        "name": "Q11: Are quad bikes available to rent on Formentera in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, tourist quad-bike rental is effectively closed in Formentera during the high season because formentera.eco sets a zero quota for tourist quads between 1 June and 30 September. The policy is tied to noise reduction, preservation of camí rural routes and rural access roads, and safety on narrow island lanes that also connect Cap de Barbaria, La Mola, and the Estany Pudent area. Residents may still use authorised vehicles, but tourist agencies cannot legally market quads as a normal rental product during the restricted period. A permit-based exception does not change the general tourist ban, so booking an ATV as a standard holiday renter is not a realistic option."
        }
      },
      {
        "@type": "Question",
        "name": "Q12: Where do I file a complaint if a rental company overcharges me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You should request the company's \"hoja de reclamaciones\" and submit the consumer copy to the official consumer authority if the matter is unresolved. Under Decree 46/2009 and the consumer framework used by the Direcció General de Consum, the form is a three-part document, and the complaint can be escalated to the Junta Arbitral de Consumo for free mediation; many cases are submitted online through the Govern de les Illes Balears system with SMS verification. If the issue involves misleading advertising, refusal to refund, or abusive charges, the authority can review the case under regional consumer rules and, where relevant, vehicle-rental conduct standards supported by AEVAB, BALEVAL, and FENEVAL industry norms. If the dispute involves safety or criminal conduct, Spanish traffic and criminal law may also apply, including Article 379.2 Código Penal Español in serious road-offence cases."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEOHead
        title="Formentera Car Rental FAQ: 12 Key Questions for 2026 |..."
        description="Planning a 2026 trip to Formentera means understanding three things early: the formentera.eco quota system, the island’s rental insurance rules, and the"
        canonical="https://formentera-car-rental.com/formentera-car-rental-faq/"
        jsonLd={[breadcrumbSchema, faqSchema]}
      />

      <Breadcrumbs items={[{ label: "FAQ" }]} />

      <HeroSection
        title="Formentera Car Rental FAQ: 12 Key Questions for 2026"
        subtitle={<><p className="text-white drop-shadow-md">Planning a 2026 trip to Formentera means understanding three things early: the formentera.eco quota system, the island’s rental insurance rules, and the practical limits of island roads and ferries. A non-resident car can face a €6/day fee in June and September or €9/day in July and August, with a 5-day minimum under the current regulation, while local fleets such as La Savina Rent a Car, Formotor, and Autos Formentera are managed inside the quota system.</p></>}
        image="/11.webp"
        imageAlt="Car rental in Formentera"
      />
      <AffiliateWidget />

      <section className="container max-w-4xl py-6">
        <p className="text-gray-700 mb-6 leading-relaxed">The questions below cover the most common pre-booking concerns for Formentera. For deeper context, see our <a href="/la-savina-port-pickup-guide/" className="text-primary underline hover:text-accent">La Savina port pickup walkthrough</a> and the <a href="/electric-cars-in-formentera/" className="text-primary underline hover:text-accent">electric-vehicle savings breakdown</a>.</p>
      </section>
      <section className="container max-w-4xl py-10">
        <FAQSection
        items={[
          { question: "Q1: Can I bring an Ibiza rental car to Formentera in summer 2026?", answer: "No, an Ibiza rental car is usually not allowed on Formentera, and the major operators that serve Ibiza generally prohibit island hopping to Formentera in their rental terms. If a company did allow it, the cost would usually include the formentera.eco fee of €6/day in June and September or €9/day in July and August, plus ferry transport on Baleària, Trasmapi, Aquabus, or Formentera Lines, which often pushes the total over €89-€130 round trip before any parking or insurance fees. A breach can trigger a €1,000-€10,000 fine under Ley 7/2019 and can also create a contractual claim from the rental operator. If you want a car on the island, book directly with local operators such as Autos Ca Marí, Pitiusas Rent a Car, or Rent a Car San Fernando instead." },
          { question: "Q2: What does the formentera.eco eco-tax cost in 2026?", answer: "The formentera.eco fee for non-resident vehicles is €6 per day in June and September and €9 per day in July and August. The rule applies a minimum charge of five days, so a short stay can still cost €30 in June or September and €45 in July or August, even if you stay fewer nights. Non-resident cars entering from the mainland or Ibiza via ferry are subject to this system, while local rental fleets operating from La Savina port and the island’s quota-managed operators are treated differently under the current vehicle cap. For current rules, the Consell Insular de Formentera and the BOIB publish the live quota and calendar updates each season." },
          { question: "Q3: Do I need an International Driving Permit (IDP) to rent in Formentera?", answer: "An IDP is not required for every driver, but many non-EU drivers should carry one to avoid rejection at the desk. EU licences and UK photocard licences are generally accepted, while US, Canadian, Australian, and New Zealand licences can require an IDP or sworn translation under Spanish practice and DGT guidance, and many desks in La Savina or Es Pujols will apply the stricter option as company policy. Spanish road-control practice and DGT checks also mean that non-Latin scripts are a real problem without an IDP, so it is safer to travel with one. The fee in the US is often around $20 through AAA, but rental desks such as OK Mobility or La Savina Rent a Car may still refuse a licence if the document set is incomplete." },
          { question: "Q4: How much does car rental cost in Formentera in peak summer?", answer: "Peak-season prices are usually highest for automatic and SUV categories, with a Fiat Panda often priced around €80-€130/day, a Nissan Micra or Opel Corsa similar in the lower compact tier, and a Jeep Wrangler or Jeep Wrangler Unlimited commonly reaching €180-€300/day. A scooter such as a Piaggio Typhoon 50/125, Sym Symphony, Vespa LX 125, or Piaggio Beverly generally sits around €40-€60/day, while a Renault Trafic, Nissan Primastar, or Dacia Lodgy for family travel can move well above compact-car pricing in July and August. Published rates from operators such as La Savina Rent a Car, Formotor, and Motorent Pujols usually drop by 40%-50% from October to May, especially for off-airport and port pickup. If you are comparing arrival options, see <a href=\"/la-savina-port-pickup-guide\" className=\"text-primary underline hover:text-accent\">La Savina port pickup logistics</a> and the ferry timing from Baleària or Trasmapi before you book." },
          { question: "Q5: Is Ses Illetes really free if I rent an electric car?", answer: "Yes, a 100% electric car can enter Ses Illetes without the standard combustion-engine entry fee. The park rule used by IBIFOR sets a daily charge of roughly €4-€6 for conventional cars, while hybrid cars normally receive a partial discount and electric vehicles pay €0, which makes a Renault Zoe, BMW i3, or Fiat 500 electric a practical beach option. Capacity still matters because Ses Illetes, Estany Pudent, and the access lanes near Espalmador are controlled during peak hours, so free entry does not guarantee immediate access. If you want to compare charging and route planning, review <a href=\"/electric-cars-in-formentera\" className=\"text-primary underline hover:text-accent\">electric car rental options on Formentera</a> and plan around La Savina port, Sant Francesc 3 cluster, Es Pujols, Sant Ferran, Migjorn, and La Mola charging points." },
          { question: "Q6: What insurance excess or deductible should I expect on a Formentera rental?", answer: "A basic Formentera rental usually includes CDW with an excess or deductible of about €600 plus VAT, which is the amount a renter can still owe after damage or theft. To reduce that liability, local desks may offer SCDW, super CDW, FDW, zero excess, or full coverage packages, with typical add-ons around €12-€14/day for an economy car and €16-€27/day for premium models such as a Peugeot 3008 or Nissan Juke. Standard policies often exclude tyres, wheels, glass, mirrors, undercarriage damage, and damage on camí rural tracks, calle Almadrava access lanes, or rough approaches near Cap de Barbaria. Before signing, confirm whether the preauthorisation is capped in euros and whether the operator states the franquicia clearly in the contract." },
          { question: "Q7: Are there any rental companies open year-round?", answer: "Yes, several operators keep desks open in winter so that residents and off-season visitors can still rent a car or scooter. Verified year-round names include OK Mobility, Esformentera, Autos Ca Marí, Motorent Pujols, Formotor, and Formentera Meharis, with local demand concentrated around La Savina port, Sant Francesc Xavier, Sant Ferran de ses Roques, and Es Pujols. Winter continuity matters because roughly 30% of the island’s rental businesses stay open after late October, while others close until Easter and reopen around Setmana Santa; that gap affects availability for a Fiat 500, Dacia Sandero, or Renault Clio Auto. If you need a winter booking, ask for the office hours in writing and verify the vehicle class before payment." },
          { question: "Q8: How can I avoid scam charges after returning my car?", answer: "A careful pickup and return record is the best protection against disputed damage charges. Take 25-30 photos and a 360° video at pickup, then repeat the same record at return, including mirrors, glass, wheels, fuel level, and the undercarriage if the car has touched a camí rural route or a rough shoulder near PM-820, PMV-820-1, or the rotonda del Hospital. Under Decree 46/2009, you should never pre-sign a blank credit card preauthorisation slip, and you should ask for the \"hoja de reclamaciones\" immediately if the desk refuses inspection or tries to add an unexplained charge. Licensed operators normally display a Balearic registry number and are overseen by the Direcció General de Consum, the Govern de les Illes Balears, and consumer mediation bodies such as the Junta Arbitral de Consumo." },
          { question: "Q9: Can I rent a Citroën Mehari for a wedding or photoshoot?", answer: "Yes, a Citroën e-Mehari or classic Citroën Mehari is commonly rented for weddings, shoots, and promotional events on Formentera. Formentera Meharis is the specialist operator most closely associated with the model, with shoulder-season pricing often starting around €90/day after earlier base rates near €75/day, while Esformentera also offers electric or hybrid-style leisure vehicles for styled events. If the shoot location is in Sant Francesc Xavier, La Mola, or a restricted church-square area, you may need an on-site permit from the island office at the OAC in advance. For route planning, check access near Sant Ferran de ses Roques, Es Caló de Sant Agustí, and Cala Saona before confirming the booking." },
          { question: "Q10: What's the speed limit on PM-820, the main island road?", answer: "The PM-820 has a maximum speed limit of 70 km/h, while PMV-820-1 and the road climbs toward La Mola and Cap de Barbaria are typically limited to 50 km/h. Inside urban areas such as Sant Francesc Xavier, Sant Ferran de ses Roques, Es Pujols, and La Savina port, the DGT urban limit is 30 km/h, and shared pedestrian platforms can drop to 20 km/h. For safe driving, plan extra time on camí rural connectors to Cala Saona, Es Caló des Mort, Cala en Baster, and Migjorn because narrow lanes and local traffic slow average speed below the posted limit. If you need route and parking specifics, see <a href=\"/driving-in-formentera\" className=\"text-primary underline hover:text-accent\">driving in Formentera</a> before you leave the ferry terminal." },
          { question: "Q11: Are quad bikes available to rent on Formentera in 2026?", answer: "No, tourist quad-bike rental is effectively closed in Formentera during the high season because formentera.eco sets a zero quota for tourist quads between 1 June and 30 September. The policy is tied to noise reduction, preservation of camí rural routes and rural access roads, and safety on narrow island lanes that also connect Cap de Barbaria, La Mola, and the Estany Pudent area. Residents may still use authorised vehicles, but tourist agencies cannot legally market quads as a normal rental product during the restricted period. A permit-based exception does not change the general tourist ban, so booking an ATV as a standard holiday renter is not a realistic option." },
          { question: "Q12: Where do I file a complaint if a rental company overcharges me?", answer: "You should request the company's \"hoja de reclamaciones\" and submit the consumer copy to the official consumer authority if the matter is unresolved. Under Decree 46/2009 and the consumer framework used by the Direcció General de Consum, the form is a three-part document, and the complaint can be escalated to the Junta Arbitral de Consumo for free mediation; many cases are submitted online through the Govern de les Illes Balears system with SMS verification. If the issue involves misleading advertising, refusal to refund, or abusive charges, the authority can review the case under regional consumer rules and, where relevant, vehicle-rental conduct standards supported by AEVAB, BALEVAL, and FENEVAL industry norms. If the dispute involves safety or criminal conduct, Spanish traffic and criminal law may also apply, including Article 379.2 Código Penal Español in serious road-offence cases." }
        ]}
      />
      </section>

      <div className="flex justify-center py-16 mt-8">
        <a href="#compare-cars" className="cta-button">Compare Car Rental Deals</a>
      </div>
    </Layout>
  );
};

export default FAQ;
