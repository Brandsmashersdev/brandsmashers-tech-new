/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandCyan: '#2CC5D9',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
       animation: {
        'loop-horizontal': 'loopHorizontal 20s linear infinite',
      },
      keyframes: {
        loopHorizontal: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }

    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.animate-loop-horizontal': {
          animation: 'loopHorizontal 10s linear infinite',
        }
      }
      addUtilities(newUtilities)
    })
  ],
  
};



