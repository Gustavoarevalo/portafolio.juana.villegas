/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},

    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-bold": "800",
      black: "900",
    },
    colors: {
      turqueza: "#87CEFA",
      green: "#008000",
      black: "#000000",
      azul: "#4169E1",
      white: "#FFFFFF",
      amarillosuave: "#FAFAD2",
      rojopuro: "#FF0000	",
      rojooscuro: "#8B0000",
      amarillo: "#FFFFE0",
    },
    fontFamily: {
      juana: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
