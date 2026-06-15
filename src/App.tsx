/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Transformation from './components/Transformation';
import Solutions from './components/Solutions';
import UseCases from './components/UseCases';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import LeadsForm from './components/LeadsForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <StickyCTA />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BusinessService",
          "name": "RAWR | Automatisation IA",
          "description": "Solutions d'automatisation par intelligence artificielle pour cliniques esthétiques et salons de beauté en France.",
          "provider": {
            "@type": "LocalBusiness",
            "name": "RAWR Agent",
            "email": "contact@rawragent.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Paris",
              "addressCountry": "FR"
            }
          },
          "areaServed": "France",
          "serviceType": ["Automatisation IA", "Marketing WhatsApp", "Gestion de réputation"]
        })}
      </script>
      <main>
        <Hero />
        <PainPoints />
        <Transformation />
        <Solutions />
        <UseCases />
        <Benefits />
        <Testimonials />
        <Process />
        <LeadsForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

