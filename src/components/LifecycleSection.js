import React, { useState } from 'react';
import { ClipboardList, Search, Truck, Eye, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: ClipboardList,
    title: 'Submit Your Shipment',
    desc: 'Enter your origin, destination, freight type, and weight. Our system processes your request in seconds — no phone tag, no waiting.',
    detail: 'Available via web portal, mobile app, or API integration with your existing TMS.',
  },
  {
    step: '02',
    icon: Search,
    title: 'We Match Your Carrier',
    desc: 'Our matching engine scans 500+ vetted carriers in real-time, selecting the best fit based on lane, rating, equipment, and price.',
    detail: 'Average match time under 90 seconds with automatic tender and acceptance.',
  },
  {
    step: '03',
    icon: Truck,
    title: 'Pickup & Dispatch',
    desc: 'Carrier is dispatched with full load details. Driver tracking goes live the moment they accept. Guaranteed pickup or we find a backup.',
    detail: 'Auto-notifications sent to all parties at pickup confirmation.',
  },
  {
    step: '04',
    icon: Eye,
    title: 'Real-Time Visibility',
    desc: 'Track your freight mile by mile on a live map. Get proactive delay alerts, weather notifications, and ETA updates.',
    detail: 'GPS pings every 5 minutes with exception management baked in.',
  },
  {
    step: '05',
    icon: CheckCircle,
    title: 'Delivered & Settled',
    desc: 'Delivery confirmation with POD capture. Invoicing and carrier settlement happen automatically within 24 hours.',
    detail: 'Digital POD, automated freight audit, and consolidated billing.',
  },
];

const LifecycleSection = ({ onGetQuote }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-24 relative bg-navy-900/50">
      <div className="absolute inset-0 dot-grid opacity-15" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-amber-brand uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-amber-brand/10 border border-amber-brand/20">
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
            Ship Freight in
            <span className="text-gradient"> 5 Steps</span>
          </h2>
          <p className="text-steel-400 max-w-lg mx-auto text-base leading-relaxed">
            From quote to delivery, the entire process is streamlined into a simple, transparent workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Step list */}
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
                      ? 'bg-amber-brand/10 border-amber-brand/40 shadow-[0_0_20px_rgba(245,158,11,0.1)]'
                      : 'bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                      isActive ? 'bg-amber-brand text-navy-950' : 'bg-white/[0.05] text-steel-400'
                    }`}>
                      <Icon className="w-5 h-5" strokeWidth={2} />
                    </div>
                    <div>
                      <div className={`text-[11px] font-mono font-bold mb-0.5 ${isActive ? 'text-amber-brand' : 'text-steel-500'}`}>
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

          {/* Step detail */}
          <div className="lg:col-span-7">
            <div className="glass rounded-2xl p-8 border border-white/[0.08] h-full min-h-[280px]">
              {(() => {
                const s = steps[activeStep];
                const Icon = s.icon;
                return (
                  <div className="fade-slide-up" key={activeStep}>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-amber-brand/15 border border-amber-brand/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-amber-brand" strokeWidth={1.8} />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-amber-brand/70 font-bold">STEP {s.step}</span>
                        <h3 className="text-2xl font-extrabold text-white mt-1">{s.title}</h3>
                      </div>
                    </div>
                    <p className="text-steel-300 leading-relaxed text-base mb-6">{s.desc}</p>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-steel-400 leading-relaxed">{s.detail}</p>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-amber-brand cursor-pointer hover:text-amber-light transition-colors group">
                      <span>Learn more about this step</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onGetQuote}
            className="btn-amber inline-flex items-center gap-2.5 px-10 py-4 rounded-full text-base font-bold"
          >
            Start Shipping Today
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default LifecycleSection;
