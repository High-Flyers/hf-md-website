module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "my-background": "#FFFFFF",
        "my-foreground": "#37371F",
        "my-button": "#5B8E7D",
        "my-button-hover": "#7BA497",
        "my-contrast": "#8884FF",
        "my-postshow": "#EFF2EF",
      },
      fontFamily: {
        special: ["Orbitron", "sans-serif"],
        additional: ["Teko", "sans-serif"],
        base: ["Saira", "sans-serif"],
      },
      fontSize: {
        "2xs": "12px",
        xs: "14px",
        sm: "16px",
        base: "18px",
        lg: "22px",
        xl: "26px",
        "1xl": "30px",
        "2xl": "36px",
        "3xl": "40px",
        "4xl": "48px"
      },
      spacing: {
        footer: "100vh",
        menubar: "80vw",
        px2: "2px",
        "accent-lg": "8px",
        "accent-sm": "5px",
      },
      screens: {
        xs: "300px",
        sm: "400px",
        xl: "1300px",
        "2xl": "1300px"
      },
    },
  },
  plugins: [],
};
