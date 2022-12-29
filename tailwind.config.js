/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF8C00",
          secondary: "#E74C3C",
          accent: "#3498DB",
          neutral: "#654321",
          "base-100": "#ffffff",
        },
      },
      "whait",
      "cupcake",
    ],
  },
}
