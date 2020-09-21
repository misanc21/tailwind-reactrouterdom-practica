const tailwindcss = require('tailwindcss');
 module.exports = {
     plugins: [
         tailwindcss('./tailwind.js'),
         require('autoprefixer'),
     ],
     theme: {
        fontFamily: {
            'roboto': ['Roboto', 'sans-serif']

        }
      }
 };