import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#627E83",
          200: "#2D545E",
        },
        secondary: {
          100: "#BB5A68",
          200: "#A4243B",
        },
        background: {
          100: "#FCFCFC",
        },
        text: {
          100: "#999999",
          200: "#343434",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
