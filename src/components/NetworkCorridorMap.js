import React, { useState } from 'react';
import { MapPin, Truck, ArrowRight, Navigation } from 'lucide-react';

const corridors = [
  { id: 1, from: 'Milano',  fromState: 'MI', to: 'Roma',    toState: 'RM', km: '572',  loads: '340', time: '6h',  hot: true },
  { id: 2, from: 'Torino',  fromState: 'TO', to: 'Napoli',  toState: 'NA', km: '890',  loads: '220', time: '9h',  hot: false },
  { id: 3, from: 'Bologna', fromState: 'BO', to: 'Palermo', toState: 'PA', km: '1140', loads: '180', time: '12h', hot: true },
  { id: 4, from: 'Venezia', fromState: 'VE', to: 'Bari',    toState: 'BA', km: '810',  loads: '150', time: '8h',  hot: false },
  { id: 5, from: 'Firenze', fromState: 'FI', to: 'Catania', toState: 'CT', km: '1020', loads: '120', time: '11h', hot: false },
  { id: 6, from: 'Genova',  fromState: 'GE', to: 'Milano',  toState: 'MI', km: '142',  loads: '280', time: '1.5h',hot: true },
];

const regionStats = [
  { region: 'Nord Italia', loads: '1.240', carriers: '180', onTime: '99.1%' },
  { region: 'Centro',      loads: '890',   carriers: '140', onTime: '98.4%' },
  { region: 'Sud',         loads: '760',   carriers: '110', onTime: '97.9%' },
  { region: 'Isole',       loads: '320',   carriers: '55',  onTime: '97.2%' },
];

