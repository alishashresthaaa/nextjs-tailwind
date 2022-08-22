/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/components/**/*.component.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    ".src/components/*",
    "./src/layouts/**/components/**/*.component.{js,ts,tsx,jsx}",
    "./src/layouts/**/*.layout.{js,ts,jsx,tsx}",
    "./pages/_app.tsx",
    ".src/assets/svg/*.svg",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
