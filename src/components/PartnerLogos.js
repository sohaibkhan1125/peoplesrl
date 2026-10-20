import React from 'react';

const partners = [
  'DHL Express', 'BRT Corriere', 'GLS Italy', 'SDA Express', 'Poste Italiane',
  'TNT Italia', 'Fercam', 'Arcese', 'Italsempione', 'Bartolini',
];

const PartnerLogos = () => {
  return (
    <section className="py-14 border-y border-white/[0.05] bg-navy-900/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <p className="text-center text-xs font-semibold text-steel-500 uppercase tracking-widest mb-8">
          Rete di vettori partner in Italia
        </p>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy-900/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy-900/80 to-transparent z-10 pointer-events-none" />
          <div className="flex gap-10 items-center" style={{ animation: 'marqueeScroll 28s linear infinite', width: 'max-content' }}>
            {[...partners, ...partners].map((name, i) => (
              <div key={i} className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-sky-400/30 transition-colors cursor-default whitespace-nowrap">
                <div className="w-2 h-2 rounded-full bg-sky-400/50" />
                <span className="text-sm font-semibold text-steel-400 hover:text-steel-200 transition-colors">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default PartnerLogos;
