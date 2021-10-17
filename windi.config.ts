import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  /* configurations... */
  theme: {
    extend: {
      colors: require('daisyui/colors'),
    },
  },
  plugins: [
    require('daisyui'),
    require('windicss/plugin/typography'),
    require('windicss/plugin/forms'),
    // ...
  ],
})