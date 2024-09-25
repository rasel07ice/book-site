/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5956E9",
        backPrimay: "#FAB8C5",
        backSecondary: "#F9F9F9",
      },
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 100 },
      },
    },
    animation: {
      fadeIn: "fadeIn 0.2s ease-in-out forwards",
    },

    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Ubuntu: ["Ubuntu", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "3rem",
        md: "3rem",
        lg: "10rem",
        xl: "12rem",
      },
    },
  },
  plugins: [],
};
