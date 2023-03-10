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
        "my-contrast": "#8884FF",
        "my-postshow": "#EFF2EF",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        saira: ["Saira", "sans-serif"],
      },
      spacing: {
        footer: "90vh",
        menubar: "80vw",
        px2: "2px",
        accent: "0.38rem",
      },
    },
  },
  plugins: [],
};
