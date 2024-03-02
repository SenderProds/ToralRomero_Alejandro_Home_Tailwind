/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./fuente/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {

      colors: {
         "paletaColor" : {
          "1" : "#bcebbe",
          "2" : "#10292a",
          "3" : "#2d4d4d",
          "4" : "#ffffff"
         }
      }
    }
  },
  plugins: [],
}

