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
        special: ["Orbitron", "sans-serif"],
        base: ["Saira", "sans-serif"],
      },
      fontSize: {
        '2xs': '12px',
        xs: '14px',
        sm: '16px',
        base: '18px',
        lg: '22px',
        xl: '26px',
        '2xl': '36px',
      },
      spacing: {
        footer: "90vh",
        menubar: "80vw",
        px2: "2px",
        'accent-lg': "8px",
        'accent-sm': "5px"
      },
      screens: {
        xs: '300px',
        sm: '400px',
        xl: '1250px',
        '2xl': '1300px',
      },
    },
  },
  plugins: [],
};
