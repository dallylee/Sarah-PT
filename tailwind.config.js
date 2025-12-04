/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx"
  ],
  theme: {
    extend: {
      colors: {
        'london-green': '#1A3C34', // Deep rich green
        'park-green': '#4A6C58',   // Softer sage green
        'stone': '#F2F0E9',        // Warm background
        'stone-light': '#F9F8F6',  // Lighter background
        'gold': '#C5A065',         // Muted luxury accent
        'charcoal': '#2C3333',     // Soft black for text
        'cream': '#FDFBF7',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}