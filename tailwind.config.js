/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // Includes root-level HTML files like index.html
    "./profile/**/*.html", // Includes all HTML files in the profile directory
    "./feed/**/*.html", // Includes all HTML files in the feed directory
    "./src/**/*.{js,ts,jsx,tsx}", // Includes any JavaScript/TypeScript files in src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};