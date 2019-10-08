const withCSS = require('@zeit/next-css')
module.exports = withCSS({

  exportPathMap: function () {
    return {
      '/': { page: '/index' },
      '/about': { page: '/about' },
      '/volunteering': { page: '/volunteering' },
      '/work': { page: '/work' }
    }
  }
})
