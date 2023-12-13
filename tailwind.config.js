/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '360px', // we are defining a custom breakpoint 'xs' at 480 pixels
      },
    },
  },
  plugins: [],
}

