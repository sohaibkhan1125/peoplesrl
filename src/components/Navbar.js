import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Network', href: '#network' },
  { label: 'About', href: '#about' },
];

const Navbar = ({ onGetQuote }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // lock body scroll when drawer open
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

          {/* ── Logo ── */}
          <a href="/#" className="flex items-center group">
            <img
              src="/logo.jpeg"
              alt="People Logistic Integrate Services"
              className="h-12 w-auto object-contain rounded-xl"
            />
          </a>

          {/* ── Desktop nav links ── */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-steel-300 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-amber-brand rounded-full group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* ── Desktop CTA ── */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+18005550192"
              className="text-sm text-steel-400 hover:text-white transition-colors font-medium"
            >
              1-800-HAULX
            </a>
            <button
              onClick={onGetQuote}
              className="btn-amber inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* ── Mobile: hamburger only ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen
              ? <X className="w-6 h-6" strokeWidth={2} />
              : <Menu className="w-6 h-6" strokeWidth={2} />
            }
          </button>

        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-navy-900/98 backdrop-blur-2xl border-t border-white/[0.06] px-6 py-8">

          {/* Nav links */}
          <nav className="flex flex-col divide-y divide-white/[0.05]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between py-4 text-lg font-semibold text-steel-200 hover:text-amber-brand transition-colors"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                {link.label}
                <ArrowRight className="w-4 h-4 text-steel-600" />
              </a>
            ))}
          </nav>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-col gap-3">
            <button
              onClick={() => { setMenuOpen(false); onGetQuote(); }}
              className="btn-amber w-full py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="tel:+18005550192"
              className="btn-ghost w-full py-4 rounded-xl text-base font-semibold flex items-center justify-center gap-2"
            >
              Call 1-800-HAULX
            </a>
          </div>

          {/* Footer note */}
          <p className="mt-6 text-center text-xs text-steel-600">
            Available 24 / 7 · Nationwide Coverage
          </p>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
