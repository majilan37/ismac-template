/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#faf9f8",
        gray: {
          100: "#828282",
          200: "#7e7e7e",
          300: "#242424",
          400: "#161616",
          500: "rgba(255, 255, 255, 0.76)",
          600: "rgba(0, 0, 0, 0.05)",
          700: "rgba(255, 255, 255, 0.84)",
          800: "rgba(255, 255, 255, 0.71)",
          900: "rgba(0, 0, 0, 0.06)",
          1000: "rgba(255, 255, 255, 0.64)",
          1100: "rgba(255, 255, 255, 0.15)",
        },
        white: "#fff",
        silver: "#bfbfbf",
        seashell: "#f8f2ee",
        chocolate: {
          100: "#e0661a",
          200: "#c84d00",
        },
        darkslategray: {
          100: "#424242",
          200: "#373737",
        },
        linen: "#f6ebe4",
        lightgray: "#ded1c9",
        peachpuff: "#eeccb6",
        gainsboro: "#e9e3e0",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        armata: "Armata",
      },
      borderRadius: {
        "81xl": "100px",
        "3xs": "10px",
      },
      fontSize: {
        base: "16px",
        "7xl": "26px",
        lg: "18px",
        xl: "20px",
        "61xl": "80px",
        "5xl": "24px",
        "21xl": "40px",
        "11xl": "30px",
        "3xl": "22px",
        "17xl": "36px",
        "2xl": "21px",
        inherit: "inherit",
      },
      screens: {
        mq1500: {
          raw: "screen and (max-width: 1500px)",
        },
        mq1225: {
          raw: "screen and (max-width: 1225px)",
        },
        mq850: {
          raw: "screen and (max-width: 850px)",
        },
        mq450: {
          raw: "screen and (max-width: 450px)",
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 45s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    // ...
  ],
};
