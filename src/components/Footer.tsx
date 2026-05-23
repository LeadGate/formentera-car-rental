import { Link } from "react-router-dom";

const footerLinks = [
  { label: "La Savina Port Pickup Guide", path: "/la-savina-port-pickup-guide" },
  { label: "Electric Cars In Formentera", path: "/electric-cars-in-formentera" },
  { label: "Driving Tips", path: "/driving-in-formentera" },
  { label: "Beaches", path: "/formentera-beaches-by-car" },
  { label: "FAQ", path: "/formentera-car-rental-faq" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Privacy Policy", path: "/privacy" },
];

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container-wide py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <Link to="/" className="text-lg font-bold text-primary-foreground">
            Formentera Car Rental
          </Link>
          <p className="mt-3 text-primary-foreground/70 text-sm">
            Compare car rental deals and find the best rate for your trip.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Pages</h3>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <a
            href="mailto:info@formentera-car-rental.com"
            className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            info@formentera-car-rental.com
          </a>
          <h3 className="font-semibold mb-3 mt-6">Useful Resources</h3>
          <ul className="space-y-2">
                        <li>
              <a href="https://formentera.eco/en/information" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                formentera.eco — Vehicle Entry Authorisation
              </a>
            </li>
            <li>
              <a href="https://www.consellinsulardeformentera.cat/" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Consell Insular de Formentera
              </a>
            </li>
            <li>
              <a href="https://www.caib.es/sites/consumidor/es/" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Direcció General de Consum (Govern Balear)
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-primary-foreground/60 space-y-2">
        <p className="text-sm">
          Affiliate disclosure: This site contains links to car rental partners. We may earn a commission when you book through our partners at no extra cost to you.
        </p>
        <p className="text-xs">Last updated: 2026-05-02</p>
        <p className="text-sm">&copy; {new Date().getFullYear()} formentera-car-rental.com · All rights reserved</p>
      </div>
    </div>
  </footer>
);

export default Footer;
