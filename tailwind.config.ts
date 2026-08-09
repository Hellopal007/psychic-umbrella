import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        graphite: "#10110f",
        ink: "#171816",
        line: "#2b2d29",
        paper: "#f4f1e8",
        muted: "#a5a39a",
        signal: "#d8ff57",
        "signal-dim": "#a8c946",
      },
      fontFamily: {
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: { eyebrow: "0.14em" },
      boxShadow: { surface: "0 1px 0 rgb(255 255 255 / 0.035%) inset, 0 12px 30px rgb(0 0 0 / 0.14)" },
      keyframes: {
        "meter-fill": { from: { transform: "scaleX(0)" }, to: { transform: "scaleX(1)" } },
        "status-pulse": { "0%, 100%": { opacity: "1" }, "50%": { opacity: "0.42" } },
      },
      animation: { "meter-fill": "meter-fill 700ms cubic-bezier(.16,1,.3,1) both", "status-pulse": "status-pulse 2.4s ease-in-out infinite" },
    },
  },
  plugins: [],
};

export default config;
