import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#5B9A2F",
          "green-hover": "#4c8426",
          "green-light": "#eaf5e3",
          forest: "#0B2E22",
          "forest-light": "#134232",
          orange: "#E8890C",
          "orange-hover": "#cf7705",
          "orange-light": "#fef3e2",
          cream: "#F3F4F2",
          dark: "#1A202C",
        },
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "sans-serif"],
        heading: ["var(--font-montserrat)", "sans-serif"],
        accent: ["var(--font-playfair)", "serif"],
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(11, 46, 34, 0.08)",
        "card-hover": "0 20px 40px -15px rgba(11, 46, 34, 0.16)",
        float: "0 12px 35px -8px rgba(91, 154, 47, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;

