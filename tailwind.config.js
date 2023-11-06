/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/components/**/8.{html,js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      "cupcake",
      "forest",
      "winter",
      "acid",
      "bumblebee",
      "dark",
      "synthwave",
      "halloween",
      "night",
      "luxury",
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
