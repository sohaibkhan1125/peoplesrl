import React from 'react';
import { Plug, RefreshCw, Lock, Zap } from 'lucide-react';

const integrations = [
  { name: 'SAP TM',        category: 'TMS',        icon: '⬡' },
  { name: 'Oracle GTM',    category: 'TMS',        icon: '◈' },
  { name: 'MercuryGate',   category: 'TMS',        icon: '◆' },
  { name: 'Freight Quote', category: 'Preventivi', icon: '◉' },
  { name: 'McLeod',        category: 'Vettori',    icon: '▣' },
  { name: 'EDI 204/214',   category: 'EDI',        icon: '⬟' },
  { name: 'Quickbooks',    category: 'Finanza',    icon: '◼' },
  { name: 'NetSuite',      category: 'ERP',        icon: '◧' },
  { name: 'Shopify',       category: 'eComm',      icon: '◪' },
  { name: 'Salesforce',    category: 'CRM',        icon: '◦' },
  { name: 'project44',     category: 'Visibilità', icon: '◈' },
  { name: 'FourKites',     category: 'Visibilità', icon: '◉' },
];

const features = [
  { icon: Plug,       title: 'Connettori Pronti all\'Uso',  desc: 'Collegati al tuo TMS, ERP o WMS in poche ore. Manteniamo oltre 40 integrazioni native.' },
  { icon: RefreshCw,  title: 'Sincronizzazione Bidirezionale', desc: 'Dati carichi, tariffe, eventi di tracciamento e POD si sincronizzano automaticamente nel tuo sistema.' },
  { icon: Lock,       title: 'Sicuro e Conforme',           desc: 'Certificazione SOC 2 Tipo II. Dati cifrati in transito e a riposo. Controlli accesso basati su ruoli.' },
  { icon: Zap,        title: 'API REST & EDI',              desc: 'API REST completa e supporto EDI 204/214/210 per integrazioni personalizzate con il tuo stack tecnologico.' },
];

const IntegrationsSection = () => {
  return (
    <section id="integrations" className="py-24 relative bg-navy-900/50 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-15" />
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-sky-400/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-sky-400 uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/20">
            Integrazioni
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
            Compatibile con il Tuo
            <span className="text-gradient"> Stack Esistente</span>
          </h2>
          <p className="text-steel-400 max-w-lg mx-auto text-base leading-relaxed">
            Non sostituire i tuoi strumenti — potenziamoli. People SRL si integra direttamente nel tuo flusso di lavoro.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 mb-16">
          {integrations.map((intg, i) => (
            <div key={i} className="card-hover glass rounded-xl p-4 border border-white/[0.07] flex flex-col items-center gap-2 text-center cursor-default">
              <span className="text-2xl text-sky-400/70">{intg.icon}</span>
              <div className="text-xs font-bold text-white">{intg.name}</div>
              <div className="text-[10px] text-steel-600 font-mono uppercase">{intg.category}</div>
            </div>
          ))}
        </div>

        <div className="section-divider mb-16" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="flex flex-col gap-4">
                <div className="w-11 h-11 rounded-xl bg-sky-400/10 border border-sky-400/25 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-sky-400" strokeWidth={1.8} />
                </div>
                <h4 className="text-base font-bold text-white">{f.title}</h4>
                <p className="text-sm text-steel-400 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default IntegrationsSection;
