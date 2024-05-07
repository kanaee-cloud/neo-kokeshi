/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    fontWeight: {
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    fontFamily: {
      primary: "Poppins",
      secondary: "Poppins",
      tertiary: "Poppins",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        site: "#212A3E",
        accent: "#099ffc",
      },
      backgroundImage: {
        space:
          "linear-gradient(153deg, rgba(0,0,0,0.8295693277310925) 0%, rgba(0,0,0,0.4150035014005602) 100%),url(./assets/bgComing.gif)",
        landing:
          "linear-gradient(153deg, rgba(0,0,0,0.8295693277310925) 0%, rgba(0,0,0,0.4150035014005602) 100%),url(./assets/bgLanding.jpg)",
      },
    },
  },
  plugins: [],
};
