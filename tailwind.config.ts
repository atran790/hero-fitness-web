import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Headspace-inspired palette
        hero: {
          orange: "#F58B44",
          tangerine: "#F06E1D",
          buttermilk: "#FDF5EB",
          slate: "#4B5161",
          sky: "#52B6DE",
          blue: "#0C6FF9",
          azure: "#00A4FF",
          green: "#01A652",
          purple: {
            dark: "#36256B",
            mid: "#4E3BA0",
            light: "#C9BAFF",
          },
          yellow: "#FFCE00",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        sans: ["system-ui", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        anton: ["var(--font-anton)", "sans-serif"],
      },
      borderRadius: {
        'hero': '32px',
        'xl': '24px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'breathe': 'breathe 4s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
