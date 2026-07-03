import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import DataTable from "@/components/DataTable";
import AffiliateWidget from "@/components/AffiliateWidget";
import Breadcrumbs from "@/components/Breadcrumbs";
import Section from "@/components/Section";
import ImageDivider from "@/components/ImageDivider";
import { InfoBox, WarningBox } from "@/components/InfoBox";
import { Car, Ship, Euro, Waves, ParkingSquare, HelpCircle, CreditCard } from "lucide-react";

const AutoHurenFormentera = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://formentera-car-rental.com" },
      { "@type": "ListItem", position: 2, name: "Auto huren op Formentera", item: "https://formentera-car-rental.com/auto-huren-formentera" },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Auto huren op Formentera 2026: de complete gids voor de slimme reiziger",
    description:
      "Auto huren op Formentera doe je het beste ter plaatse in La Savina — ook zonder creditcard. Alles over de formentera.eco-vergunning, kosten, stranden en parkeren in 2026.",
    url: "https://formentera-car-rental.com/auto-huren-formentera",
    datePublished: "2026-06-27",
    dateModified: "2026-07-02",
    publisher: {
      "@type": "Organization",
      name: "Formentera Car Rental",
      url: "https://formentera-car-rental.com",
      logo: { "@type": "ImageObject", url: "https://formentera-car-rental.com/favicon-512x512.png" },
    },
    mainEntityOfPage: "https://formentera-car-rental.com/auto-huren-formentera",
    inLanguage: "nl",
  };

  return (
    <Layout>
      <SEOHead
        title="Auto huren op Formentera 2026 – ook zonder creditcard"
        description="Auto huren op Formentera zonder creditcard: huur ter plaatse in La Savina, niet een Ibiza-huurauto op de veerboot (boete tot €10.000). Alles over de formentera.eco-vergunning, kosten en stranden in 2026."
        canonical="https://formentera-car-rental.com/auto-huren-formentera/"
      />

      <Breadcrumbs items={[{ label: "Auto huren op Formentera" }]} />

      <HeroSection
        title="Auto huren op Formentera"
        subtitle={
          <>
            <p className="intro-section text-white drop-shadow-md">
              Wil je een <strong>auto huren op Formentera</strong>? Omdat het eiland geen vliegveld heeft, kom je
              uitsluitend per veerboot vanaf Ibiza aan in de haven van <strong>La Savina</strong>. De slimste en meest
              voordelige keuze is om je huurauto direct ter plaatse in La Savina te huren — neem géén huurauto vanaf
              Ibiza mee op de boot, want dat kan een boete van <strong>€1.000 tot €10.000</strong> opleveren.
            </p>
          </>
        }
        image="/auto-huren-formentera-hero.webp"
        imageAlt="Kleine huurauto op een kustweg op Formentera"
      />
      <AffiliateWidget />

      <Section icon={<Ship className="w-6 h-6" />} title="Hoe kom je aan een auto op Formentera?">
        <p className="text-gray-700 mb-4 leading-relaxed">
          Formentera is uitsluitend over water bereikbaar; alle reizigers komen aan in <strong>La Savina</strong>, de
          enige haven van het eiland. Voor wie een voertuig wil meenemen, zijn er de auto­veerboten (Ro-Ro garages) van{" "}
          <strong>Baleària</strong> en <strong>Trasmapi</strong>. De oversteek met deze autoveerboten duurt 55 tot 75
          minuten, terwijl de snelle ferry's (alleen passagiers) er 25 tot 35 minuten over doen. Maatschappijen als{" "}
          <strong>Aquabus</strong> en <strong>Formentera Lines</strong> zijn uitsluitend voor voetgangers en fietsers.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Een veerboot­ticket als voetganger kost ongeveer <strong>€23 tot €35</strong> voor een enkele reis. Wil je
          toch een auto meenemen, dan beginnen de basistarieven voor twee volwassenen en één auto rond de{" "}
          <strong>€37</strong>, oplopend tot <strong>€123 à €135</strong> in het hoogseizoen. De boarding voor
          voertuigen sluit strikt 90 minuten voor vertrek, en een plek in de autogarage moet je in juli en augustus 2
          tot 3 maanden van tevoren reserveren.
        </p>
        <InfoBox>
          <p>
            💡 <strong>Tip:</strong> wie als voetganger oversteekt en ter plaatse huurt, omzeilt zowel het gedoe met de
            autogarage als de verplichte formentera.eco-vergunning — de verhuurder regelt dat namelijk voor je.
          </p>
        </InfoBox>
      </Section>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Waarom je beter op Formentera zelf huurt (en geen Ibiza-huurauto meeneemt)"
        alt
      >
        <p className="text-gray-700 mb-4 leading-relaxed">
          Het is een veelgemaakte fout: een auto huren op de luchthaven van Ibiza en die via de veerboot meenemen naar
          Formentera. Dat is om twee redenen ten strengste verboden. Ten eerste verbieden vrijwel alle Ibiza-verhuurders
          de overtocht in hun contract, waardoor de <strong>verzekering volledig vervalt</strong> en er geen pechhulp
          beschikbaar is — bij schade of pech ben je persoonlijk aansprakelijk voor alle kosten, inclusief sleepkosten
          over zee.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Ten tweede verbiedt de lokale wet (
          <a href="https://formentera.eco" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-accent">
            formentera.eco
          </a>
          , op grond van <strong>Wet 7/2019</strong>) het rijden met buiten het eiland gehuurde voertuigen. Rijd je
          zonder geldige registratie met een externe huurauto, dan riskeer je op grond van Artikel 17 een boete van{" "}
          <strong>€1.000 tot €10.000</strong> (standaard €1.000, verlaagd naar €600 bij snelle betaling). De handhaving
          is volledig geautomatiseerd: <strong>ANPR-kentekencamera's</strong> aan de Carrer Almadrava in La Savina
          registreerden in de eerste helft van 2025 alleen al 1,8 miljoen kentekens.
        </p>
        <WarningBox>
          <p>
            ⚠️ <strong>Let op:</strong> de Nederlandstalige bron yourformentera.es stelt het duidelijk: "Je kunt in Ibiza
            geen auto huren en die meenemen op de veerboot naar Formentera." Ook de officiële FAQ van OK Mobility
            bevestigt dit verbod.
          </p>
        </WarningBox>
        <p className="text-gray-700 mb-4 leading-relaxed">
          De oplossing is simpel: <strong>huur je auto direct op Formentera in de haven van La Savina</strong>. Een op
          het eiland gehuurde auto valt onder een aparte, vooraf goedgekeurde verhuurquota (voor 2026 vastgesteld op
          2.268 auto's en 5.880 motorfietsen). Als klant betaal je de formentera.eco-milieuheffing niet zelf en vraag je
          geen vergunning aan: de verhuurder regelt de autorisatie centraal en de milieutax zit al in de huurprijs. Het
          meenemen van een auto op de veerboot is alléén legaal als het je eigen privévoertuig (geen huurauto) is, mét
          een vooraf betaalde formentera.eco-vergunning.
        </p>
      </Section>

      <Section icon={<Euro className="w-6 h-6" />} title="De formentera.eco-vergunning (alleen voor je eigen meegebrachte auto)">
        <p className="text-gray-700 mb-4 leading-relaxed">
          Voor reizigers die met hun eigen particuliere voertuig naar Formentera komen, geldt in de zomer een strikt
          reguleringssysteem van de <strong>Consell Insular de Formentera</strong> onder Wet 7/2019. De reguleringsperiode
          loopt voor 2026 van <strong>1 juni tot en met 30 september</strong>. Elk motorvoertuig dat in die periode op het
          eiland rijdt, parkeert of binnenkomt, moet vooraf online een autorisatie aanvragen via{" "}
          <strong>formentera.eco</strong> — vóórdat je de veerboot boekt.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Voor 2026 geldt een dagelijks bezoekersquotum van maximaal <strong>1.732 auto's</strong> en 122 motorfietsen
          (binnen een eilandplafond van 10.287 voertuigen). Het aanvraagportaal opende op 22 april 2026. De daglimiet is
          op ongeveer 74 zomerdagen — vrijwel heel juli en augustus — volledig uitverkocht, dus boek tijdig.
        </p>
        <DataTable
          headers={["Voertuigtype", "Periode", "Tarief per dag", "Minimumtarief per boeking"]}
          rows={[
            ["Auto", "Juni & September", "€6,00", "€30,00"],
            ["Auto", "Juli & Augustus", "€9,00", "€45,00"],
            ["Motorfiets", "Juni & September", "€3,00", "€15,00"],
            ["Motorfiets", "Juli & Augustus", "€4,50", "€22,50"],
          ]}
        />
        <InfoBox>
          <p>
            💡 <strong>Tip:</strong> volledig <a href="/electric-cars-in-formentera/" className="text-primary underline hover:text-accent">elektrische auto's</a> zijn
            voor 100% vrijgesteld van de heffing (€0), en hybrides krijgen 50% korting. Een elektrische auto moet wél nog
            steeds vooraf worden geregistreerd om een plek binnen het quotum te reserveren.
          </p>
        </InfoBox>
        <WarningBox>
          <p>
            ⚠️ <strong>Verboden:</strong> campers en caravans hebben een quotum van 0 en zijn van 1 juni tot 30 september
            volledig verboden op Formentera. Ook quads zijn gedurende de hele reguleringsperiode verboden.
          </p>
        </WarningBox>
      </Section>

      <ImageDivider src="/auto-huren-formentera-savina.webp" alt="Haven van La Savina op Formentera met huurauto's" />

      <Section icon={<Car className="w-6 h-6" />} title="Je auto ophalen in La Savina" alt>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Wanneer je met de veerboot in La Savina aankomt, vind je direct bij de terminal diverse verhuurders met een
          kantoor aan de haven, waaronder <strong>OK Mobility</strong>, <strong>Avis</strong>, <strong>ProAuto</strong>,{" "}
          <strong>EsFormentera</strong> en <strong>Formotor</strong>. Hoe het ophalen bij de haven precies in zijn werk
          gaat, lees je in onze{" "}
          <a href="/la-savina-port-pickup-guide/" className="text-primary underline hover:text-accent">
            gids voor ophalen in de haven van La Savina
          </a>
          .
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          De algemene minimumleeftijd is <strong>21 jaar met 2 jaar rijbewijs</strong>; voor premium klassen geldt 25
          jaar met 3 jaar ervaring (OK Mobility verhuurt onder voorwaarden vanaf 18 jaar met toeslag). Jonge bestuurders
          van 21 tot 24 jaar betalen een toeslag van ongeveer <strong>€3 per dag</strong> en kunnen het eigen risico vaak
          niet afkopen. Bij de grote balies (OK Mobility, Avis) is voor de borg een fysieke <strong>creditcard</strong>{" "}
          (Visa of Mastercard) verplicht; American Express, Diners Club en betaalkaarten (debit) worden daar geweigerd —
          maar er zijn lokale alternatieven zonder creditcard, zie de sectie hieronder.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Het eigen risico (de <em>franchise</em>) varieert per voertuigklasse van <strong>€500 tot €2.500</strong> en is
          ter plaatse af te kopen voor €12 tot €27 per dag; aparte banden- en velgdekking kost €2 tot €4 extra per dag.
          De basisprijs voor een kleine auto begint rond <strong>€17 per dag</strong>, met een standaard 'vol-vol'
          brandstof­regeling.
        </p>
        <InfoBox>
          <p>
            💡 <strong>Tip:</strong> kies een klein model zoals een <strong>Fiat Panda</strong> of <strong>Citroën C3</strong>.
            De wegen zijn smal en omzoomd met drooggestapelde stenen muren, en parkeerplekken zijn krap — grote SUV's zijn
            onpraktisch en lopen snel schade op. Een scooter (50–125cc) huur je vanaf €9 tot €35 per dag; quads zijn
            verboden.
          </p>
        </InfoBox>
      </Section>

      <Section icon={<CreditCard className="w-6 h-6" />} title="Auto of scooter huren zonder creditcard">
        <p className="text-gray-700 mb-4 leading-relaxed">
          De grote balies in de haven (OK Mobility, Avis) blokkeren de borg op een fysieke creditcard en weigeren een
          Nederlandse of Vlaamse bankpas (Maestro, V PAY). Wie alleen een debetkaart heeft, is daarom aangewezen op de
          lokale verhuurders — en die accepteren wél een gewone bankpas of contant geld, mits je een hogere borg of een
          verplichte afkoop van het eigen risico accepteert. Reserveer in juli en augustus altijd vooraf: het
          eilandquotum is beperkt en walk-up is dan risicovol.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          <strong>Proauto Rent a Car</strong> (centraal kantoor in de haven van La Savina) accepteert een debetkaart, maar
          dan geldt een verplichte borg die afhangt van de gekozen dekking: zonder afkoop van de franchise staat de borg
          gelijk aan het eigen-risicobedrag. <strong>Motorent Pujols</strong> accepteert Visa, Mastercard én Maestro, met
          online 25% aanbetaling of volledige betaling per kaart. Bij de meeste lokale scooterverhuurders reken je een
          borg van ongeveer <strong>€20 per scooter</strong> af, te voldoen met kaart of contant.
        </p>
        <DataTable
          headers={["Voertuig", "Franchise (eigen risico)", "Afkoop per dag", "Borg zonder creditcard"]}
          rows={[
            ["Scooter 50cc", "€180–€300", "€4–€8", "≈ €20 (kaart of contant)"],
            ["Scooter 125cc", "€500 + btw", "€15", "≈ €20 (kaart of contant)"],
            ["Auto groep A", "€800", "€12–€27", "= franchise, via debetkaart"],
            ["Auto groep C+", "€1.200–€2.500", "€12–€27", "= franchise, via debetkaart"],
          ]}
        />
        <WarningBox>
          <p>
            ⚠️ <strong>Let op de scooterregel:</strong> voor een <strong>125cc-scooter</strong> heb je een rijbewijs A1/A
            nodig, óf een B-rijbewijs dat je minstens 3 jaar bezit. Die B-naar-125cc-gelijkstelling is een Spaanse regel
            die alléén binnen Spanje geldt. Voor een 50cc-scooter volstaat een AM- of B-rijbewijs vanaf 18 jaar. EU-rijbewijzen
            worden erkend; een internationaal rijbewijs is voor Nederlanders en Belgen niet nodig.
          </p>
        </WarningBox>
        <InfoBox>
          <p>
            💡 <strong>Tip:</strong> gebruik de vergelijkingswidget boven aan deze pagina (Localrent) om lokale
            verhuurders met hun werkelijke borg- en betaalvoorwaarden naast elkaar te leggen — daar filter je op
            aanbieders die een bankpas of contant geld accepteren, in plaats van te gokken aan de balie.
          </p>
        </InfoBox>
      </Section>

      <Section icon={<Waves className="w-6 h-6" />} title="Met de auto naar de stranden">
        <p className="text-gray-700 mb-4 leading-relaxed">
          De toegang tot de mooiste stranden is streng gereguleerd om de natuur te beschermen. Het bekendste voorbeeld is{" "}
          <strong>Ses Illetes</strong>, in het natuurpark <em>Parc Natural de ses Salines</em>. De toegangsweg wordt door
          IBIFOR beheerd van 10 mei tot en met 15 oktober 2026, met een limiet van 384 auto's en 1.132 motorfietsen. Voor
          auto's geldt een progressieve tol:
        </p>
        <DataTable
          headers={["Periode (2026)", "Toegangstarief auto"]}
          rows={[
            ["10 mei t/m 15 juni", "€5,00"],
            ["16 juni t/m 15 juli", "€6,00"],
            ["16 juli t/m 31 augustus (piek)", "€7,00"],
            ["1 t/m 15 september", "€6,00"],
            ["16 september t/m 15 oktober", "€5,00"],
          ]}
        />
        <p className="text-gray-700 mb-4 leading-relaxed">
          Volledig elektrische voertuigen, fietsers, voetgangers en mindervaliden hebben <strong>gratis</strong> toegang;
          hybrides krijgen 50% korting en bewoners zijn vrijgesteld. Het parkeerterrein is in het hoogseizoen meestal al
          tussen <strong>10:00 en 11:00 uur</strong> vol. Een milieuvriendelijk alternatief is buslijn <strong>L3</strong>
          {" "}vanaf de haven van La Savina (gele route naar Ses Illetes, blauwe route naar Es Pujols). Meer
          strandroutes vind je in onze{" "}
          <a href="/formentera-beaches-by-car/" className="text-primary underline hover:text-accent">
            gids stranden van Formentera met de auto
          </a>
          .
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>
            <strong>Migjorn:</strong> het langste strand, met ruime gratis parkeerterreinen nabij de strandtenten
            (chiringuitos) en eenvoudige auto­toegang.
          </li>
          <li>
            <strong>Cala Saona:</strong> klein parkeerterrein van zo'n 60 plaatsen dat snel volloopt — kom vóór 09:30 uur.
          </li>
          <li>
            <strong>Cap de Barbaria:</strong> de weg naar de vuurtoren is van 15 mei tot 15 oktober met een slagboom
            afgesloten; parkeren in een gereguleerd terrein (±60 auto's), daarna te voet of per fiets verder.
          </li>
          <li>
            <strong>Es Caló des Mort &amp; Es Ram:</strong> parkeren verboden; alleen kort stoppen om passagiers af te
            zetten.
          </li>
        </ul>
      </Section>

      <ImageDivider src="/auto-huren-formentera-illetes.webp" alt="Strand Ses Illetes op Formentera met turquoise water" />

      <Section icon={<ParkingSquare className="w-6 h-6" />} title="Rijden, snelheid en parkeren" alt>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Het wegennet is compact (ongeveer 40 km) en het eiland is slechts zo'n 20 km lang. De maximumsnelheid is{" "}
          <strong>70 km/u</strong> op de hoofdweg (PM-820), <strong>50 km/u</strong> op de rondwegen rond de dorpen en{" "}
          <strong>30 km/u</strong> in de dorpskernen (op de boulevard van La Savina zelfs 20 km/u). De Policia Local en de
          Guardia Civil handhaven met radar en ANPR-camera's; op de PM-820 staat een vaste flitspaal tussen het
          CEPSA-tankstation en de kruising naar Porto-salè. Meer over de verkeersregels lees je in onze{" "}
          <a href="/driving-in-formentera/" className="text-primary underline hover:text-accent">
            gids rijden op Formentera
          </a>
          .
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Er zijn slechts <strong>twee tankstations</strong>, beide aan de PM-820: CEPSA/Moeve op km 1,2 (tussen La Savina
          en Sant Francesc) en REPSOL op km 4,6 (richting El Pilar de la Mola). Tank op tijd vóór je naar de stranden
          gaat; aan het einde van de zomermiddagen ontstaan er lange wachtrijen.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          In de dorpskernen geldt van mei tot en met oktober de <strong>Zona Blava</strong> (blauwe zone). Volgens{" "}
          <a href="https://www.zonablava.com" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-accent">
            zonablava.com
          </a>{" "}
          gelden deze regels:
        </p>
        <DataTable
          headers={["Plaats", "Gereguleerde dagen", "Zondag / feestdag"]}
          rows={[
            ["La Savina", "Elke dag 09:00–14:00 en 16:00–21:00", "Betaald (ook zondag)"],
            ["Es Pujols", "Elke dag 09:00–14:00 en 16:00–21:00", "Betaald (ook zondag)"],
            ["Sant Francesc", "Ma–za 09:00–14:00 en 16:00–21:00", "Gratis op zon- en feestdagen"],
            ["Sant Ferran", "Ma–za 09:00–14:00 en 16:00–21:00", "Gratis op zon- en feestdagen"],
          ]}
        />
        <p className="text-gray-700 mb-4 leading-relaxed">
          Het tarief is <strong>€1,20 per uur</strong>; de eerste 30 minuten zijn gratis (per dorp, per dag) en tussen
          14:00 en 16:00 uur parkeert iedereen gratis. Elektrische auto's parkeren gratis (100% korting), hybrides krijgen
          50% korting. Betalen kan via de <strong>Flowbird</strong>-app; een boete voor overschrijding annuleer je voor €3
          bij elke automaat binnen 60 minuten. De groene zone (Zona Verda) in La Savina is uitsluitend voor bewoners.
          Gratis parkeren kan op het overloopterrein op ±700 m van de ferryterminal (max 5 dagen, vol in juli/augustus).
        </p>
      </Section>

      <ImageDivider src="/auto-huren-formentera-road.webp" alt="Smalle landelijke weg op Formentera met stenen muren" />

      <Section icon={<HelpCircle className="w-6 h-6" />} title="Veelgestelde vragen">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Mag ik mijn Ibiza-huurauto meenemen op de veerboot?</h3>
            <p className="text-gray-700 leading-relaxed">
              Nee, dit is ten strengste verboden. De Ibiza-verhuurders verbieden het in hun voorwaarden, waardoor je
              verzekering vervalt en je geen pechhulp hebt op Formentera. Bovendien verbiedt Wet 7/2019 de toegang van
              extern gehuurde auto's. De ANPR-camera's in La Savina registreren je kenteken en de boete loopt op van
              €1.000 tot €10.000.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Heb ik een formentera.eco-vergunning nodig als ik op het eiland huur?</h3>
            <p className="text-gray-700 leading-relaxed">
              Nee. Huur je rechtstreeks bij een lokaal verhuurbedrijf in La Savina, dan hoef je zelf geen vergunning aan
              te vragen en geen milieuheffing te betalen. Lokale huurauto's vallen onder een eilandquotum van 2.268
              voertuigen; de verhuurder regelt de registratie en de kosten zitten al in je huurprijs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Hoeveel kost de veerboot met auto?</h3>
            <p className="text-gray-700 leading-relaxed">
              Met je eigen particuliere auto (geen huurauto) kost een basisticket voor 2 volwassenen en 1 auto minimaal
              zo'n €37 enkele reis, oplopend tot €123 à €135 in het hoogseizoen. Het autovervoer wordt verzorgd door
              Baleària en Trasmapi; de boarding voor voertuigen sluit 90 minuten voor vertrek.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Welke auto kan ik het beste huren op Formentera?</h3>
            <p className="text-gray-700 leading-relaxed">
              Een zo klein mogelijk model, zoals een Fiat Panda of Citroën C3. De wegen zijn smal en omzoomd met stenen
              muren en de parkeerplekken zijn krap; grote auto's en SUV's zijn onpraktisch en verhogen het risico op
              schade aanzienlijk.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Hoe kom ik bij het strand Ses Illetes?</h3>
            <p className="text-gray-700 leading-relaxed">
              Ses Illetes ligt in het natuurgebied ses Salines en kent een limiet van 384 auto's per dag (beheer door
              IBIFOR, 10 mei–15 oktober). De tol is €5 tot €7 per auto afhankelijk van de periode (elektrisch gratis,
              hybride 50% korting). Omdat de parkeerplaats vaak al tussen 10:00 en 11:00 uur vol is, kun je ook buslijn L3
              vanaf La Savina nemen.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Is er genoeg parkeergelegenheid op Formentera?</h3>
            <p className="text-gray-700 leading-relaxed">
              Parkeren is goed geregeld maar schaars in de zomer. In de dorpen geldt van mei tot oktober de blauwe zone
              (€1,20/uur, gratis tussen 14:00 en 16:00). Bij Cala Saona zijn er slechts 60 plaatsen (kom vóór 09:30),
              terwijl Migjorn ruime gratis parkeerruimte heeft. Bij de haven van La Savina kun je gratis parkeren op een
              overloopterrein op 700 m afstand (max 5 dagen).
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default AutoHurenFormentera;
