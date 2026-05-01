import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3E788E",
        "primary-dark": "#2d5f73",
        accent: "#66B3A3",
        "accent-light": "#e8f4f1",
        navy: "#183D47",
        "navy-card": "#1e3a45",
        "off-white": "#E7EBEE",
        dark: "#000000",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
