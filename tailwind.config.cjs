/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        presentation: "color-change-5x 4s linear  infinite alternate both",
      },
      keyframes: {
        "color-change-5x": {
          "0%": {
            background: "#4a6183",
          },
          "25%": {
            background: "#385273",
          },
          "50%": {
            background: "#264362",
          },
          "75%": {
            background: "#143352",
          },
          to: {
            background: "#022441",
          },
        },
      },
    },
  },
  plugins: [],
};
