/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        cabinet: ["Cabinet Grotesk", "sans-serif"],
        inter: ["Inter Tight", "sans-serif"],
      },
    },
    colors: {
      grshade: "#697283",
      blshade: "#0568FD",
    },
  },
  plugins: [require("flowbite/plugin")],
};
