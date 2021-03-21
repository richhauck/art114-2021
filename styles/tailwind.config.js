module.exports = {
    purge: {
      content: ['_site/**/*.html'],
      options: {
        safelist: [],
      },
    },
    theme: {
      extend: {
        colors: {
          red: "var(--primary)",
          blue: '#3081F2',
          headertextcolor: '#353843',
          textColor: '#707070',
          darkgray: '#353843',
          lightgray: '#F9F9FA',
          bordercolor: '#DCDEE6'
        },
      },
    },
    variants: {},
    plugins: [],
  }
  
  