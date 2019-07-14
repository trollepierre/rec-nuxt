module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'rec-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Recontact.me en Nuxt' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  // Pour i18n
  router: {
    // middleware: 'i18n'
  },
  plugins: [
    // '~/plugins/analytics.js',
    '~/plugins/i18n.js',
    '~/plugins/lazyload.js',
    // '~/plugins/modal.js',
    '~/plugins/notification.js'
  ],
  generate: {
    routes: [
      '/', '/admin', '/articles/:id',
      '/en', '/en/admin', '/en/articles/:id',
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

