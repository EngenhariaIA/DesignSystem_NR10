/** =====================================================================
 *  NR·10 PREMIUM — Tailwind theme (Design System "Autoridade Elétrica")
 *  O Claude Design lê este arquivo no onboarding para extrair os tokens.
 *  Compatível com Tailwind v3+. Cole em tailwind.config.js do projeto.
 *  ===================================================================== */
module.exports = {
  theme: {
    extend: {
      colors: {
        navy:   { 900: '#05080F', 800: '#0A0F1E', 700: '#111827', 600: '#161F33', 500: '#1F2A40' },
        gold:   { 300: '#FFE033', 400: '#FACC15', 500: '#EAB308', 600: '#CA9A08' },
        electric:{ 400: '#3B82F6', 600: '#1D4ED8' },
        line:   { DEFAULT: '#243049', soft: '#1A2336' },
        safety: { danger: '#EF4444', success: '#22C55E' },
        glyph:  '#06090F',
        ink:    { DEFAULT: '#F9FAFB', muted: '#9CA3AF', faint: '#6B7280' },
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(140deg,#FFE033 0%,#FACC15 42%,#CA9A08 100%)',
        'gradient-bolt': 'linear-gradient(180deg,#FFE033 0%,#FACC15 55%,#E0A906 100%)',
        'gradient-electric': 'linear-gradient(140deg,#3B82F6,#1D4ED8)',
      },
      fontFamily: {
        display: ['Saira', 'sans-serif'],
        body: ['IBM Plex Sans', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      fontSize: {
        micro: '0.72rem',
        small: '0.875rem',
        body: '1rem',
        h3: '1.375rem',
        h2: '2rem',
        h1: '2.75rem',
        'display-l': '3rem',
        'display-xl': '4.5rem',
      },
      lineHeight: { tight: '1.04', snug: '1.25', body: '1.6' },
      letterSpacing: { display: '-0.01em', mono: '0.1em', kicker: '0.3em' },
      borderRadius: { sm: '8px', md: '12px', lg: '18px', xl: '22px', tile: '25%', pill: '100px' },
      boxShadow: {
        card: '0 14px 40px -20px rgba(0,0,0,.6)',
        cta: '0 14px 34px -12px rgba(250,204,21,.6)',
        'tile-glow': '0 10px 30px -10px rgba(250,204,21,.5), inset 0 2px 0 rgba(255,255,255,.5)',
      },
    },
  },
};
