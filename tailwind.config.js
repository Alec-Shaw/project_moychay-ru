/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        plants: "url('/src/assets/Plants.png')",
        plantss: "url('/src/assets/Plants_little.png')",
        check: "url('/src/assets/Check.svg')",
        point: "url('/src/assets/ChevronDownIcon.svg')",
      },
    },
  },
  plugins: [],
};
