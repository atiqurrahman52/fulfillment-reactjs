/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: '320px',
      sm: '375px',
      lsm: '425px',
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        sm: "16px",
        md: "20px",
        lg: "24px",
        xl: "40px",
        "2xl": "60px",
      },
    },
    extend: {
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        workSans: ["Work Sans", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: "#393E50",
        secondary: "#E78DD2",
        tertiary: "#AFB8C4",
        success: "#2A9D8F",
        accent: "#ECF1F4",
        light: "#FAFCFE",
        gray: "#B0B2B9",
      },
      backgroundImage: {
        "contact-bg": "url('/assets/images/contact/contact.png')",
        // "about-bg": "url('/assets/images/about/about-bg.png')",
        "about-bg": "url('./src/assets/images/about/about-bg.png')",
      },
    },
  },
  plugins: [],
};
