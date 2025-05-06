/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ba8f95",
          light: "#e6d5d2",
          dark: "#8e5f66",
        },
        secondary: "#f5ebe0",
        accent: "#e2be9a",
        text: {
          DEFAULT: "#443736",
          light: "#8a7370",
        },
      },
      fontFamily: {
        serif: ["var(--font-inter)", "serif"],
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-in-out forwards",
        slideUp: "slideUp 0.8s ease-in-out forwards",
        float: 'float 3s ease-in-out infinite',
        'float-delayed': 'float 3s ease-in-out 1.5s infinite',
      },
      container: {
        center: true,
        padding: '1rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}; 