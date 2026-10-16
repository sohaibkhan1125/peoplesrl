import React from 'react';
import { AlertTriangle, Navigation, CheckCircle, BarChart2, ArrowRight } from 'lucide-react';

const capabilities = [
  {
    icon: AlertTriangle,
    title: 'Proactive Exception Management',
    desc: 'Weather events, driver delays, and dock closures are detected before they become problems. Automated alerts and reroute suggestions go out in real time.',
    stat: '67% fewer exceptions',
    color: 'amber',
  },
  {
    icon: Navigation,
    title: 'Dynamic Route Optimization',
    desc: 'Our engine monitors traffic, weather, and construction 24/7, suggesting optimal alternate routes while keeping your ETA commitments intact.',
    stat: '11% faster transits',
    color: 'blue',
  },
  {
    icon: CheckCircle,
    title: 'Automated Carrier Compliance',
    desc: 'Driver HOS, carrier insurance expiry, and CSA score changes are monitored continuously. Loads are never tendered to out-of-compliance carriers.',
    stat: '100% compliant tenders',
    color: 'green',
  },
  {
    icon: BarChart2,
    title: 'Spend Analytics & Benchmarking',
    desc: 'Monthly and quarterly reports showing your lane-level spend vs. market benchmarks. Identify overpaying lanes and take action immediately.',
    stat: '23% avg savings',
    color: 'amber',
  },
];

const colorMap = {
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/25', icon: 'text-amber-brand', stat: 'text-amber-brand' },
  blue:  { bg: 'bg-blue-500/10',  border: 'border-blue-500/25',  icon: 'text-blue-400',  stat: 'text-blue-400' },
  green: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/25', icon: 'text-emerald-400', stat: 'text-emerald-400' },
};

const AiResolutionSection = ({ onGetQuote }) => {
  return (
    <section className="py-24 relative bg-navy-950">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-brand/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">

          {/* Left content */}
          <div className="lg:col-span-5">
            <span className="inline-block text-xs font-semibold text-amber-brand uppercase tracking-widest mb-5 px-3 py-1 rounded-full bg-amber-brand/10 border border-amber-brand/20">
              Smart Freight
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              Freight That
              <span className="text-gradient"> Solves Problems</span>
              <br />Before They Start
            </h2>
            <p className="text-steel-400 text-base leading-relaxed mb-8">
              We don't just move freight — we monitor, optimize, and protect it from origin to delivery.
              While your shipment is on the road, our system is working the angles.
            </p>
            <button
              onClick={onGetQuote}
              className="btn-amber inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-bold"
            >
              See It in Action
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right: capability cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilities.map((cap, i) => {
              const c = colorMap[cap.color] || colorMap.amber;
              const Icon = cap.icon;
              return (
                <div
                  key={i}
                  className="card-hover glass rounded-2xl p-5 border border-white/[0.07] flex flex-col gap-4"
                >
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
