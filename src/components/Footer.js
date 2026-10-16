import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

// Social SVG icons (lucide-react doesn't ship brand icons)
const IconLinkedin = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const IconTwitter = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const IconYoutube = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);
const IconFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const footerLinks = {
  Services: [
    'Full Truckload (FTL)',
    'Less Than Truckload (LTL)',
    'Refrigerated Freight',
    'Expedited Shipping',
    'Flatbed & Heavy Haul',
    'Intermodal',
  ],
  Company: [
    'About HaulX',
    'How It Works',
    'Carrier Partners',
    'Sustainability',
    'Press & Media',
    'Careers',
  ],
  Resources: [
    'Freight Quote',
    'Shipper Portal',
    'Carrier Portal',
    'Track Shipment',
    'Documentation',
    'Blog',
  ],
  Support: [
    'Contact Us',
    'Help Center',
    'Claims',
    'Compliance',
    'Privacy Policy',
    'Terms of Service',
  ],
};

const Footer = ({ onGetQuote }) => {
  return (
    <footer className="relative bg-navy-950 border-t border-white/[0.06] overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-10" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-brand/30 to-transparent" />

      {/* CTA strip */}
      <div className="relative bg-gradient-to-r from-navy-900 via-navy-800/80 to-navy-900 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-extrabold text-white mb-2">Ready to simplify your freight?</h3>
              <p className="text-steel-400 text-sm">Get a free rate quote in under 60 seconds.</p>
            </div>
            <button
              onClick={onGetQuote}
              className="btn-amber inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold flex-shrink-0"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-3">
            <a href="/#" className="flex items-center mb-5">
              <img
                src="/logo.jpeg"
                alt="People Logistic Integrate Services"
                className="h-14 w-auto object-contain rounded-xl"
              />
            </a>
            <p className="text-sm text-steel-500 leading-relaxed mb-6">
              Modern freight brokerage powered by real-time data and carrier expertise.
              Moving America's freight, coast to coast.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3">
              <a href="tel:+18005550192" className="flex items-center gap-2.5 text-sm text-steel-400 hover:text-amber-brand transition-colors">
                <Phone className="w-4 h-4" />
                1-800-HAULX (428-5966)
              </a>
              <a href="mailto:hello@haulx.com" className="flex items-center gap-2.5 text-sm text-steel-400 hover:text-amber-brand transition-colors">
                <Mail className="w-4 h-4" />
                hello@haulx.com
              </a>
              <div className="flex items-start gap-2.5 text-sm text-steel-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>200 E Randolph St, Chicago, IL 60601</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {[
                { Icon: IconLinkedin, href: '#', label: 'LinkedIn' },
                { Icon: IconTwitter, href: '#', label: 'Twitter / X' },
                { Icon: IconYoutube, href: '#', label: 'YouTube' },
                { Icon: IconFacebook, href: '#', label: 'Facebook' },
              ].map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-steel-400 hover:text-amber-brand hover:border-amber-brand/40 transition-all"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <div className="text-xs font-bold text-white uppercase tracking-widest mb-5">
                  {category}
                </div>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-steel-500 hover:text-steel-200 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-steel-600">
            © {new Date().getFullYear()} HaulX Logistics, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-steel-600 hover:text-steel-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-steel-600 hover:text-steel-300 transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-steel-600 hover:text-steel-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
