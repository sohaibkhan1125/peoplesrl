import React from 'react';
import { Headphones, Shield, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: Headphones,
    title: 'Dedicated Logistics Reps',
    desc: 'Every account gets a named freight manager — a real human who knows your lanes, your freight, and your priorities.',
  },
  {
    icon: Shield,
    title: 'Cargo Insurance Included',
    desc: 'All shipments are covered up to $100,000 as standard. Extended coverage available for high-value or specialized freight.',
  },
  {
    icon: Clock,
    title: '24 / 7 Ops Center',
    desc: 'Our operations desk runs around the clock. Pickup issues, transit delays, weather reroutes — we\'re always on it.',
  },
  {
    icon: Users,
    title: 'Vetted Carrier Network',
    desc: 'Every carrier in our network passes a 47-point safety audit: MC authority, insurance, CSA scores, and on-time history.',
  },
];

const ExpertsSection = () => {
  return (
    <section id="about" className="py-24 relative bg-navy-900/60">
      <div className="absolute inset-0 dot-grid opacity-15" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Visual */}
          <div className="relative">
            <div className="glass rounded-2xl p-8 border border-white/[0.08] relative overflow-hidden">
              {/* Amber glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-brand/10 rounded-full blur-[60px] pointer-events-none" />

              <div className="relative">
                <div className="text-xs font-mono font-bold text-amber-brand uppercase tracking-widest mb-6">
                  OPS DASHBOARD
                </div>

                {/* Mock dashboard stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: 'Active Loads', value: '1,847', trend: '+12%', up: true },
                    { label: 'Carriers Online', value: '482', trend: '+4', up: true },
                    { label: 'Avg Rate / Mile', value: '$2.34', trend: '-8%', up: false },
                    { label: 'Exceptions', value: '3', trend: 'low', up: true },
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

                {/* Activity feed */}
                <div className="space-y-2.5">
                  <div className="text-xs font-mono text-steel-500 uppercase tracking-wider mb-3">Latest Activity</div>
                  {[
                    { text: 'HX-4821 departed Chicago, IL', time: '2m ago', dot: 'bg-amber-brand' },
                    { text: 'Carrier assigned to HX-4825', time: '7m ago', dot: 'bg-blue-400' },
                    { text: 'HX-4818 delivered — POD captured', time: '14m ago', dot: 'bg-emerald-400' },
                    { text: 'New load tender HX-4826 accepted', time: '21m ago', dot: 'bg-amber-brand' },
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
            <span className="inline-block text-xs font-semibold text-amber-brand uppercase tracking-widest mb-5 px-3 py-1 rounded-full bg-amber-brand/10 border border-amber-brand/20">
              Why HaulX
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              Technology Backed by
              <span className="text-gradient"> Real People</span>
            </h2>
            <p className="text-steel-400 text-base leading-relaxed mb-10">
              We built the software — but we never forgot that freight is a people business.
              HaulX combines the speed of automation with the judgment of experienced logistics professionals.
            </p>

            <div className="flex flex-col gap-6">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} className="flex items-start gap-5">
                    <div className="w-11 h-11 rounded-xl bg-amber-brand/10 border border-amber-brand/25 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-amber-brand" strokeWidth={1.8} />
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
