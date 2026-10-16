/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050810',
          900: '#080d1a',
          800: '#0c1225',
          700: '#101830',
          600: '#1a2640',
          500: '#243454',
        },
        amber: {
          brand: '#F59E0B',
          light: '#FCD34D',
          glow: '#FBBF24',
        },
        steel: {
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      animation: {
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'truck-roll': 'truckRoll 3s linear infinite',
        'counter-up': 'counterUp 1s ease-out',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        truckRoll: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(245, 158, 11, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(245, 158, 11, 0.6)' },
        },
      },
      backgroundImage: {
        'hero-mesh': 'radial-gradient(at 20% 30%, rgba(245, 158, 11, 0.12) 0px, transparent 55%), radial-gradient(at 80% 10%, rgba(251, 191, 36, 0.08) 0px, transparent 45%), radial-gradient(at 50% 80%, rgba(16, 24, 48, 0.9) 0px, transparent 60%)',
        'dot-grid': 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
