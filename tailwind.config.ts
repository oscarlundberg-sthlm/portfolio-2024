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
      screens: {
        custom: "465px",
        "3xl": "1728px",
        "3xl+": "1729px",
      },
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
        // custom:
        white: "#FCF9EF",
        black: "#121212",
        green: {
          700: "#485C5B",
          800: "#303D3C",
          900: "#1D2424",
          950: "#0F1D1C",
        },
        "green-gray": {
          800: "#222625",
        },
        accent: "#FAB700",
        "green-dark-accent": "#1E644B",
        custom: {
          gray: "#313131",
          red: "#992E2E",
          blue: "#304457",
          beige: "#C1AF8A",
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
  future: {
    hoverOnlyWhenSupported: true,
  },
};
export default config;
