/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00a9a5",
        secondary: "#2176ff",
        background: "#020202",
        card: "#FFFF00",
        lightprimary: "#005d5a",
        darkprimary: "#800000",
        lightsecondary: "#C0FFC0",
        darksecondary: "#008000",
        text: "#FEFFFE",
      },
      animation:["responsive", "motion-safe", "motion-reduce"]
    },
  },
  plugins: [],
};
