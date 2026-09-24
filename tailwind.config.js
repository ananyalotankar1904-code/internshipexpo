/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        void: '#000000',
        surface: 'rgba(20, 10, 10, 0.90)',
        'surface-raised': '#1E1010',
        hairline: 'rgba(255, 244, 225, 0.12)',
        'hairline-input': 'rgba(255, 244, 225, 0.20)',
        'wave-crimson': '#8C1A1A',
        primary: '#B91C1C',
        accent: '#D96F2B',
        'text-primary': '#FFF4E1',
        'text-secondary': 'rgba(255, 244, 225, 0.68)',
        'light-accent': '#FFC9A9',
        'success-muted': '#22543d'
      },
      fontFamily: {
        display: ['"Clash Display"', 'sans-serif'],
        sans: ['"General Sans"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      }
    }
  }
}
