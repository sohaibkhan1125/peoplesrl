import React, { useState } from 'react';
import { ClipboardList, Search, Truck, Eye, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: ClipboardList,
    title: 'Invia la Tua Spedizione',
    desc: 'Inserisci origine, destinazione, tipo di merce e peso. Il sistema elabora la richiesta in pochi secondi — senza telefonate, senza attese.',
    detail: 'Disponibile via portale web, app mobile o integrazione API con il tuo TMS esistente.',
  },
  {
    step: '02',
    icon: Search,
    title: 'Troviamo il Vettore',
    desc: 'Il nostro motore di matching analizza 500+ vettori certificati in tempo reale, selezionando il migliore per rotta, valutazione, mezzo e prezzo.',
    detail: 'Tempo medio di matching inferiore a 90 secondi con affidamento e accettazione automatici.',
  },
  {
    step: '03',
    icon: Truck,
    title: 'Ritiro e Dispacciamento',
    desc: 'Il vettore viene dispatchato con tutti i dettagli del carico. Il tracciamento GPS inizia nel momento in cui accetta. Ritiro garantito o troviamo un sostituto.',
    detail: 'Notifiche automatiche a tutte le parti alla conferma del ritiro.',
  },
  {
    step: '04',
    icon: Eye,
    title: 'Visibilità in Tempo Reale',
    desc: 'Traccia la tua merce chilometro per chilometro su una mappa live. Ricevi avvisi proattivi su ritardi, maltempo e aggiornamenti ETA.',
    detail: 'Ping GPS ogni 5 minuti con gestione delle eccezioni integrata.',
  },
  {
    step: '05',
    icon: CheckCircle,
    title: 'Consegnato e Liquidato',
    desc: 'Conferma di consegna con acquisizione POD digitale. Fatturazione e liquidazione del vettore avvengono automaticamente entro 24 ore.',
    detail: 'POD digitale, audit merci automatizzato e fatturazione consolidata.',
  },
];

const LifecycleSection = ({ onGetQuote }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-24 relative bg-navy-900/50">
      <div className="absolute inset-0 dot-grid opacity-15" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-sky-400 uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/20">
            Come Funziona
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
            Spedisci in
            <span className="text-gradient"> 5 Passi</span>
          </h2>
          <p className="text-steel-400 max-w-lg mx-auto text-base leading-relaxed">
            Dal preventivo alla consegna, l'intero processo è semplice, trasparente ed efficiente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 flex flex-col gap-3">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const isActive = i === activeStep;
              return (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`text-left w-full px-5 py-4 rounded-xl border transition-all duration-300 ${
                    isActive
                      ? 'bg-sky-400/10 border-sky-400/40 shadow-[0_0_20px_rgba(56,189,248,0.1)]'
                      : 'bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                      isActive ? 'bg-sky-400 text-navy-950' : 'bg-white/[0.05] text-steel-400'
                    }`}>
                      <Icon className="w-5 h-5" strokeWidth={2} />
                    </div>
                    <div>
                      <div className={`text-[11px] font-mono font-bold mb-0.5 ${isActive ? 'text-sky-400' : 'text-steel-500'}`}>
                        STEP {s.step}
                      </div>
                      <div className={`text-sm font-bold transition-colors ${isActive ? 'text-white' : 'text-steel-300'}`}>
                        {s.title}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7">
            <div className="glass rounded-2xl p-8 border border-white/[0.08] min-h-[280px]">
              {(() => {
                const s = steps[activeStep];
                const Icon = s.icon;
                return (
                  <div className="fade-slide-up" key={activeStep}>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-sky-400/15 border border-sky-400/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-sky-400" strokeWidth={1.8} />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-sky-400/70 font-bold">STEP {s.step}</span>
                        <h3 className="text-2xl font-extrabold text-white mt-1">{s.title}</h3>
                      </div>
                    </div>
                    <p className="text-steel-300 leading-relaxed text-base mb-6">{s.desc}</p>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-steel-400 leading-relaxed">{s.detail}</p>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-sky-400 cursor-pointer hover:text-sky-300 transition-colors group">
                      <span>Scopri di più su questo step</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>

        <div className="mt-14 text-center">
          <button onClick={onGetQuote} className="btn-brand inline-flex items-center gap-2.5 px-10 py-4 rounded-full text-base font-bold">
            Inizia a Spedire Oggi
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LifecycleSection;
