/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        violet: {
          [900]: "#10002b",
          [800]: "#240046",
          [700]: "#3c096c",
          [600]: "#5a189a",
          [500]: "#7b2cbf",
          [400]: "#9d4edd",
          [300]: "#c77dff",
          [200]: "#e0aaff",
          [100]: "#eed6ff"
        }
      }
    },
  },
  plugins: [],
}

