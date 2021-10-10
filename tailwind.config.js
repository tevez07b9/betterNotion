module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightGrey: "#474C50",
        midGrey: "#373C3F",
        darkGrey: "#2F3437",
        cyan: "rgba(46, 170, 220, 0.15)",
        textWhite: "rgba(255, 255, 255, 0.9)",
        textDark: "rgba(255, 255, 255, 0.4)",
        textGrey: "rgba(255, 255, 255, 0.6)",
      },
      boxShadow: {
        "modal-shadow":
          "rgb(15 15 15 / 10%) 0px 0px 0px 1px, rgb(15 15 15 / 20%) 0px 5px 10px, rgb(15 15 15 / 40%) 0px 15px 40px",
        "border-bottom": "rgb(255 255 255 / 7%) 0px 1px 0px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
