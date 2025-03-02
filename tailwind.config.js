/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        pulse: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'], // Use Space Grotesk as the default sans-serif font
      },
      colors: {
        primary: {
          DEFAULT: '#8B5CF6',
          dark: '#7C3AED',
          light: '#A78BFA',
        },
        dark: {
          DEFAULT: '#0B0F19',
          lighter: '#111827',
          light: '#1F2937',
          card: '#151C2C',
        },
        accent: {
          blue: '#60A5FA',
          green: '#10B981',
          purple: '#8B5CF6',
          pink: '#EC4899',
        },
      },
      boxShadow: {
        neon: '0 0 5px theme("colors.primary.DEFAULT"), 0 0 20px rgba(139, 92, 246, 0.3)',
        'neon-lg':
          '0 0 10px theme("colors.primary.DEFAULT"), 0 0 30px rgba(139, 92, 246, 0.5)',
      },
    },
  },
  plugins: [],
};
