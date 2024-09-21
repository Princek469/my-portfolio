/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        Suse : ["SUSE", "sans-serif"],
        // Add your custom cursive font here
      },
      animation: {
        'slow-bounce': 'slowBounce 3s infinite'
      },
    
      keyframes: {
        slowBounce: {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-15%)'
          }
        }
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,92,121,1) 35%, rgba(0,212,255,1) 100%)',
      },
    }
  },
  plugins: [],
}

