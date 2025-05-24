module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
}
