/* eslint-disable no-param-reassign */

import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// TODO extract lang + check config

console.log('process.env.LANGUAGE')
console.log(process.env.LANGUAGE)
export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: process.env.LANGUAGE,
    fallbackLocale: 'fr',
    messages: {
      'en': require('~/locales/en.json'),
      'fr': require('~/locales/fr.json')
    }
  })

  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }

    return `/${app.i18n.locale}/${link}`
  }
}
