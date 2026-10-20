import React from 'react';
import { AlertTriangle, Navigation, CheckCircle, BarChart2, ArrowRight } from 'lucide-react';

const capabilities = [
  {
    icon: AlertTriangle,
    title: 'Gestione Proattiva delle Eccezioni',
    desc: 'Maltempo, ritardi degli autisti e chiusure dei magazzini vengono rilevati prima che diventino problemi. Avvisi automatici e suggerimenti di rerouting in tempo reale.',
    stat: '67% meno eccezioni',
    color: 'sky',
  },
  {
    icon: Navigation,
    title: 'Ottimizzazione Dinamica del Percorso',
    desc: 'Il motore monitora traffico, meteo e cantieri 24/7, suggerendo percorsi alternativi ottimali mantenendo gli impegni di consegna.',
    stat: 'Transiti 11% più veloci',
    color: 'blue',
  },
  {
    icon: CheckCircle,
    title: 'Conformità Vettori Automatizzata',
    desc: 'Ore di guida (HOS), scadenze assicurative e variazioni punteggi sicurezza sono monitorate continuamente. I carichi non vengono mai affidati a vettori non conformi.',
    stat: '100% affidamenti conformi',
    color: 'green',
  },
  {
    icon: BarChart2,
    title: 'Analytics dei Costi e Benchmark',
    desc: 'Report mensili e trimestrali con la spesa per rotta vs benchmark di mercato. Identifica subito le rotte dove stai pagando troppo.',
    stat: 'Media 23% di risparmio',
    color: 'sky',
  },
];

const colorMap = {
  sky:   { bg: 'bg-sky-500/10',     border: 'border-sky-500/25',     icon: 'text-sky-400',     stat: 'text-sky-400' },
  blue:  { bg: 'bg-blue-500/10',    border: 'border-blue-500/25',    icon: 'text-blue-400',    stat: 'text-blue-400' },
  green: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/25', icon: 'text-emerald-400', stat: 'text-emerald-400' },
};

const AiResolutionSection = ({ onGetQuote }) => {
  return (
    <section className="py-24 relative bg-navy-950">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">

          <div className="lg:col-span-5">
            <span className="inline-block text-xs font-semibold text-sky-400 uppercase tracking-widest mb-5 px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/20">
              Logistica Intelligente
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              Spedizioni che
              <span className="text-gradient"> Risolvono i Problemi</span>
              <br />Prima che Accadano
            </h2>
            <p className="text-steel-400 text-base leading-relaxed mb-8">
              Non ci limitiamo a trasportare la merce — la monitoriamo, ottimizziamo e proteggiamo
              dall'origine alla consegna. Mentre la tua spedizione è in viaggio, il nostro
              sistema lavora per te.
            </p>
            <button onClick={onGetQuote} className="btn-brand inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-bold">
              Scopri Come Funziona
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilities.map((cap, i) => {
              const c = colorMap[cap.color] || colorMap.sky;
              const Icon = cap.icon;
              return (
                <div key={i} className="card-hover glass rounded-2xl p-5 border border-white/[0.07] flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-5 h-5 ${c.icon}`} strokeWidth={1.8} />
                    </div>
                    <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full ${c.bg} ${c.stat} border ${c.border}`}>
                      {cap.stat}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-2">{cap.title}</h4>
                    <p className="text-xs text-steel-400 leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AiResolutionSection;
