/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      gray: {
        white: "#FFFFFF",
        title: "#E1E1E6",
        text: "#C4C4CC",
        label: "#8D8D99",
        placeholder: "#7C7C8A",
        divider: "#323238",
        element: "#202024",
        background: "#121214",
      },
      brand: {
        light: "#00B37E",
        principal: "#00875F",
        dark: "#015F43",
      },
      error: {
        text: "#F03847",
        assets: "#CC2937",
      },
    },
    extend: {},
  },
  plugins: [],
};
