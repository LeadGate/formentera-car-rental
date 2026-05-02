import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "La Savina Port Pickup Guide", path: "/la-savina-port-pickup-guide" },
  { label: "Electric Cars In Formentera", path: "/electric-cars-in-formentera" },
  { label: "Driving Tips", path: "/driving-in-formentera" },
  { label: "Beaches", path: "/formentera-beaches-by-car" },
  { label: "FAQ", path: "/formentera-car-rental-faq" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container-wide flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-bold text-primary">
          Formentera Car Rental
        </Link>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-secondary ${
                  location.pathname === item.path
                    ? "text-primary bg-secondary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="lg:hidden fixed inset-0 top-16 z-40 bg-background">
          <ul className="flex flex-col p-6 gap-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-md text-base font-medium transition-colors hover:bg-secondary ${
                    location.pathname === item.path
                      ? "text-primary bg-secondary"
                      : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
