module.exports = {
  content: [
      './public/**/*.html',
      './public/**/*.js'
  ],
  theme: {
    extend: {
        colors:{
            'violet':
            {
                DEFAULT:'hsl(257, 40%, 49%)'
            },
            'magenta':
            {
                DEFAULT: 'hsl(300, 69%, 71%)'
            }
        },
        fontFamily:
            {
                'poppins':['Poppins'],
                'open-sans':['Open Sans']
            },
        fontSize:
            {
                '4.5xl':'2.5rem'
            }

    },
  },
  plugins: [],
}
