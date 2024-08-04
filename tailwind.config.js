/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        pressStart: ["Press\\ Start\\ 2P"],
      },
      width: {
        "700px": "700px",
      },
    },
  },
  plugins: [],
};
