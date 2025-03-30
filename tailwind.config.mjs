// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#094141',
          DEFAULT: '#008080',
          light: '#CFFDFE',
        },
        secondary: {
          light: '#F8F8FF',
          blue: '#C5E6FF',
          purple: '#E5DEFE',
          green: '#9CDCB7',
        }
      },
      fontFamily: {
        heading: ['Georgia', 'serif'],
        body: ['Proxima Nova', 'sans-serif'],
      }
    },
  },
  plugins: [],
}