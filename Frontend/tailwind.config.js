/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor : "#74BA10",
        hoverPrimaryColor : "#3A5A0D",
        deleteColor : "#b91c1c",
        deleteHoverColor : "#a71919",
        bgGrayColor : "#F8F9FA",
        "primary-300" : "#f1f7e9",
        "primary-400" : "#d5e7ba",
        "primary-500" : "#92C14E",
        // Normal : primary-600
        "primary-600" : "#74BA10",
        "primary-700" : "#6b9f1f",
        "primary-800" : "#476a14",
        "primary-900" : "#36500f",
        "primary-950" : "#2a3e0c",
      },
      screens: {
        'xs' : '305px',
        'md-2': '912px',     
        'lg-2': '1112px',     
      },
      dropShadow: {
        text : '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        poppins : ['Poppins', 'sans-serif'],
      },
      animation:{
        'fade-in-out': 'fadeInOut 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInOut: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

