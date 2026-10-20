import React from 'react';
import { Package, Thermometer, Layers, Anchor, Zap, Globe, PlaneTakeoff, Ship } from 'lucide-react';

const services = [
  {
    icon: Package,
    title: 'Trasporto Completo (FTL)',
    desc: 'Camion dedicati per grandi spedizioni con consegna diretta punto a punto, senza fermate intermedie.',
    tags: ['Furgoni', 'Semirimorchi', 'Drop & Hook'],
    color: 'blue',
  },
  {
    icon: Layers,
    title: 'Groupage (LTL)',
    desc: 'Condividi lo spazio del camion con altri spedizionieri e riduci i costi per carichi che non riempiono un intero mezzo.',
    tags: ['Tariffe a Pallet', 'Porta a Porta', 'Assicurato'],
    color: 'sky',
  },
  {
    icon: Thermometer,
    title: 'Trasporto Refrigerato',
    desc: 'Trasporto a temperatura controllata per prodotti deperibili, farmaceutici e merci sensibili.',
    tags: ['0°C – 8°C', 'Alimentare', 'Certificato ATP'],
    color: 'cyan',
  },
  {
    icon: Zap,
    title: 'Spedizioni Urgenti',
    desc: 'Carichi time-critical con ritiro garantito in giornata o il giorno successivo su corsie dedicate.',
    tags: ['Dispacciamento 24/7', 'Ordini Express', 'GPS Live'],
    color: 'blue',
  },
  {
    icon: PlaneTakeoff,
    title: 'Trasporto Aereo',
    desc: 'Spedizioni aeree per merci urgenti o di alto valore verso destinazioni nazionali e internazionali. Gestione completa dogana e documentazione.',
    tags: ['Express & Standard', 'Door-to-Door', 'Sdoganamento'],
    color: 'violet',
  },
  {
    icon: Ship,
    title: 'Trasporto Marittimo',
    desc: 'Soluzioni via mare per carichi FCL e LCL verso i principali porti italiani ed europei. Ideale per grandi volumi e merci non urgenti.',
    tags: ['FCL & LCL', 'Porti Italiani', 'Export/Import'],
    color: 'teal',
  },
  {
    icon: Anchor,
    title: 'Trasporti Speciali',
    desc: 'Merci eccezionali, sovradimensionate o di peso elevato che richiedono pianali aperti e attrezzature speciali.',
    tags: ['Permessi Pronti', 'Sovradimensionato', 'Scorte'],
    color: 'indigo',
  },
  {
    icon: Globe,
    title: 'Intermodale',
    desc: 'Combinazione ferrovia + camion per tratte lunghe efficienti, riducendo le emissioni senza sacrificare i tempi.',
    tags: ['Ferroviario', 'Eco-Sostenibile', 'Lungo Raggio'],
    color: 'green',
  },
];
    title: 'Trasporto Refrigerato',
    desc: 'Trasporto a temperatura controllata per prodotti deperibili, farmaceutici e merci sensibili.',
    tags: ['0°C – 8°C', 'Alimentare', 'Certificato ATP'],
    color: 'cyan',
  },
  {
    icon: Zap,
    title: 'Spedizioni Urgenti',
    desc: 'Carichi time-critical con ritiro garantito in giornata o il giorno successivo su corsie dedicate.',
    tags: ['Dispacciamento 24/7', 'Ordini Express', 'GPS Live'],
    color: 'blue',
  },
  {
    icon: Anchor,
    title: 'Trasporti Speciali',
    desc: 'Merci eccezionali, sovradimensionate o di peso elevato che richiedono pianali aperti e attrezzature speciali.',
    tags: ['Permessi Pronti', 'Sovradimensionato', 'Scorte'],
    color: 'indigo',
  },
  {
    icon: Globe,
    title: 'Intermodale',
    desc: 'Combinazione ferrovia + camion per tratte lunghe efficienti, riducendo le emissioni senza sacrificare i tempi.',
    tags: ['Ferroviario', 'Eco-Sostenibile', 'Lungo Raggio'],
    color: 'green',
  },
];

const colorMap = {
  blue:   { bg: 'bg-blue-500/10',    border: 'border-blue-500/25',    icon: 'text-blue-400',    tag: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
  sky:    { bg: 'bg-sky-500/10',     border: 'border-sky-500/25',     icon: 'text-sky-400',     tag: 'bg-sky-500/10 text-sky-400 border-sky-500/20' },
  cyan:   { bg: 'bg-cyan-500/10',    border: 'border-cyan-500/25',    icon: 'text-cyan-400',    tag: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' },
  indigo: { bg: 'bg-indigo-500/10',  border: 'border-indigo-500/25',  icon: 'text-indigo-400',  tag: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' },
  violet: { bg: 'bg-violet-500/10',  border: 'border-violet-500/25',  icon: 'text-violet-400',  tag: 'bg-violet-500/10 text-violet-400 border-violet-500/20' },
  teal:   { bg: 'bg-teal-500/10',    border: 'border-teal-500/25',    icon: 'text-teal-400',    tag: 'bg-teal-500/10 text-teal-400 border-teal-500/20' },
  green:  { bg: 'bg-emerald-500/10', border: 'border-emerald-500/25', icon: 'text-emerald-400', tag: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
};

const FreightServices = ({ onGetQuote }) => {
  return (
    <section id="services" className="py-24 relative bg-navy-950">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-sky-400 uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/20">
            I Nostri Servizi
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
            Ogni Modalità di Trasporto,
            <br /><span className="text-gradient">Un'Unica Piattaforma</span>
          </h2>
          <p className="text-steel-400 max-w-xl mx-auto text-base leading-relaxed">
            Dal singolo pallet al trasporto eccezionale — People SRL gestisce tutto con
            un unico accesso, una sola fattura e visibilità in tempo reale.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => {
            const c = colorMap[svc.color] || colorMap.sky;
            const Icon = svc.icon;
            return (
              <div key={i} className="card-hover glass rounded-2xl p-6 border border-white/[0.07] flex flex-col gap-4 cursor-default">
                <div className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${c.icon}`} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{svc.title}</h3>
                  <p className="text-sm text-steel-400 leading-relaxed">{svc.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {svc.tags.map((tag, j) => (
                    <span key={j} className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${c.tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <button onClick={onGetQuote} className="btn-brand inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-bold">
            Richiedi Preventivo Gratuito
            <span className="font-mono text-sm">→</span>
          </button>
          <p className="mt-3 text-xs text-steel-500">Nessun impegno. Preventivo in meno di 60 secondi.</p>
        </div>
      </div>
    </section>
  );
};

export default FreightServices;
