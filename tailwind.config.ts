import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cloud-white": "#fafafa",
        "white-base": "#ffffff",
        "divider-grey": "#e5e5ec",
        "graphite-grey": "#4a4a4a",
        ash: "#8e8e9a",
        "rose-quartz": "#f7a5a5",
        matcha: "#afd9b5",
        tint: "#f4f4f9",
        "pastel-indigo": {
          light: "#a3a8d7",
          dark: "#8387ad",
        },
        "blush-pink": {
          light: "#f6c9d1",
          dark: "#c18aa0",
        },
        "butter-yellow": {
          light: "#fff3b0",
          dark: "#d9cf9c",
        },
        "mint-cream": {
          light: "#cff5e7",
          dark: "#aed0c3",
        },
      },
    },
  },
  plugins: [],
};

export default config;
