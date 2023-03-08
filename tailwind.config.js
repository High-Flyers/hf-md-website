module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "my-background": "#F5F5F5",
        "my-foreground": "#37371F",
        "my-button": "#5B8E7D",
        "my-contrast": "#8884FF",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        saira: ["Saira", "sans-serif"],
      },
      fontSize: {
        xs: '16px',
        sm: '20px',
        base: '24px',
        lg: '28px',
        xl: '36px',
        '2xl': '48px',
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
