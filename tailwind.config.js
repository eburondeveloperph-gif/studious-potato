/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        eburon: {
          400: "#6ee7b7",
          500: "#10b981",
          600: "#059669",
        },
      },
    },
  },
  plugins: [],
};
