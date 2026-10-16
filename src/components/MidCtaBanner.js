import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';

const MidCtaBanner = ({ onGetQuote }) => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-brand/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-brand/20 to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-amber-brand/8 blur-[120px] pointer-events-none" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-amber-brand/5 blur-[80px] pointer-events-none" />

      {/* Decorative road dashes */}
      <div className="absolute inset-x-0 top-1/2 h-px overflow-hidden pointer-events-none">
        <div className="flex gap-8 items-center w-full opacity-10">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="h-0.5 w-16 bg-amber-brand flex-shrink-0 road-line" style={{ animationDelay: `${i * 0.15}s` }} />
          ))}
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <span className="inline-block text-xs font-semibold text-amber-brand uppercase tracking-widest mb-5 px-3 py-1 rounded-full bg-amber-brand/10 border border-amber-brand/20">
          Ready to Ship?
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
          Stop Overpaying for Freight.
          <br />
          <span className="text-gradient">Let HaulX Handle It.</span>
        </h2>
        <p className="text-steel-400 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Join 2,000+ shippers who moved to HaulX and reduced their freight spend by an average of 23% in the first 90 days.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={onGetQuote}
            className="btn-amber inline-flex items-center gap-2.5 px-9 py-4 rounded-full text-base font-bold"
          >
            Get Your Free Quote
            <ArrowRight className="w-5 h-5" />
          </button>
          <a
            href="tel:+18005550192"
            className="btn-ghost inline-flex items-center gap-2.5 px-9 py-4 rounded-full text-base font-semibold"
          >
            <PhoneCall className="w-5 h-5" />
            Call 1-800-HAULX
          </a>
        </div>

        <p className="mt-6 text-xs text-steel-600">
          No credit card required · Instant rate calculation · Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default MidCtaBanner;
