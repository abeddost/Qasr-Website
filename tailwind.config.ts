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
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          gold: "#cda349",
          "gold-dark": "#b88728",
          charcoal: "#19120c",
          cream: "#f7f1e6",
          sand: "#efe3d0",
        },
      },
    },
  },
  plugins: [],
};
export default config;
