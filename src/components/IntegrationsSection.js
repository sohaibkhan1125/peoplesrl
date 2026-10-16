import React from 'react';
import { Plug, RefreshCw, Lock, Zap } from 'lucide-react';

const integrations = [
  { name: 'SAP TM', category: 'TMS', icon: '⬡' },
  { name: 'Oracle GTM', category: 'TMS', icon: '◈' },
  { name: 'MercuryGate', category: 'TMS', icon: '◆' },
  { name: 'Freight Quote', category: 'Quoting', icon: '◉' },
  { name: 'McLeod', category: 'Carrier', icon: '▣' },
  { name: 'EDI 204/214', category: 'EDI', icon: '⬟' },
  { name: 'Quickbooks', category: 'Finance', icon: '◼' },
  { name: 'NetSuite', category: 'ERP', icon: '◧' },
  { name: 'Shopify', category: 'eComm', icon: '◪' },
  { name: 'Salesforce', category: 'CRM', icon: '◦' },
  { name: 'project44', category: 'Visibility', icon: '◈' },
  { name: 'FourKites', category: 'Visibility', icon: '◉' },
];

const features = [
  {
    icon: Plug,
    title: 'Pre-Built Connectors',
    desc: 'Connect to your TMS, ERP, or WMS in hours, not months. We maintain 40+ native integrations.',
  },
  {
    icon: RefreshCw,
    title: 'Two-Way Data Sync',
    desc: 'Load data, rates, tracking events, and PODs sync back into your system of record automatically.',
  },
  {
    icon: Lock,
    title: 'Secure & Compliant',
    desc: 'SOC 2 Type II certified. Data in transit and at rest is encrypted. Role-based access controls standard.',
  },
  {
    icon: Zap,
    title: 'REST & EDI API',
    desc: 'Full REST API and EDI 204/214/210 support for custom integrations with your own tech stack.',
  },
];

const IntegrationsSection = () => {
  return (
    <section id="integrations" className="py-24 relative bg-navy-900/50 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-15" />
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-amber-brand/6 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-amber-brand uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-amber-brand/10 border border-amber-brand/20">
            Integrations
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
            Works With Your
            <span className="text-gradient"> Existing Stack</span>
          </h2>
          <p className="text-steel-400 max-w-lg mx-auto text-base leading-relaxed">
            Don't replace your tools — enhance them. HaulX plugs directly into your workflow.
          </p>
        </div>

        {/* Integration logos grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 mb-16">
          {integrations.map((intg, i) => (
            <div
              key={i}
              className="card-hover glass rounded-xl p-4 border border-white/[0.07] flex flex-col items-center gap-2 text-center cursor-default"
            >
              <span className="text-2xl text-amber-brand/70">{intg.icon}</span>
              <div className="text-xs font-bold text-white">{intg.name}</div>
              <div className="text-[10px] text-steel-600 font-mono uppercase">{intg.category}</div>
            </div>
          ))}
        </div>

        <div className="section-divider mb-16" />

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="flex flex-col gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-brand/10 border border-amber-brand/25 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-amber-brand" strokeWidth={1.8} />
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
