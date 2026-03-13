/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F3F77", // Blue from BRAND.md
        accent: "#E46C1A",  // Orange from BRAND.md
        dark: "#1A1A1A",
        bg: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
