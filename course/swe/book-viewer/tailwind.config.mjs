/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Custom semantic colors for pedagogical elements
        concept: {
          light: '#dbeafe', // blue-100
          dark: '#1e3a5f',
          border: '#3b82f6', // blue-500
        },
        question: {
          light: '#fef3c7', // amber-100
          dark: '#78350f',
          border: '#f59e0b', // amber-500
        },
        checkpoint: {
          light: '#d1fae5', // emerald-100
          dark: '#064e3b',
          border: '#10b981', // emerald-500
        },
        exercise: {
          light: '#f3e8ff', // purple-100
          dark: '#581c87',
          border: '#a855f7', // purple-500
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            code: {
              backgroundColor: 'var(--tw-prose-pre-bg)',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
