import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, Clock, Star, MapPin } from 'lucide-react';

const metrics = [
  { icon: TrendingUp, value: '12,400+', label: 'Loads Delivered', sub: 'This year alone', color: 'text-amber-brand' },
  { icon: Clock, value: '98.6%', label: 'On-Time Delivery', sub: 'Industry avg: 91%', color: 'text-emerald-400' },
  { icon: Star, value: '4.9 / 5', label: 'Shipper Rating', sub: 'Based on 3,200 reviews', color: 'text-yellow-400' },
  { icon: MapPin, value: '48 States', label: 'National Coverage', sub: 'Including all major corridors', color: 'text-cyan-400' },
];

const MetricsBar = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 relative overflow-hidden">
      {/* Full-width gradient strip */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-brand/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-brand/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={i}
                className={`flex flex-col items-center text-center transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className={`w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mb-4 ${m.color}`}>
                  <Icon className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <div className={`text-4xl lg:text-5xl font-extrabold mb-2 ${m.color}`} style={{ fontFamily: 'Oswald, sans-serif' }}>
                  {m.value}
                </div>
                <div className="text-sm font-semibold text-white mb-1">{m.label}</div>
                <div className="text-xs text-steel-500">{m.sub}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MetricsBar;
