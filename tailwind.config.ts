import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.stone,
        valencia: {
          "50": "#fdf3f3",
          "100": "#fce4e4",
          "200": "#facece",
          "300": "#f6abab",
          "400": "#ee7b7b",
          "500": "#e24b4b",
          "600": "#cf3333",
          "700": "#ae2727",
          "800": "#902424",
          "900": "#782424",
          "950": "#410e0e",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
