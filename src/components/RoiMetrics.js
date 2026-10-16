import React, { useEffect, useRef, useState } from 'react';
import { DollarSign, Clock, TrendingDown, BarChart2 } from 'lucide-react';

const benefits = [
  {
    icon: DollarSign,
    stat: '23%',
    title: 'Average Cost Reduction',
    desc: 'Shippers switching to HaulX save an average of 23% on freight spend within the first quarter.',
    color: 'amber',
  },
  {
    icon: Clock,
    stat: '4hrs',
    title: 'Faster Tender Acceptance',
    desc: 'From load posting to confirmed carrier acceptance — 4 hours on average vs. 14 hours industry standard.',
    color: 'blue',
  },
  {
    icon: TrendingDown,
    stat: '67%',
    title: 'Fewer Exceptions',
    desc: 'Proactive monitoring and automated rerouting reduces exception events by over two thirds.',
    color: 'green',
  },
  {
    icon: BarChart2,
    stat: '3x',
    title: 'Visibility Improvement',
    desc: 'Customers report 3x better freight visibility compared to their previous broker or TMS.',
    color: 'amber',
  },
];

const colorMap = {
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/25', text: 'text-amber-brand', bar: 'bg-amber-brand' },
  blue:  { bg: 'bg-blue-500/10',  border: 'border-blue-500/25',  text: 'text-blue-400',  bar: 'bg-blue-400' },
  green: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/25', text: 'text-emerald-400', bar: 'bg-emerald-400' },
};

const testimonials = [
  {
    quote: "Switched to HaulX 8 months ago. Our freight cost per mile dropped from $2.90 to $2.21. The visibility alone is worth it.",
    name: "Marcus T.",
    role: "Director of Logistics, RetailBrand Co.",
    rating: 5,
  },
  {
    quote: "We ship 200+ loads a month. HaulX handles all of it with two people on my team instead of five. That math works.",
    name: "Sandra L.",
    role: "VP Supply Chain, Midwest Foods Inc.",
    rating: 5,
  },
  {
    quote: "The real-time tracking saved us from a huge customer issue. We knew about the delay before the driver did.",
    name: "Derek H.",
    role: "Operations Manager, BuildRight LLC",
    rating: 5,
  },
];

const RoiMetrics = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 relative bg-navy-950">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute left-0 top-0 w-96 h-96 bg-amber-brand/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-amber-brand uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-amber-brand/10 border border-amber-brand/20">
            Real Results
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
            The Numbers
            <span className="text-gradient"> Speak for Themselves</span>
          </h2>
          <p className="text-steel-400 max-w-lg mx-auto text-base leading-relaxed">
            These aren't projections. They're averages pulled from 2,000+ active shipper accounts.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {benefits.map((b, i) => {
            const c = colorMap[b.color] || colorMap.amber;
            const Icon = b.icon;
            return (
              <div
                key={i}
                className={`card-hover glass rounded-2xl p-6 border border-white/[0.07] flex flex-col gap-4 transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`w-11 h-11 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${c.text}`} strokeWidth={1.8} />
                </div>
                <div className={`text-5xl font-extrabold ${c.text}`} style={{ fontFamily: 'Oswald, sans-serif' }}>
                  {b.stat}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-2">{b.title}</h4>
                  <p className="text-xs text-steel-400 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="section-divider mb-16" />
        <h3 className="text-center text-2xl font-extrabold text-white mb-10">What Shippers Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="card-hover glass rounded-2xl p-6 border border-white/[0.07] flex flex-col gap-4">
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-amber-brand text-sm">★</span>
                ))}
              </div>
              <p className="text-steel-300 text-sm leading-relaxed flex-1">"{t.quote}"</p>
              <div className="pt-3 border-t border-white/[0.06]">
                <div className="text-sm font-bold text-white">{t.name}</div>
                <div className="text-xs text-steel-500 mt-0.5">{t.role}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RoiMetrics;
