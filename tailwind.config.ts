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
    },
  },
  plugins: [],
};

export default config;
