import React, { useState, useEffect } from 'react';
import { X, ArrowRight, CheckCircle, Truck, Package, Thermometer, Layers } from 'lucide-react';

const freightTypes = [
  { id: 'ftl', label: 'Full Truckload (FTL)', icon: Truck },
  { id: 'ltl', label: 'Less Than Truckload', icon: Layers },
  { id: 'reefer', label: 'Refrigerated', icon: Thermometer },
  { id: 'other', label: 'Other / Not Sure', icon: Package },
];

const DemoModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    freightType: '',
    origin: '',
    destination: '',
    weight: '',
    pickupDate: '',
    name: '',
    email: '',
    company: '',
    phone: '',
  });

  // lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // reset on close
      setTimeout(() => { setStep(1); setSubmitted(false); }, 300);
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const update = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
      aria-label="Get a freight quote"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-navy-900 border border-white/[0.1] rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.7)] overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-7 py-5 border-b border-white/[0.07]">
          <div>
            <h2 className="text-lg font-extrabold text-white">Get a Free Quote</h2>
            {!submitted && (
              <p className="text-xs text-steel-500 mt-0.5">
                Step {step} of 2 — {step === 1 ? 'Shipment Details' : 'Your Info'}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-steel-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Progress bar */}
        {!submitted && (
          <div className="h-1 bg-white/[0.05]">
            <div
              className="h-full bg-amber-brand transition-all duration-500"
              style={{ width: step === 1 ? '50%' : '100%' }}
            />
          </div>
        )}

        {/* Content */}
        <div className="px-7 py-7">
          {submitted ? (
            /* Success state */
            <div className="flex flex-col items-center text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-5">
                <CheckCircle className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-extrabold text-white mb-3">Quote Request Sent!</h3>
              <p className="text-steel-400 text-sm leading-relaxed mb-6 max-w-xs">
                A HaulX logistics rep will reach out within 30 minutes during business hours with your rate.
              </p>
              <div className="w-full p-4 rounded-xl bg-amber-brand/8 border border-amber-brand/20 text-sm text-amber-brand font-semibold">
                Average response time: <strong className="text-white">12 minutes</strong>
              </div>
              <button onClick={onClose} className="mt-6 text-sm text-steel-500 hover:text-steel-200 transition-colors">
                Close window
              </button>
            </div>
          ) : step === 1 ? (
            /* Step 1: Shipment details */
            <div className="flex flex-col gap-5">
              <div>
                <label className="block text-xs font-semibold text-steel-400 uppercase tracking-wider mb-3">
                  Freight Type
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {freightTypes.map(({ id, label, icon: Icon }) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => update('freightType', id)}
                      className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border text-sm text-left transition-all ${
                        form.freightType === id
                          ? 'bg-amber-brand/10 border-amber-brand/40 text-white'
                          : 'bg-white/[0.02] border-white/[0.07] text-steel-400 hover:border-white/[0.15]'
                      }`}
                    >
                      <Icon className={`w-4 h-4 flex-shrink-0 ${form.freightType === id ? 'text-amber-brand' : 'text-steel-500'}`} />
                      <span className="text-xs font-semibold leading-tight">{label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-steel-400 uppercase tracking-wider mb-2">
                    Origin
                  </label>
                  <input
                    type="text"
                    value={form.origin}
                    onChange={(e) => update('origin', e.target.value)}
                    placeholder="City, State or ZIP"
                    className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-steel-600 focus:outline-none focus:border-amber-brand/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-steel-400 uppercase tracking-wider mb-2">
                    Destination
                  </label>
                  <input
                    type="text"
                    value={form.destination}
                    onChange={(e) => update('destination', e.target.value)}
                    placeholder="City, State or ZIP"
                    className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-steel-600 focus:outline-none focus:border-amber-brand/50 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-steel-400 uppercase tracking-wider mb-2">
                    Weight (lbs)
                  </label>
                  <input
                    type="number"
                    value={form.weight}
                    onChange={(e) => update('weight', e.target.value)}
                    placeholder="e.g. 20,000"
                    className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-steel-600 focus:outline-none focus:border-amber-brand/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-steel-400 uppercase tracking-wider mb-2">
                    Pickup Date
                  </label>
                  <input
                    type="date"
                    value={form.pickupDate}
                    onChange={(e) => update('pickupDate', e.target.value)}
                    className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-brand/50 transition-colors"
                    style={{ colorScheme: 'dark' }}
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                disabled={!form.origin || !form.destination}
                className="btn-amber w-full py-3.5 rounded-xl text-sm font-bold inline-flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed mt-1"
              >
                Continue
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            /* Step 2: Contact details */
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-steel-400 uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder="Jane Smith"
                    className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-steel-600 focus:outline-none focus:border-amber-brand/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-steel-400 uppercase tracking-wider mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    required
                    value={form.company}
                    onChange={(e) => update('company', e.target.value)}
                    placeholder="Acme Corp"
                    className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-steel-600 focus:outline-none focus:border-amber-brand/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-steel-400 uppercase tracking-wider mb-2">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="jane@company.com"
                  className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-steel-600 focus:outline-none focus:border-amber-brand/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-steel-400 uppercase tracking-wider mb-2">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  placeholder="(555) 000-0000"
                  className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-steel-600 focus:outline-none focus:border-amber-brand/50 transition-colors"
                />
              </div>

              <div className="flex gap-3 mt-1">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="btn-ghost flex-1 py-3.5 rounded-xl text-sm font-semibold"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="btn-amber flex-1 py-3.5 rounded-xl text-sm font-bold inline-flex items-center justify-center gap-2"
                >
                  Submit Quote Request
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-center text-xs text-steel-600 mt-1">
                By submitting, you agree to our{' '}
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="/privacy-policy" className="text-steel-400 hover:text-amber-brand transition-colors">Privacy Policy</a>.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemoModal;
