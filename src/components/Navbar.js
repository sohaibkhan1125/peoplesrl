import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Home',          href: '/' },
  { label: 'Servizi',       href: '#services' },
  { label: 'Come Funziona', href: '#how-it-works' },
  { label: 'Network',       href: '#network' },
  { label: 'Chi Siamo',     href: '#about' },
  { label: 'Vai al Negozio', href: 'https://negozio.peopleitaly.eu/', external: true },
];

const Navbar = ({ onGetQuote }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-navy-900/98 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center group">
            <img
              src="/logo.jpeg"
              alt="People Logistic Integrate Services"
              className="h-12 w-auto object-contain rounded-xl"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className={`text-sm font-medium transition-colors relative group ${
                  link.external
                    ? 'text-sky-400 hover:text-sky-300 font-semibold'
                    : 'text-steel-300 hover:text-white'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-sky-400 rounded-full group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:0521065541" className="text-sm text-steel-400 hover:text-white transition-colors font-medium">
              0521.065541
            </a>
            <button
              onClick={onGetQuote}
              className="btn-brand inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold"
            >
              Preventivo
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen
              ? <X className="w-6 h-6" strokeWidth={2} />
              : <Menu className="w-6 h-6" strokeWidth={2} />
            }
          </button>

        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-navy-900/98 backdrop-blur-2xl border-t border-white/[0.06] px-6 py-8">
          <nav className="flex flex-col divide-y divide-white/[0.05]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-between py-4 text-lg font-semibold transition-colors ${
                  link.external ? 'text-sky-400 hover:text-sky-300' : 'text-steel-200 hover:text-sky-400'
                }`}
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                {link.label}
                <ArrowRight className="w-4 h-4 text-steel-600" />
              </a>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-3">
            <button
              onClick={() => { setMenuOpen(false); onGetQuote(); }}
              className="btn-brand w-full py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2"
            >
              Richiedi Preventivo Gratuito
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="tel:0521065541"
              className="btn-ghost w-full py-4 rounded-xl text-base font-semibold flex items-center justify-center gap-2"
            >
              Chiama 0521.065541
            </a>
          </div>
          <p className="mt-6 text-center text-xs text-steel-600">
            Disponibile 24/7 · Copertura Nazionale Italia
          </p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
