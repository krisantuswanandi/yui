const defaultTheme = require("tailwindcss/defaultTheme");
const containerQuery = require("@tailwindcss/container-queries");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      "2xs": "580px",
    },
    extend: {
      fontFamily: {
        serif: ['"Vidaloka"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [containerQuery],
};
