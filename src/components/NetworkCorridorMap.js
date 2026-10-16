import React, { useState } from 'react';
import { MapPin, Truck, ArrowRight, Navigation } from 'lucide-react';

const corridors = [
  { id: 1, from: 'Los Angeles', fromState: 'CA', to: 'Chicago', toState: 'IL', miles: '2,014', loads: '340', time: '32h', hot: true },
  { id: 2, from: 'New York', fromState: 'NY', to: 'Miami', toState: 'FL', miles: '1,280', loads: '220', time: '19h', hot: false },
  { id: 3, from: 'Dallas', fromState: 'TX', to: 'Atlanta', toState: 'GA', miles: '781', loads: '180', time: '11h', hot: true },
  { id: 4, from: 'Chicago', fromState: 'IL', to: 'Houston', toState: 'TX', miles: '1,089', loads: '270', time: '15h', hot: false },
  { id: 5, from: 'Seattle', fromState: 'WA', to: 'Denver', toState: 'CO', miles: '1,321', loads: '145', time: '20h', hot: false },
  { id: 6, from: 'Phoenix', fromState: 'AZ', to: 'Las Vegas', toState: 'NV', miles: '298', loads: '95', time: '4h', hot: false },
];

const regionStats = [
  { region: 'Midwest Hub', loads: '1,240', carriers: '180', onTime: '99.1%' },
  { region: 'Southeast', loads: '890', carriers: '140', onTime: '98.4%' },
  { region: 'Southwest', loads: '760', carriers: '110', onTime: '97.9%' },
  { region: 'West Coast', loads: '650', carriers: '95', onTime: '98.7%' },
];

