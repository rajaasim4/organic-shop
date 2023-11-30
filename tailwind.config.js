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
      fontFamily: {
        nunito: ["Nunito", "sans - serif"],
      },
      width: {
        95: "95%",
        80: "80%",
      },
      colors: {
        primary_green: "#22c157",
        primary_dark_green: "#007d56",
        light_gray: "#10101075",
      },
      backgroundColor: {
        primary_bg: "#007d56",
        btn_bg: "#fb7645",
        primary_red: "#ff4e2d",
      },
      backgroundImage: {
        gradient_bg: "linear-gradient(180deg, #22c157, #1a614f)",
        gradient_lines:
          "linear-gradient(270deg, rgba(255,255,255,0) 17%, #22c157 100%);",
        nav_bg:
          "linear-gradient(135deg,rgb(238,238,238) 50%,rgb(238,238,238) 50%)",

        hero: "url('./assets/images/Hero_bg.jpg')",
        hero_right_1_bg: "url('./assets/Images/Hero-right-bg1.jpg')",
        hero_right_2_bg: "url('./assets/Images/Hero-right-bg2.jpg')",
        shipping_bg: "url('./assets/Images/nav-shipping-bg.jpg')",
        noplastic_main: "url('./assets/Images/no_plastic_main.jpg')",
        noplastic_main_right:
          "url('./assets/Images/no_plastic_main-right.jpg')",
        best_deals_bg: "url('./assets/Images/best-deal_banner.jpg')",
        sale_left_bg: "url('./assets/Images/Sale-left-bg.jpg')",
        sale_right_bg: "url('./assets/Images/Sale-right-bg.jpg')",
      },
    },
  },
  plugins: [],
};
