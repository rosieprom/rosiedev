const withCSS = require('@zeit/next-css')
module.exports = withCSS({

  exportPathMap: function () {
    return {
      '/': { page: '/index' },
      '/volunteering': { page: '/volunteering' },
      '/work': { page: '/work' }
    }
  }
})
