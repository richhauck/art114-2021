module.exports = {
    plugins: [
      require('postcss-nested'),
      require('postcss-import'),
      require(`tailwindcss`)(`./styles/tailwind.config.js`),
      require(`autoprefixer`),
      require('cssnano')({
        preset: 'default',
      }),
    ],
  }