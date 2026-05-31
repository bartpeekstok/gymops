import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#10242B",
        slate: "#566970",
        line: "#E7ECEE",
        bg2: "#F5F8F9",
        primary: "#3E788E",
        "primary-dark": "#2D5F73",
        bright: "#2C8BA6",
        accent: "#5FB3A1",
        "accent-light": "#E8F4F1",
        navy: "#143842",
        "navy-card": "#1B4651",
        "off-white": "#E7EBEE",
        dark: "#000000",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
