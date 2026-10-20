import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';

const MidCtaBanner = ({ onGetQuote }) => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-400/20 to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-sky-400/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-sky-400/5 blur-[80px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <span className="inline-block text-xs font-semibold text-sky-400 uppercase tracking-widest mb-5 px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/20">
          Pronto a Spedire?
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
          Smetti di Pagare Troppo per la Logistica.
          <br />
          <span className="text-gradient">Affidati a People SRL.</span>
        </h2>
        <p className="text-steel-400 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Oltre 2.000 aziende italiane hanno scelto People SRL e ridotto i costi di spedizione
          in media del 23% nei primi 90 giorni.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={onGetQuote}
            className="btn-brand inline-flex items-center gap-2.5 px-9 py-4 rounded-full text-base font-bold"
          >
            Richiedi Preventivo Gratuito
            <ArrowRight className="w-5 h-5" />
          </button>
          <a
            href="tel:0521065541"
            className="btn-ghost inline-flex items-center gap-2.5 px-9 py-4 rounded-full text-base font-semibold"
          >
            <PhoneCall className="w-5 h-5" />
            0521.065541
          </a>
        </div>

        <p className="mt-6 text-xs text-steel-600">
          Nessun impegno · Calcolo immediato · Annulla in qualsiasi momento
        </p>
      </div>
    </section>
  );
};

export default MidCtaBanner;