const NetworkCorridorMap = () => {
  const [selectedCorridor, setSelectedCorridor] = useState(corridors[0]);

  return (
    <section id="network" className="py-24 relative bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-1/2 right-0 w-96 h-96 -translate-y-1/2 bg-amber-brand/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-amber-brand uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-amber-brand/10 border border-amber-brand/20">
            National Network
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
            Coast-to-Coast
            <span className="text-gradient"> Coverage</span>
          </h2>
          <p className="text-steel-400 max-w-lg mx-auto text-base leading-relaxed">
            Active lanes across all 48 contiguous states, with dense carrier density on top freight corridors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left: SVG US Map (stylized) */}
          <div className="lg:col-span-7 relative">
            <div className="glass rounded-2xl border border-white/[0.08] overflow-hidden">
              <div className="p-5 border-b border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-amber-brand" />
                  <span className="text-sm font-bold text-white">Active Corridor Map</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-amber-brand font-mono bg-amber-brand/10 px-2.5 py-1 rounded-full border border-amber-brand/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-brand pulse-dot" />
                  LIVE
                </div>
              </div>

              {/* Stylized map with SVG */}
              <div className="relative bg-navy-950/80 p-6">
                <svg viewBox="0 0 560 340" className="w-full" fill="none">
                  {/* Background */}
                  <rect width="560" height="340" fill="#080d1a" rx="8" />

                  {/* Grid lines */}
                  {[0,1,2,3,4,5,6,7,8].map(i => (
                    <line key={`h${i}`} x1="0" y1={i*42} x2="560" y2={i*42} stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
                  ))}
                  {[0,1,2,3,4,5,6,7,8,9,10].map(i => (
                    <line key={`v${i}`} x1={i*56} y1="0" x2={i*56} y2="340" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
                  ))}

                  {/* Simplified US state outlines as a rough shape */}
                  <path
                    d="M 60 60 L 500 60 L 520 80 L 510 120 L 520 160 L 500 200 L 480 240 L 440 260 L 400 270 L 360 280 L 300 290 L 240 280 L 180 270 L 140 250 L 100 220 L 70 180 L 50 140 L 55 100 Z"
                    fill="rgba(16,24,48,0.8)"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="1.5"
                  />

                  {/* State boundaries (simplified) */}
                  <line x1="200" y1="60" x2="200" y2="240" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  <line x1="320" y1="60" x2="320" y2="270" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  <line x1="420" y1="60" x2="420" y2="260" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  <line x1="60" y1="160" x2="500" y2="160" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

                  {/* City dots: LA, Chicago, Dallas, NY, Miami, Atlanta, Seattle, Denver, Phoenix */}
                  {[
                    { cx: 85, cy: 170, name: 'LA', abbr: 'CA' },
                    { cx: 340, cy: 115, name: 'Chicago', abbr: 'IL' },
                    { cx: 270, cy: 215, name: 'Dallas', abbr: 'TX' },
                    { cx: 470, cy: 105, name: 'New York', abbr: 'NY' },
                    { cx: 430, cy: 255, name: 'Miami', abbr: 'FL' },
                    { cx: 400, cy: 200, name: 'Atlanta', abbr: 'GA' },
                    { cx: 90, cy: 80, name: 'Seattle', abbr: 'WA' },
                    { cx: 185, cy: 155, name: 'Denver', abbr: 'CO' },
                    { cx: 155, cy: 195, name: 'Phoenix', abbr: 'AZ' },
                    { cx: 300, cy: 200, name: 'Houston', abbr: 'TX' },
                  ].map((city, i) => (
                    <g key={i}>
                      <circle cx={city.cx} cy={city.cy} r="5" fill="#F59E0B" fillOpacity="0.9" />
                      <circle cx={city.cx} cy={city.cy} r="9" fill="#F59E0B" fillOpacity="0.15" />
                      <text x={city.cx + 8} y={city.cy - 5} fontSize="8" fill="rgba(203,213,225,0.8)" fontFamily="IBM Plex Mono">{city.name}</text>
                    </g>
                  ))}

                  {/* Active corridor lines */}
                  {/* LA to Chicago */}
                  <path d="M 85 170 Q 210 100 340 115" stroke="#F59E0B" strokeWidth="1.8" strokeDasharray="6 3" opacity="0.6" />
                  {/* Chicago to Atlanta */}
                  <path d="M 340 115 Q 370 155 400 200" stroke="#F59E0B" strokeWidth="1.8" strokeDasharray="6 3" opacity="0.5" />
                  {/* Dallas to Atlanta */}
                  <path d="M 270 215 Q 335 207 400 200" stroke="#FBBF24" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.5" />
                  {/* NY to Miami */}
                  <path d="M 470 105 Q 455 180 430 255" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.45" />
                  {/* Seattle to Denver */}
                  <path d="M 90 80 Q 135 115 185 155" stroke="#34d399" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.45" />
                  {/* Dallas to Chicago */}
                  <path d="M 270 215 Q 305 165 340 115" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.4" />

                  {/* Animated "truck" dots on main corridor */}
                  <circle r="3.5" fill="#FCD34D">
                    <animateMotion dur="5s" repeatCount="indefinite">
                      <mpath href="#la-chi" />
                    </animateMotion>
                  </circle>
                  <path id="la-chi" d="M 85 170 Q 210 100 340 115" fill="none" />

                  <circle r="3" fill="#60a5fa" opacity="0.9">
                    <animateMotion dur="4s" repeatCount="indefinite" begin="1s">
                      <mpath href="#ny-miami" />
                    </animateMotion>
                  </circle>
                  <path id="ny-miami" d="M 470 105 Q 455 180 430 255" fill="none" />

                  {/* Legend */}
                  <g transform="translate(20, 300)">
                    <circle cx="6" cy="6" r="4" fill="#F59E0B" />
                    <text x="14" y="10" fontSize="8" fill="rgba(203,213,225,0.6)" fontFamily="IBM Plex Mono">Active City</text>
                    <line x1="80" y1="6" x2="100" y2="6" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="4 2" />
                    <text x="105" y="10" fontSize="8" fill="rgba(203,213,225,0.6)" fontFamily="IBM Plex Mono">Active Lane</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Corridor list + region stats */}
          <div className="lg:col-span-5 flex flex-col gap-4">

            {/* Top Corridors */}
            <div className="glass rounded-2xl p-5 border border-white/[0.08]">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <Truck className="w-4 h-4 text-amber-brand" />
                Top Corridors
              </h3>
              <div className="flex flex-col gap-2">
                {corridors.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCorridor(c)}
                    className={`w-full text-left px-4 py-3 rounded-xl border transition-all ${
                      selectedCorridor.id === c.id
                        ? 'bg-amber-brand/10 border-amber-brand/35'
                        : 'bg-white/[0.02] border-white/[0.05] hover:border-white/[0.1]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-3.5 h-3.5 text-amber-brand flex-shrink-0" />
                        <span className="font-semibold text-white">{c.from}, {c.fromState}</span>
                        <ArrowRight className="w-3 h-3 text-steel-500" />
                        <span className="font-semibold text-white">{c.to}, {c.toState}</span>
                        {c.hot && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-brand/20 text-amber-brand border border-amber-brand/30 font-bold">
                            HOT
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-5 mt-1.5 text-[11px] font-mono text-steel-500">
                      <span>{c.miles} mi</span>
                      <span>{c.loads} loads/mo</span>
                      <span className="text-amber-brand">{c.time} transit</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Region stats */}
            <div className="grid grid-cols-2 gap-3">
              {regionStats.map((r, i) => (
                <div key={i} className="glass rounded-xl p-4 border border-white/[0.07]">
                  <div className="text-[11px] font-mono text-steel-500 uppercase mb-2">{r.region}</div>
                  <div className="text-xl font-extrabold text-white mb-1">{r.loads}</div>
                  <div className="text-xs text-steel-400">monthly loads</div>
                  <div className="mt-2 text-xs font-semibold text-emerald-400">{r.onTime} on-time</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkCorridorMap;
