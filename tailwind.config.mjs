/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        // You can extend Tailwind's default theme here
        colors: {
          // Example: Add your brand colors
          // 'primary': '#ff0000',
        },
        fontFamily: {
          // Example: Add custom fonts
          // 'sans': ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [
      // Add plugins here if needed
    ],
  }