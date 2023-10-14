/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./src/app.vue",
    "./src/error.vue",
  ],
  theme: {
    extend: {
      colors: {
        white: {
          DEFAULT: "#ffffff",
          300: "#bbb",
        },
        black: {
          DEFAULT: "#000000",
          300: "#262626",
        },
      },
    },
  },
  plugins: [],
};
