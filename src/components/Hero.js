import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Clock, Shield, TrendingUp, Truck } from 'lucide-react';


const liveShipments = [
  { id: 'HX-4821', from: 'Chicago, IL', to: 'Dallas, TX', status: 'In Transit', eta: '14h 30m', progress: 62 },
  { id: 'HX-4819', from: 'Los Angeles, CA', to: 'Phoenix, AZ', status: 'On Time', eta: '3h 15m', progress: 88 },
  { id: 'HX-4817', from: 'Atlanta, GA', to: 'Miami, FL', status: 'Departed', eta: '9h 00m', progress: 31 },
];

const Hero = ({ onGetQuote }) => {
  const [activeShipment, setActiveShipment] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveShipment((prev) => (prev + 1) % liveShipments.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const shipment = liveShipments[activeShipment];

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute top-0 right-0 w-[700px] h-[600px] rounded-full bg-amber-brand/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full bg-amber-brand/4 blur-[100px] pointer-events-none" />

      {/* Road decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-brand/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-14 xl:gap-10 items-center">

          {/* Left: Copy */}
          <div className="flex flex-col items-start fade-slide-up">

            {/* Badge */}
            <div className="flex items-center gap-2 mb-7 px-4 py-2 rounded-full glass-amber">
              <span className="w-2 h-2 rounded-full bg-amber-brand pulse-dot" />
              <span className="text-xs font-semibold text-amber-brand tracking-wider uppercase">
                Live Tracking Available 24/7
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Move Freight
              <span className="block mt-1">
                <span className="text-gradient">Faster.</span>{' '}
                <span className="text-gradient">Smarter.</span>
              </span>
              Anywhere.
            </h1>

            <p className="text-base sm:text-lg text-steel-400 leading-relaxed max-w-xl mb-9">
              HaulX connects shippers with a vetted carrier network across all 48 states.
              Real-time tracking, guaranteed pickups, and freight rates that make sense for your bottom line.
            </p>

            {/* CTA Row */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={onGetQuote}
                className="btn-amber inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-bold"
              >
                Get Instant Quote
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="#how-it-works"
                className="btn-ghost inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold"
              >
                How It Works
              </a>
            </div>

          </div>

          {/* Right: Shipment Tracker Widget */}
          <div className="relative flex justify-center xl:justify-end">

            {/* Glow behind card */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-80 h-80 rounded-full bg-amber-brand/10 blur-[80px]" />
            </div>

            <div className="relative w-full max-w-md">

              {/* Main tracker card */}
              <div className="glass rounded-2xl p-6 border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">

                {/* Card header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-brand/15 border border-amber-brand/30 flex items-center justify-center">
                      <Truck className="w-4 h-4 text-amber-brand" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-steel-500">HAULX LIVE TRACKER</div>
                      <div className="text-sm font-bold text-white">Active Shipments</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-amber-brand font-mono bg-amber-brand/10 px-2.5 py-1 rounded-full border border-amber-brand/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-brand pulse-dot" />
                    LIVE
                  </div>
                </div>

                {/* Shipment selector tabs */}
                <div className="flex gap-1.5 mb-5 p-1 bg-black/30 rounded-xl border border-white/[0.05]">
                  {liveShipments.map((s, i) => (
                    <button
                      key={s.id}
                      onClick={() => setActiveShipment(i)}
                      className={`flex-1 py-2 px-2 rounded-lg text-xs font-mono font-semibold transition-all ${
                        i === activeShipment
                          ? 'bg-amber-brand text-navy-950 shadow-[0_0_12px_rgba(245,158,11,0.4)]'
                          : 'text-steel-400 hover:text-white'
                      }`}
                    >
                      {s.id}
                    </button>
                  ))}
                </div>

                {/* Route info */}
                <div className="bg-black/30 rounded-xl p-4 mb-4 border border-white/[0.05]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-amber-brand" />
                      <span className="text-sm font-semibold text-white">{shipment.from}</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-steel-500" />
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-sm font-semibold text-white">{shipment.to}</span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="relative h-2 bg-white/[0.07] rounded-full overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-amber-brand to-amber-light transition-all duration-700"
                      style={{ width: `${shipment.progress}%` }}
                    />
                    {/* Truck indicator */}
                    <div
                      className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-amber-brand rounded-full border-2 border-navy-950 shadow-[0_0_8px_rgba(245,158,11,0.8)] transition-all duration-700"
                      style={{ left: `${shipment.progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-[11px] font-mono text-steel-500">
                    <span>{shipment.progress}% complete</span>
                    <span className="text-amber-brand">{shipment.progress}%</span>
                  </div>
                </div>

                {/* Status badges */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-black/20 rounded-xl p-3 border border-white/[0.05]">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Clock className="w-3.5 h-3.5 text-amber-brand" />
                      <span className="text-[11px] font-mono text-steel-500 uppercase">ETA</span>
                    </div>
                    <div className="text-base font-bold font-mono text-white">{shipment.eta}</div>
                  </div>
                  <div className="bg-black/20 rounded-xl p-3 border border-white/[0.05]">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Shield className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[11px] font-mono text-steel-500 uppercase">Status</span>
                    </div>
                    <div className="text-sm font-bold text-emerald-400">{shipment.status}</div>
                  </div>
                </div>

              </div>

              {/* Floating badge 1 */}
              <div className="float-badge absolute -left-6 top-1/3 hidden sm:flex items-center gap-2 glass px-3.5 py-2.5 rounded-xl border border-white/[0.1] shadow-xl">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <div>
                  <div className="text-[11px] font-bold text-white">Cost Savings</div>
                  <div className="text-[10px] text-emerald-400 font-mono">avg. 23% less</div>
                </div>
              </div>

              {/* Floating badge 2 */}
              <div className="float-badge absolute -right-5 bottom-1/4 hidden sm:flex items-center gap-2 glass px-3.5 py-2.5 rounded-xl border border-white/[0.1] shadow-xl" style={{ animationDelay: '1.5s' }}>
                <div className="w-2 h-2 rounded-full bg-amber-brand pulse-dot" />
                <div>
                  <div className="text-[11px] font-bold text-white">500+ Carriers</div>
                  <div className="text-[10px] text-steel-400 font-mono">network active</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
