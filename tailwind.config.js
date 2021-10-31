module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      color: {
        initial: "2px solid rgba(229, 231, 235, var(--tw-bg-opacity))",
        final: "2px solid rgba(156, 163, 175, var(--tw-bg-opacity))",
      },
    },
  },
  plugins: [],
};
