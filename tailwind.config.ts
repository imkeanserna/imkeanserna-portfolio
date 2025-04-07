/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        tasman: {
          200: '#D1DBD1',
          700: '#4A5E4A'
        },
        haze: {
          200: '#DAD5E8',
          700: '#5C4E8C'
        },
        almond: {
          200: '#F0E6D9',
          700: '#8C6D45'
        }
      }
    }
  },
  plugins: [],
}
