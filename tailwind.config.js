/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    screens:{
      sm:"576px",
      md:"768px",
      lg:"992px",
      xl:"1200px",
     "2xl":"1320px",
    },
    container: {
      center: true,
      screens:{
        sm:"576px",
        md:"768px",
        lg:"992px",
        xl:"1200px",
       "2xl":"1320px",
      },
    },
    extend: {
      fontFamily:{
        dana:["dana"],
        kalameh:["kalameh"],
      },
      colors :{
        // Brown
        primaryBrownOne: '#663518' ,
        // Brown Light
        primaryBrownLightOne: '#FFF7ED',
        primaryBrownLightTwo: '#DDCDAF',
        // Green Light
        primaryGreenLightOne: '#A2B27D',
        // Black
        primaryBlackTwo: '#222222',
        primaryBlackSeven: '#757575'
      }
    },
  },
  plugins: [], 
}

