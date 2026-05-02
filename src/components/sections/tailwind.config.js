/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode based on 'dark' class
  theme: {
    extend: {
      colors: {
        // Updated dark mode palette
        dark: {
          DEFAULT: '#021C16', // Page background
          light: '#05382C',  // Surface for cards/sections
        },
        primary: {
          DEFAULT: '#D7F5BB', // Primary accent
          hover: '#E6FFC4',   // Button hover
        },
        secondary: {
          DEFAULT: '#054431', // Secondary accent
        },
        border: {
          DEFAULT: '#1F5A48', // Borders/dividers
        },
        text: {
          primary: '#F0FEE5', // Heading text
          secondary: '#D4E6CA', // Body text
          muted: '#8AA884', // Subtle text
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example font, replace with your brand font
        mono: ['Fira Code', 'monospace'], // Example font
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionDuration: {
        '300': '300ms',
      },
    },
  },
  plugins: [],
}