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
        background: "#ff8f00",
      },
      fontFamily: {
        nunito: ['Nunito, sans-serif'],
        afacad: ['Afacad Flux, sans-serif']
      }
    },
  },
  plugins: [],
};
export default config;
