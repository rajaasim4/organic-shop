/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xxl: { min: "1800px" },
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1024px" },
      slg: { max: "991px" },
      md: { max: "768px" },
      sm: { max: "540px" },
      xsm: { max: "377px" },
    },
    extend: {
      width: {
        95: "95%",
      },
      colors: {
        primary_green: "#22c157",
        primary_dark_green: "#007d56",
      },
      backgroundColor: {
        primary_bg: "#007d56",
        btn_bg: "#fb7645",
        primary_red: "#ff4e2d",
      },
      backgroundImage: {
        shipping_bg: "url('./assets/Images/nav-shipping-bg.jpg')",
        nav_bg:
          "linear-gradient(135deg,rgb(238,238,238) 50%,rgb(238,238,238) 50%)",
      },
    },
  },
  plugins: [],
};
