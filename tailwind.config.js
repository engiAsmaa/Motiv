module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
      fontFamily: {
        DMSans: ["DM Sans"],
        Effra: ["Effra"],
        Poppins: ["Poppins"],
        // SegoeUISemibold: ["SegoeUI-Semibold"],
      },
      colors: {
        "light-black": "#242731",
        "dark-black":"#1F2128",
        "light-gray": "#F5F4F6",
        "semiLight-gray": "#F3F5F8",
        "dark-gray": "#7C7C8D",
        "semiDark-gray": "#5F6165",
        "body-gray": "#F5F5F5",
        "dark-green": "#0F2837",
        "dark-orange": "#FF9619",
        text: {
          100: "#000",
          200: "#4a4a4a",
          300: "#8a8a8a",
        },
      },
    },
  },
  plugins: [],
};
