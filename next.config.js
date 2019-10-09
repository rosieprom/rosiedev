const withCSS = require('@zeit/next-css')
module.exports = withCSS({

  exportPathMap: function () {
    return {
      '/': { page: '/index' },
      '/work': { page: '/work' },
      '/about': { page: '/about' },
      '/volunteering': { page: '/volunteering' }
    }
  }
})
