import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PartnerLogos from './components/PartnerLogos';
import FreightServices from './components/FreightServices';
import LifecycleSection from './components/LifecycleSection';
import NetworkCorridorMap from './components/NetworkCorridorMap';
import ExpertsSection from './components/ExpertsSection';
import AiResolutionSection from './components/AiResolutionSection';
import RoiMetrics from './components/RoiMetrics';
import IntegrationsSection from './components/IntegrationsSection';
import MidCtaBanner from './components/MidCtaBanner';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import BackToTop from './components/BackToTop';

function App() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  const openQuote = () => setQuoteOpen(true);
  const closeQuote = () => setQuoteOpen(false);

  return (
    <div className="min-h-screen bg-navy-950 text-steel-300 flex flex-col font-sans selection:bg-sky-400/20 selection:text-sky-400">

      <Navbar onGetQuote={openQuote} />

      <main className="flex-grow">
        <Hero onGetQuote={openQuote} />
        <PartnerLogos />
        <FreightServices onGetQuote={openQuote} />
        <LifecycleSection onGetQuote={openQuote} />
        <NetworkCorridorMap />
        <MidCtaBanner onGetQuote={openQuote} />
        <ExpertsSection />
        <AiResolutionSection onGetQuote={openQuote} />
        <RoiMetrics />
        <IntegrationsSection />
      </main>

      <Footer onGetQuote={openQuote} />

      <DemoModal isOpen={quoteOpen} onClose={closeQuote} />
      <BackToTop />
    </div>
  );
}

export default App;
