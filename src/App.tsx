import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import Index from "./pages/Index";

const LaSavinaPortPickupGuide = lazy(() => import("./pages/LaSavinaPortPickupGuide"));
const ElectricCarsInFormentera = lazy(() => import("./pages/ElectricCarsInFormentera"));
const DrivingGuide = lazy(() => import("./pages/DrivingGuide"));
const BeachGuide = lazy(() => import("./pages/BeachGuide"));
const FAQ = lazy(() => import("./pages/FAQ"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center"><div className="text-muted-foreground">Loading...</div></div>}>
      <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/la-savina-port-pickup-guide" element={<LaSavinaPortPickupGuide />} />
            <Route path="/electric-cars-in-formentera" element={<ElectricCarsInFormentera />} />
            <Route path="/driving-in-formentera" element={<DrivingGuide />} />
            <Route path="/formentera-beaches-by-car" element={<BeachGuide />} />
            <Route path="/formentera-car-rental-faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
