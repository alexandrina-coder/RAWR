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

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
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

