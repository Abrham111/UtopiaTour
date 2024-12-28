/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        moveUpDown: {
          '0%, 100%': { transform: 'translateY(0)' }, // Start and end at the original position
          '50%': { transform: 'translateY(50px)' }, // Move up 50px at the midpoint
        },
      },
      animation: {
        moveUpDown: 'moveUpDown 3s ease-in-out infinite', // Define the new animation
      },
    },
  },
  plugins: [],
};
