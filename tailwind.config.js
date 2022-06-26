/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    center: true,
    colors:{
      primary: "#ffffff",
      secondary: "#8e75bd",
      third: "#a08cc7",
      fourth: "#9179c1",
      fifth: "#e7eaf1",
      sixth: "#8c8c8c",
      seventh: "#44c5c7",
      ocatal: "#b7bfc5",
      ninth: "#967dc4",
      tenth: "#9980c7",
      ele: "#e1d9ef",
      twelth: "#9ca0ab",
      thirth: "#947cc3"
    },
    container: {
      center:true,
      padding: {
        md: "2rem",
        lg: "2rem",
        xl: "4rem", //8rem before
        xxl: "6rem",
        default: "1rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1440px",
      },
    },
    fontFamily:{
      "sintony": ["Sintony, sans-serif"],
      "montserrat": ["Montserrat, sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}
