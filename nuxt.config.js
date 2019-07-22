module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Recontact.Me - Travelling Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Articles of the world trip of Pierre and Benoît - South America, Oceania, Asia, Europa, Central America' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://www.recontact.me' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'manifest',  href: '/manifest.json' }
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
};

