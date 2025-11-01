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
        // Primary colors - Rich purple from logo (main brand color) - more saturated
        primary: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#9d4edd", // Richer, more saturated purple - closer to logo
          600: "#7b2cbf",
          700: "#6a1d9e",
          800: "#56197d",
          900: "#4a1570",
          950: "#2d0a4a",
        },
        // Accent colors - Vibrant purple (vault theme)
        accent: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c77dff", // Vibrant purple accent
          500: "#9d4edd", // Matches primary
          600: "#7b2cbf",
          700: "#6a1d9e",
          800: "#56197d",
          900: "#4a1570",
        },
        // Purple variants for gradients - richer tones
        purple: {
          300: "#c77dff",
          400: "#b062db",
          500: "#9d4edd", // Main purple
          600: "#7b2cbf",
          700: "#6a1d9e",
          800: "#56197d",
        },
        // Electric purple for highlights
        electric: {
          400: "#b062db",
          500: "#9d4edd",
          600: "#7b2cbf",
        },
      },
    },
  },
  plugins: [],
};
export default config;