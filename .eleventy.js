const now = String(Date.now())

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false)
  eleventyConfig.addWatchTarget('./_tmp/style.css')
  eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' })
  eleventyConfig.addWatchTarget('./_tmp/main.js')
  eleventyConfig.addPassthroughCopy({ './_tmp/main.js': './main.js' })


  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("apple-touch-icon.png");
//  eleventyConfig.addPassthroughCopy("styles");


  eleventyConfig.addShortcode('version', function () {
    return now
  })

  //eleventyConfig.pathPrefix('/eleventy-base-blog/')
}