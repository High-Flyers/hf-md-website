module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "my-background": "#FFFFFF",
        "my-postshow": "#F0F0F0",
        "my-foreground": "#001524",
        "my-dark-background": "#D9D9D9",
        "my-button": "#7B8CDE", // #50808E
        "my-button-hover": "#8884FF",
        "my-contrast": "#8884FF", // #7C809B
        "my-contrast-hover": "#C4C2FF",
        "my-special": "#F6AE2D",
        "my-gray": "#8896AB",
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
        "4xl": "48px",
        "5xl": "56px",
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
        "2xl": "1300px",
      },
      boxShadow: {
        "shift-solid": "9px 9px 0px -2px #304C76, 19px 19px 0px -4px #001024",
      },
    },
  },
  plugins: [],
};
