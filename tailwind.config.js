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
    },
  },
  plugins: [],
};
