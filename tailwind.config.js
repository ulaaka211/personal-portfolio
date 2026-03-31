/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "grid-pattern":
          "linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-40": "40px 40px",
      },
      colors: {
        carbon: {
          950: "#050709",
          900: "#0a0e1a",
          800: "#0f1629",
          700: "#131d35",
          600: "#1a2744",
          500: "#1f3458",
        },
        neon: {
          cyan: "#00d4ff",
          purple: "#7c3aed",
          green: "#10b981",
          amber: "#f59e0b",
          pink: "#ec4899",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "Cascadia Code", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-cyan": "glow-cyan 2s ease-in-out infinite alternate",
        "blink": "blink 1s step-end infinite",
        "slide-up": "slideUp 0.6s ease-out",
        "fade-in": "fadeIn 0.8s ease-out",
        "scan": "scan 3s linear infinite",
      },
      keyframes: {
        "glow-cyan": {
          "0%": { boxShadow: "0 0 5px rgba(0,212,255,0.3)" },
          "100%": { boxShadow: "0 0 20px rgba(0,212,255,0.8), 0 0 40px rgba(0,212,255,0.3)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      boxShadow: {
        "neon-cyan": "0 0 10px rgba(0,212,255,0.5), 0 0 20px rgba(0,212,255,0.2)",
        "neon-purple": "0 0 10px rgba(124,58,237,0.5), 0 0 20px rgba(124,58,237,0.2)",
        "neon-green": "0 0 10px rgba(16,185,129,0.5), 0 0 20px rgba(16,185,129,0.2)",
      },
    },
  },
  darkMode: "class",
  plugins: [require("daisyui")],
};
