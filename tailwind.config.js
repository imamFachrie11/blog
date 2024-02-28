/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "neon-blue": ["#2272FF"],
      },
      fontFamily: {
        alice: ["Alice"],
      },
    },
  },
  plugins: [],
};
