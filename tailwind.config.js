/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "700px": "700px",
      },
    },
  },
  plugins: [],
};
