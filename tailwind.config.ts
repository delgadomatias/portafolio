/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  typography: {
    DEFAULT: {
      css: {
        pre: {
          color: false,
        },
        code: {
          color: false,
        },
      },
    },
  },
  theme: {
    extend: {
      backgroundColor: {
        primary: {
          "50": "#f5f6f6",
          "100": "#e5e7e8",
          "200": "#cdd0d4",
          "300": "#aab0b6",
          "400": "#808890",
          "500": "#656d75",
          "600": "#565c64",
          "700": "#4a4e54",
          "800": "#414449",
          "900": "#393b40",
          "950": "#161719",
        },
        primarySlate: "#1C1D1F",
      },
      fontFamily: {
        title: ["Franie"],
        sans: ["Plus Jakarta Sans"],
        junction: ["Junction"],
        inter: ["Inter"],
      },
      colors: {
        primary: "var(--text-color-primary)",
        secondary: "var(--text-color-secondary)",
        paragraph: "var(--text-color-paragraph)",
        paragraphHighlight: "var(--text-color-paragraph-highlight)",
      },
      minHeight: {
        screenMinusNavbar: "calc(100dvh - 68px)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
