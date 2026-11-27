/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#08080F',
          card:    '#0E0E1A',
        },
        pink:   { DEFAULT: '#FF2D78', light: '#FF6BA0', dark: '#CC1A58' },
        violet: { DEFAULT: '#9C27F4', light: '#B85AF7', dark: '#7510CC' },
        cyan:   { DEFAULT: '#00E5FF', light: '#66EEFF', dark: '#00AACC' },
        amber:  { DEFAULT: '#FF9500', light: '#FFB84D', dark: '#CC7700' },
        mint:   { DEFAULT: '#00E676', light: '#5EF0A0', dark: '#00B359' },
      },
      fontFamily: {
        sans:    ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        'primary-gradient':  'linear-gradient(135deg, #FF2D78 0%, #9C27F4 100%)',
        'hero-gradient':     'linear-gradient(135deg, #08080F 0%, #12061E 40%, #0A0A18 70%, #04040A 100%)',
        'cyan-gradient':     'linear-gradient(135deg, #00E5FF 0%, #9C27F4 100%)',
        'warm-gradient':     'linear-gradient(135deg, #FF9500 0%, #FF2D78 100%)',
      },
      animation: {
        'float':     'float 6s ease-in-out infinite',
        'spin-slow': 'spin 22s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-18px)' },
        },
      },
      boxShadow: {
        'glow-pink':   '0 0 32px rgba(255,45,120,0.5)',
        'glow-violet': '0 0 32px rgba(156,39,244,0.5)',
        'glow-cyan':   '0 0 32px rgba(0,229,255,0.5)',
      },
    },
  },
  plugins: [],
}
