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
        primary: "var(--background-primary)",
      },
      fontFamily: {
        title: ["Franie"],
        sans: ["Plus Jakarta Sans"],
        junction: ["Junction"],
      },
      colors: {
        primary: "var(--text-color-primary)",
        secondary: "var(--text-color-secondary)",
        paragraph: "var(--text-color-paragraph)",
        paragraphHighlight: "var(--text-color-paragraph-highlight)",
      },
      minHeight: {
        screenMinusNavbar: "calc(100dvh - 78px)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
