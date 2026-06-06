/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          light: '#1e3a6a',
          DEFAULT: '#0A1F44',
          dark: '#051024',
        },
        teal: {
          light: '#00a2b5',
          DEFAULT: '#008B9B',
          dark: '#007380',
        },
        accentRed: {
          light: '#ff4d6a',
          DEFAULT: '#FF2A4B',
          dark: '#d91433',
        },
        gold: {
          light: '#00a2b5',
          DEFAULT: '#008B9B',
          dark: '#007380',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
    },
  },
  plugins: [],
}
