module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#3e4061",
        secondary: "#3e4061",
        body: "#60a2bd",
      },
      outline: {
        initial: "2px solid rgba(229, 231, 235, var(--tw-bg-opacity))",
        final: "2px solid rgba(156, 163, 175, var(--tw-bg-opacity))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
