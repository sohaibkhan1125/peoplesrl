import React, { useEffect, useRef, useState } from 'react';
import { DollarSign, Clock, TrendingDown, BarChart2 } from 'lucide-react';

const benefits = [
  { icon: DollarSign, stat: '23%',  title: 'Riduzione Media dei Costi',       desc: 'Le aziende che passano a People SRL risparmiano in media il 23% sulla spesa logistica nel primo trimestre.', color: 'sky' },
  { icon: Clock,      stat: '4 ore', title: 'Accettazione Vettore più Rapida', desc: 'Dal posting del carico alla conferma del vettore — 4 ore in media contro le 14 ore del settore.', color: 'blue' },
  { icon: TrendingDown, stat: '67%', title: 'Meno Eccezioni',                 desc: 'Il monitoraggio proattivo e il rerouting automatico riducono gli eventi eccezionali di oltre due terzi.', color: 'green' },
  { icon: BarChart2,  stat: '3x',    title: 'Migliore Visibilità',             desc: 'I clienti riportano una visibilità sulla merce 3 volte superiore rispetto al loro precedente sistema.', color: 'sky' },
];

const colorMap = {
  sky:   { bg: 'bg-sky-500/10',     border: 'border-sky-500/25',     text: 'text-sky-400',     bar: 'bg-sky-400' },
  blue:  { bg: 'bg-blue-500/10',    border: 'border-blue-500/25',    text: 'text-blue-400',    bar: 'bg-blue-400' },
  green: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/25', text: 'text-emerald-400', bar: 'bg-emerald-400' },
};

const testimonials = [
  {
    quote: "Siamo passati a People SRL 8 mesi fa. Il nostro costo per km è sceso da €2,20 a €1,70. La visibilità da sola vale tutto.",
    name: "Marco T.",
    role: "Direttore Logistica, RetailBrand Italia",
    rating: 5,
  },
  {
    quote: "Spediamo 200+ carichi al mese. People SRL gestisce tutto con due persone nel mio team invece di cinque. I numeri parlano da soli.",
    name: "Sandra L.",
    role: "VP Supply Chain, Alimenti del Nord SpA",
    rating: 5,
  },
  {
    quote: "Il tracciamento in tempo reale ci ha salvato da un grosso problema con un cliente. Sapevamo del ritardo prima dell'autista.",
    name: "Davide R.",
    role: "Responsabile Operazioni, Costruzioni Meridionali Srl",
    rating: 5,
  },
];

const RoiMetrics = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 relative bg-navy-950">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute left-0 top-0 w-96 h-96 bg-sky-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-sky-400 uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/20">
            Risultati Reali
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
            I Numeri
            <span className="text-gradient"> Parlano da Soli</span>
          </h2>
          <p className="text-steel-400 max-w-lg mx-auto text-base leading-relaxed">
            Non sono proiezioni. Sono medie calcolate su oltre 2.000 account aziendali attivi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {benefits.map((b, i) => {
            const c = colorMap[b.color] || colorMap.sky;
            const Icon = b.icon;
            return (
              <div
                key={i}
                className={`card-hover glass rounded-2xl p-6 border border-white/[0.07] flex flex-col gap-4 transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`w-11 h-11 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${c.text}`} strokeWidth={1.8} />
                </div>
                <div className={`text-5xl font-extrabold ${c.text}`} style={{ fontFamily: 'Oswald, sans-serif' }}>{b.stat}</div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-2">{b.title}</h4>
                  <p className="text-xs text-steel-400 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="section-divider mb-16" />
        <h3 className="text-center text-2xl font-extrabold text-white mb-10">Cosa Dicono i Nostri Clienti</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="card-hover glass rounded-2xl p-6 border border-white/[0.07] flex flex-col gap-4">
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-sky-400 text-sm">★</span>
                ))}
              </div>
              <p className="text-steel-300 text-sm leading-relaxed flex-1">"{t.quote}"</p>
              <div className="pt-3 border-t border-white/[0.06]">
                <div className="text-sm font-bold text-white">{t.name}</div>
                <div className="text-xs text-steel-500 mt-0.5">{t.role}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RoiMetrics;
