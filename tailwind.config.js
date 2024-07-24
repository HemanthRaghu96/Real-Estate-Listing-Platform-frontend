/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
          loginBackground: "url('https://www.transparenttextures.com/patterns/diagmonds-light.png')",
        },
        colors:{
          sidebarColor:"#f6f6fe",
          buttonColor:'#149bff',
        },
        fontFamily: {
          SourceSans3: ['Source Sans 3','sans-serif'],
        }
      },
    },
    plugins: [],
  }
  
  