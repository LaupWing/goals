module.exports = {
   purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
      fontFamily:{
         sans: ['Montserrat', 'sans-serif']
      },
      extend: {
         colors:{
            main:{
               yellow: '#FFCE2F',
               black: '#191919'
            }
         }
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
}
