import React from 'react';
import { Headphones, Shield, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: Headphones,
    title: 'Referenti Dedicati',
    desc: 'Ogni cliente ha un referente logistico nominato — una persona reale che conosce le tue rotte, le tue merci e le tue priorità.',
  },
  {
    icon: Shield,
    title: 'Assicurazione Merci Inclusa',
    desc: 'Tutte le spedizioni sono coperte fino a €100.000 come standard. Copertura estesa disponibile per merci di alto valore.',
  },
  {
    icon: Clock,
    title: 'Operatività 24 / 7',
    desc: 'Il nostro team operativo è attivo tutto il giorno. Problemi di ritiro, ritardi, emergenze — siamo sempre disponibili.',
  },
  {
    icon: Users,
    title: 'Rete di Vettori Verificati',
    desc: 'Ogni vettore supera un audit in 47 punti: autorizzazioni, assicurazioni, punteggi di sicurezza e storico consegne.',
  },
];

const ExpertsSection = () => {
  return (
    <section id="about" className="py-24 relative bg-navy-900/60">
      <div className="absolute inset-0 dot-grid opacity-15" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Visual dashboard */}
          <div className="relative">
            <div className="glass rounded-2xl p-8 border border-white/[0.08] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-sky-400/10 rounded-full blur-[60px] pointer-events-none" />
              <div className="relative">
                <div className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest mb-6">
                  PANNELLO OPERATIVO
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: 'Spedizioni Attive', value: '1.847', trend: '+12%', up: true },
                    { label: 'Vettori Online',    value: '482',   trend: '+4',   up: true },
                    { label: 'Tariffa Media/km',  value: '€1.80', trend: '-8%',  up: false },
                    { label: 'Eccezioni',         value: '3',     trend: 'bassa',up: true },
                  ].map((item, i) => (
                    <div key={i} className="bg-black/30 rounded-xl p-4 border border-white/[0.05]">
                      <div className="text-xs text-steel-500 mb-1">{item.label}</div>
                      <div className="text-2xl font-extrabold text-white">{item.value}</div>
                      <div className={`text-xs font-mono mt-1 ${item.up ? 'text-emerald-400' : 'text-red-400'}`}>
                        {item.trend}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-2.5">
                  <div className="text-xs font-mono text-steel-500 uppercase tracking-wider mb-3">Attività Recenti</div>
                  {[
                    { text: 'PS-4821 partito da Milano',          time: '2m fa',  dot: 'bg-sky-400' },
                    { text: 'Vettore assegnato a PS-4825',        time: '7m fa',  dot: 'bg-blue-400' },
                    { text: 'PS-4818 consegnato — POD acquisito', time: '14m fa', dot: 'bg-emerald-400' },
                    { text: 'Nuova spedizione PS-4826 accettata', time: '21m fa', dot: 'bg-sky-400' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${item.dot}`} />
                      <span className="text-steel-300 flex-1">{item.text}</span>
                      <span className="text-xs text-steel-600 font-mono flex-shrink-0">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <span className="inline-block text-xs font-semibold text-sky-400 uppercase tracking-widest mb-5 px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/20">
              Perché People SRL
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              Tecnologia Supportata da
              <span className="text-gradient"> Persone Reali</span>
            </h2>
            <p className="text-steel-400 text-base leading-relaxed mb-10">
              Abbiamo costruito la piattaforma — ma non abbiamo mai dimenticato che la logistica
              è un business fatto di persone. People SRL unisce la velocità dell'automazione
              con l'esperienza di professionisti del settore.
            </p>
            <div className="flex flex-col gap-6">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} className="flex items-start gap-5">
                    <div className="w-11 h-11 rounded-xl bg-sky-400/10 border border-sky-400/25 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-sky-400" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-1.5">{f.title}</h4>
                      <p className="text-sm text-steel-400 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
