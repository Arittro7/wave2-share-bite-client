
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Raleway: "'Raleway', sans-serif"
      },
      textColor: {
        black: '#000',
        white: '#fff',
      },
    },
    container: {
      center: false,
      padding: '0',
      screens: {
        DEFAULT: '100%',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "forest"],
  },
}

