import React from 'react';
import { Package, Thermometer, Layers, Anchor, Zap, Globe } from 'lucide-react';

const services = [
  {
    icon: Package,
    title: 'Full Truckload (FTL)',
    desc: 'Dedicated trucks for large shipments needing direct point-to-point delivery with no intermediate stops.',
    tags: ['Dry Van', '53ft Trailers', 'Drop & Hook'],
    color: 'amber',
  },
  {
    icon: Layers,
    title: 'Less Than Truckload (LTL)',
    desc: 'Share truck space with other shippers and cut costs for smaller freight that doesn\'t fill a full trailer.',
    tags: ['Pallet Rates', 'Door-to-Door', 'Insured'],
    color: 'blue',
  },
  {
    icon: Thermometer,
    title: 'Refrigerated (Reefer)',
    desc: 'Temperature-controlled transport for perishables, pharmaceuticals, and sensitive goods.',
    tags: ['34°F – 65°F', 'Food Grade', 'Certified'],
    color: 'cyan',
  },
  {
    icon: Zap,
    title: 'Expedited Freight',
    desc: 'Time-critical loads with guaranteed next-day or same-day pickup using dedicated power-only lanes.',
    tags: ['24/7 Dispatch', 'Rush Orders', 'GPS Live'],
    color: 'amber',
  },
  {
    icon: Anchor,
    title: 'Flatbed & Heavy Haul',
    desc: 'Oversized, overweight, or irregularly shaped cargo requiring open-deck trailers and specialized rigging.',
    tags: ['Permit Ready', 'Overdimensional', 'Escorts'],
    color: 'orange',
  },
  {
    icon: Globe,
    title: 'Intermodal',
    desc: 'Rail + truck combination for cost-efficient long-haul lanes, reducing emissions without sacrificing speed.',
    tags: ['Rail Ready', 'Eco-Friendly', 'Long Haul'],
    color: 'green',
  },
];

const colorMap = {
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/25', icon: 'text-amber-brand', tag: 'bg-amber-500/10 text-amber-brand border-amber-500/20' },
  blue:  { bg: 'bg-blue-500/10',  border: 'border-blue-500/25',  icon: 'text-blue-400',  tag: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
  cyan:  { bg: 'bg-cyan-500/10',  border: 'border-cyan-500/25',  icon: 'text-cyan-400',  tag: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' },
  orange:{ bg: 'bg-orange-500/10',border: 'border-orange-500/25',icon: 'text-orange-400',tag: 'bg-orange-500/10 text-orange-400 border-orange-500/20' },
  green: { bg: 'bg-emerald-500/10',border: 'border-emerald-500/25',icon: 'text-emerald-400',tag: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
};

const FreightServices = ({ onGetQuote }) => {
  return (
    <section id="services" className="py-24 relative bg-navy-950">
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-amber-brand uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-amber-brand/10 border border-amber-brand/20">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
            Every Freight Mode,
            <br />
            <span className="text-gradient">One Platform</span>
          </h2>
          <p className="text-steel-400 max-w-xl mx-auto text-base leading-relaxed">
            From single pallet to oversized heavy haul — HaulX handles it all with
            a single login, one invoice, and real-time visibility.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => {
            const c = colorMap[svc.color] || colorMap.amber;
            const Icon = svc.icon;
            return (
              <div
                key={i}
                className="card-hover glass rounded-2xl p-6 border border-white/[0.07] flex flex-col gap-4 cursor-default"
              >
                <div className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${c.icon}`} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{svc.title}</h3>
                  <p className="text-sm text-steel-400 leading-relaxed">{svc.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {svc.tags.map((tag, j) => (
                    <span
                      key={j}
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${c.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onGetQuote}
            className="btn-amber inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-bold"
          >
            Get a Free Quote
            <span className="text-navy-950 font-mono text-sm">→</span>
          </button>
          <p className="mt-3 text-xs text-steel-500">No commitment. Quote in under 60 seconds.</p>
        </div>

      </div>
    </section>
  );
};

export default FreightServices;
