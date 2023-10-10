/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      colors: {
        pilates: "#CDA19C",
        vert: "#A5B49D",
        rosebeige:"#FFB7B7",
        gris:"#44403C",
      },
      fontFamily: {
        biome: ["Biome W04 Light", "sans-serif"],
      },
    },
  },
};
