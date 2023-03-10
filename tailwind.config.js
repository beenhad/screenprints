/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        dark: {
          DEFAULT: "#090C10",
          100: "#0D1117",
          700: "#21262D",
        },
        "soft-gray": "#F0F2F8",
      },
      boxShadow: {
        "card-inset": "rgb(48 54 61) 0px 0px 0px 2px inset",
        card: "rgb(48 54 61) 0px 0px 0px 2px",
        "card-hover": "rgb(48 54 61) 0px 0px 0px 5px",
      },
      borderRadius: {
        "32px": "32px",
      },
    },

    screens: {
      xs: "350px",
      sm: "640px",
      md: "800px",
      lg: "1201px",
      xl: "1400px",
      "2xl": "1600px",
    },
  },
  plugins: [],
};
