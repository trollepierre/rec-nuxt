export const state = () => ({
  locales: ['en', 'fr'],
  locale: 'en'
})

export const mutations = {
  SET_LANG (state, locale) {
    console.log('inside mutations set lang');
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}

