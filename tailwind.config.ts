import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        background: "hsl(222, 47%, 12%)",
        foreground: "hsl(0, 0%, 100%)",
        muted: "hsla(210, 40%, 96%, 0.35)",
        accent: {
          100: "#F1F5F9",
          200: "#E0F2FE",
          500: "#38BDF8",
          600: "#0284C7",
          700: "#0EA5E9"
        },
        primary: {
          DEFAULT: "#F472B6",
          foreground: "#0B1120"
        },
        secondary: {
          DEFAULT: "#6366F1",
          foreground: "#E0E7FF"
        },
        ring: "rgba(244, 114, 182, 0.45)",
        border: "rgba(255, 255, 255, 0.1)",
        card: "rgba(15, 23, 42, 0.75)",
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "Inter", "system-ui", "sans-serif"],
        display: ["'Syne'", "sans-serif"],
      },
      backgroundImage: {
        "hero-grid": "radial-gradient(circle at 25% 25%, rgba(56, 189, 248, 0.1), transparent 40%), radial-gradient(circle at 75% 75%, rgba(244, 114, 182, 0.12), transparent 45%)",
      },
      boxShadow: {
        neon: "0 0 40px rgba(14, 165, 233, 0.35)",
        glow: "0 15px 45px rgba(99, 102, 241, 0.35)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [animatePlugin],
};

export default config;
