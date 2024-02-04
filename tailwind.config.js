/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1320px",
    },
    container: {
      center: true,
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1320px",
      },
    },
    extend: {
      fontFamily: {
        dana: ["dana"],
        kalameh: ["kalameh"],
      },

      colors: {
        primary: {
          brown: {
            100: "#663518",
            light: {
              100: '#FFF7ED',
              200: '#DDCDAF',
            },
          },
          green: {
            100: '#A2B27D',
          },
          black: {
            200: '#222222',
            700: '#757575',
          },
        },
      },

      // colors :{
      //   // Brown
      //   primary-brown-100: '#663518' ,
      //   //Light Brown 
      //   primaryBrownLightOne: '#FFF7ED',
      //   : '#DDCDAF',
      //   //Light Green 
      //   primary-green-100: '#A2B27D',
      //   // Black
      //   primaryBlackTwo: '#222222',
      //   primary-black-700: '#757575'
      // }
    },
  },
  plugins: [],
}
