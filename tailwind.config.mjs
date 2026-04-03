/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandOrange: '#ff5010',
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
  plugins: [],
  
};

export default config;