const NetworkCorridorMap = () => {
  const [selectedCorridor, setSelectedCorridor] = useState(corridors[0]);

  return (
    <section id="network" className="py-24 relative bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-1/2 right-0 w-96 h-96 -translate-y-1/2 bg-sky-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-sky-400 uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/20">
            Rete Nazionale
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
            Copertura
            <span className="text-gradient"> da Nord a Sud</span>
          </h2>
          <p className="text-steel-400 max-w-lg mx-auto text-base leading-relaxed">
            Rotte attive in tutta Italia, con alta densità di vettori sulle tratte principali.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Italy SVG Map */}
          <div className="lg:col-span-7 relative">
            <div className="glass rounded-2xl border border-white/[0.08] overflow-hidden">
              <div className="p-5 border-b border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-sky-400" />
                  <span className="text-sm font-bold text-white">Mappa Corridoi Attivi — Italia</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-sky-400 font-mono bg-sky-400/10 px-2.5 py-1 rounded-full border border-sky-400/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 pulse-dot" />
                  LIVE
                </div>
              </div>

              <div className="relative bg-navy-950/80 p-6">
                <svg viewBox="0 0 400 520" className="w-full max-h-[420px] mx-auto" fill="none">
                  <rect width="400" height="520" fill="#080d1a" rx="8" />
                  {/* Grid */}
                  {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => (
                    <line key={`h${i}`} x1="0" y1={i*47} x2="400" y2={i*47} stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
                  ))}
                  {[0,1,2,3,4,5,6,7].map(i => (
                    <line key={`v${i}`} x1={i*57} y1="0" x2={i*57} y2="520" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
                  ))}

                  {/* Simplified Italy silhouette */}
                  <path
                    d="M 130 40 L 200 35 L 260 50 L 290 80 L 300 120 L 280 160 L 300 200 L 310 240 L 290 280 L 310 320 L 300 360 L 270 390 L 250 420 L 240 450 L 220 460 L 200 440 L 185 410 L 170 380 L 160 340 L 140 300 L 120 260 L 110 220 L 100 180 L 90 140 L 100 100 L 115 70 Z"
                    fill="rgba(16,24,48,0.85)"
                    stroke="rgba(56,189,248,0.15)"
                    strokeWidth="1.5"
                  />
                  {/* Sicily */}
                  <path d="M 140 460 L 190 455 L 220 470 L 215 490 L 175 500 L 145 490 Z"
                    fill="rgba(16,24,48,0.85)" stroke="rgba(56,189,248,0.12)" strokeWidth="1.2" />
                  {/* Sardinia */}
                  <path d="M 60 260 L 90 255 L 95 300 L 85 330 L 60 325 L 50 295 Z"
                    fill="rgba(16,24,48,0.85)" stroke="rgba(56,189,248,0.12)" strokeWidth="1.2" />

                  {/* Cities */}
                  {[
                    { cx: 155, cy: 70,  name: 'Torino' },
                    { cx: 200, cy: 80,  name: 'Milano' },
                    { cx: 240, cy: 95,  name: 'Venezia' },
                    { cx: 175, cy: 115, name: 'Genova' },
                    { cx: 215, cy: 140, name: 'Bologna' },
                    { cx: 195, cy: 185, name: 'Firenze' },
                    { cx: 210, cy: 255, name: 'Roma' },
                    { cx: 270, cy: 320, name: 'Bari' },
                    { cx: 220, cy: 390, name: 'Napoli' },
                    { cx: 175, cy: 472, name: 'Palermo' },
                  ].map((city, i) => (
                    <g key={i}>
                      <circle cx={city.cx} cy={city.cy} r="5" fill="#38BDF8" fillOpacity="0.9" />
                      <circle cx={city.cx} cy={city.cy} r="9" fill="#38BDF8" fillOpacity="0.12" />
                      <text x={city.cx + 8} y={city.cy + 4} fontSize="8" fill="rgba(203,213,225,0.75)" fontFamily="IBM Plex Mono">{city.name}</text>
                    </g>
                  ))}

                  {/* Corridors */}
                  <path d="M 200 80 Q 205 165 210 255" stroke="#38BDF8" strokeWidth="2" strokeDasharray="6 3" opacity="0.7" />
                  <path d="M 155 70 Q 185 205 220 390" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.5" />
                  <path d="M 215 140 Q 215 195 175 472" stroke="#7DD3FC" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.45" />
                  <path d="M 240 95 Q 255 205 270 320" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.45" />
                  <path d="M 175 115 Q 190 145 200 80" stroke="#38BDF8" strokeWidth="1.8" strokeDasharray="4 2" opacity="0.6" />

                  {/* Animated truck dots */}
                  <circle r="4" fill="#7DD3FC">
                    <animateMotion dur="4s" repeatCount="indefinite">
                      <mpath href="#mi-ro" />
                    </animateMotion>
                  </circle>
                  <path id="mi-ro" d="M 200 80 Q 205 165 210 255" fill="none" />

                  <circle r="3" fill="#60a5fa" opacity="0.9">
                    <animateMotion dur="5s" repeatCount="indefinite" begin="1s">
                      <mpath href="#bo-pa" />
                    </animateMotion>
                  </circle>
                  <path id="bo-pa" d="M 215 140 Q 215 195 175 472" fill="none" />

                  {/* Legend */}
                  <g transform="translate(16, 490)">
                    <circle cx="5" cy="5" r="4" fill="#38BDF8" />
                    <text x="13" y="9" fontSize="7.5" fill="rgba(203,213,225,0.55)" fontFamily="IBM Plex Mono">Città attiva</text>
                    <line x1="75" y1="5" x2="93" y2="5" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 2" />
                    <text x="97" y="9" fontSize="7.5" fill="rgba(203,213,225,0.55)" fontFamily="IBM Plex Mono">Corridoio attivo</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="glass rounded-2xl p-5 border border-white/[0.08]">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <Truck className="w-4 h-4 text-sky-400" />
                Principali Corridoi
              </h3>
              <div className="flex flex-col gap-2">
                {corridors.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCorridor(c)}
                    className={`w-full text-left px-4 py-3 rounded-xl border transition-all ${
                      selectedCorridor.id === c.id
                        ? 'bg-sky-400/10 border-sky-400/35'
                        : 'bg-white/[0.02] border-white/[0.05] hover:border-white/[0.1]'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-sm flex-wrap">
                      <MapPin className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                      <span className="font-semibold text-white">{c.from}</span>
                      <ArrowRight className="w-3 h-3 text-steel-500" />
                      <span className="font-semibold text-white">{c.to}</span>
                      {c.hot && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-sky-400/20 text-sky-400 border border-sky-400/30 font-bold">
                          TOP
                        </span>
                      )}
                    </div>
                    <div className="flex gap-5 mt-1.5 text-[11px] font-mono text-steel-500">
                      <span>{c.km} km</span>
                      <span>{c.loads} carichi/mese</span>
                      <span className="text-sky-400">{c.time} di transito</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {regionStats.map((r, i) => (
                <div key={i} className="glass rounded-xl p-4 border border-white/[0.07]">
                  <div className="text-[11px] font-mono text-steel-500 uppercase mb-2">{r.region}</div>
                  <div className="text-xl font-extrabold text-white mb-1">{r.loads}</div>
                  <div className="text-xs text-steel-400">carichi/mese</div>
                  <div className="mt-2 text-xs font-semibold text-emerald-400">{r.onTime} puntuale</div>
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
