/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      maxWidth: {
        container: '900px'
      },

      colors: {
        'white-input': 'rgb(250 250 250 / 20%)',
        'header': '#574AE8',
      },
    },

    fontFamily: {
      lexa: ['Lexend Deca', 'sans-serif']
    },
  },
  plugins: [],
}

