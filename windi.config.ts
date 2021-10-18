import { transform, defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
  darkMode: 'class', // or 'media'

  theme: {
    extend: {
      colors: transform('daisyui/colors'),
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
        serif: ['Noto Sans JP', 'serif'],
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [
    require('windicss/plugin/forms'),
    require('windicss/plugin/typography'),
    transform('daisyui')
  ],
})