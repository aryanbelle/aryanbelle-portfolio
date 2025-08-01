/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        "pulse": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-rotate-right": "float-rotate-right 8s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "float-rotate-left": "float-rotate-left 8s cubic-bezier(0.4, 0, 0.2, 1) 2s infinite",
        "just-float": "just-float 8s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "just-float-delayed": "just-float 8s cubic-bezier(0.4, 0, 0.2, 1) 2s infinite",
        "spin-slow": "spin 8s linear infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite",
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
        xl: "var(--radius-xl)",
      },
      boxShadow: {
        neon: '0 0 5px theme("colors.primary.DEFAULT"), 0 0 20px rgba(139, 92, 246, 0.3)',
        'neon-lg': '0 0 10px theme("colors.primary.DEFAULT"), 0 0 30px rgba(139, 92, 246, 0.5)',
        "2xs": "var(--shadow-2xs)",
        xs: "var(--shadow-xs)",
        sm: "var(--shadow-sm)",
        DEFAULT: "var(--shadow)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        "2xl": "var(--shadow-2xl)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "just-float": {
          "0%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(-20px)" },
          "75%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" }
        },
        "float-rotate-right": {
          "0%": { transform: "translateY(0) rotate(6deg)", transformOrigin: "center" },
          "25%": { transform: "translateY(-10px) rotate(6deg)", transformOrigin: "center" },
          "50%": { transform: "translateY(-20px) rotate(6deg)", transformOrigin: "center" },
          "75%": { transform: "translateY(-10px) rotate(6deg)", transformOrigin: "center" },
          "100%": { transform: "translateY(0) rotate(6deg)", transformOrigin: "center" }
        },
        "float-rotate-left": {
          "0%": { transform: "translateY(0) rotate(-6deg)", transformOrigin: "center" },
          "25%": { transform: "translateY(-10px) rotate(-6deg)", transformOrigin: "center" },
          "50%": { transform: "translateY(-20px) rotate(-6deg)", transformOrigin: "center" },
          "75%": { transform: "translateY(-10px) rotate(-6deg)", transformOrigin: "center" },
          "100%": { transform: "translateY(0) rotate(-6deg)", transformOrigin: "center" }
        },
        "bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
    },
  },
  plugins: [],
  safelist: ['animate-pulse'],
};
