<template>
  <div class="app-header">
    <header class="page__header">
      <div class="page__container page__header--container">
        <a
          :title="home"
          class="logo-link"
          href="/">
          <span class="logo-link__recontact">Recontact</span>
          <span class="logo-link__me">Me</span>
        </a>
        <nav
          class="app-header__navigation navigation"
          role="navigation"
          aria-label="site navigation">
          <ol class="navigation__links">
            <li
              v-if="showNavBarButton"
              class="navigation__link">
              <button
                class="navbar-action navbar-action__subscribe"
                type="button"
                @click.prevent="displaySubscribeModal">
                {{ $t("subscribe") }}
              </button>
            </li>
            <li
              v-if="showNavBarButton"
              class="navigation__link">
              <button
                class="navbar-action navbar-action__suggestion"
                type="button"
                @click.prevent="displayFeedbackModal">
                {{ $t("suggestion") }}
              </button>
            </li>
            <li
              v-if="showNavBarButton"
              class="navigation__link tdm">
              <a
                :title="tdm"
                class="navbar-action navbar-action__tdm"
                href="http://worldtour.recontact.me">
                <img
                  :alt="logo"
                  class="tdm__image"
                  src="/static/tdm.jpg">
              </a>
            </li>
            <li class="navigation__link other-language">
              <button
                class="navbar-action navbar-action__other-language"
                type="button"
                @click.prevent="switchLanguage">
                {{ $t("otherLanguage") }}
              </button>
            </li>
          </ol>
        </nav>
      </div>
    </header>
  </div>
</template>
<script>
  export default {
    name: 'AppHeader',
    data: () => ({ showNavBarButton: false, otherUrl: '' }),
    computed: {
      tdm() {
        return this.$t('tdm')
      },
      home() {
        return this.$t('home')
      },
      logo() {
        return this.$t('logo')
      },
      otherLanguage() {
        return this.$t('otherLanguage')
      },
    },
    mounted() {
      if (navigator.language.substring(0, 2) === 'fr' && window.location.host === 'www.recontact.me') {
        alert('La version française du blog est désormais disponible sur https://fr.recontact.me, cliquez sur le lien en haut à droite pour retrouver le blog en français.')
      }
    },
    methods: {
      switchLanguage() {
        window.location = this.$t('otherUrl') + window.location.pathname
      },

      displaySubscribeModal() {
      // this.$modal.show('subscribe-modal')
      },

      displayFeedbackModal() {
      // this.$modal.show('feedback-modal')
      },
    },
    i18n: {
      messages: {
        fr: {
          subscribe: 'S’abonner',
          suggestion: 'Laisser un message',
          problem: 'Un problème ?',
          tdm: 'Retrouver l’ancien site du tour du monde de Pierre et Benoît',
          home: 'Page d’accueil',
          logo: 'Logo du site',
          otherLanguage: 'English Blog',
          otherUrl: 'https://www.recontact.me',
        },
        en: {
          subscribe: 'Subscribe',
          suggestion: 'Leave a message',
          problem: 'A problem?',
          tdm: 'Go to see the former website of the world trip of Pierre and Benoît',
          home: 'Home page',
          logo: 'Logo of the site',
          otherLanguage: 'Blog en Français',
          otherUrl: 'https://fr.recontact.me',
        },
      },
    },
  }
</script>

<style scoped>
.page__header {
  height: 60px;
  background: #ffffff;
  border-bottom: 1px solid #e6e6e6;
  width: 100%;
  padding-left: 0;
}

.page__header--container {
  display: flex;
  justify-content: center;
}

.logo-link {
  text-decoration: none;
  font-size: 26px;
  font-weight: 900;
  display: inline-block;
  padding: 15px 0;
}

.logo-link:hover {
  outline: -webkit-focus-ring-color auto 5px;
}

.logo-link__recontact {
  color: #07c;
  padding-left: 10px;
}

.logo-link__me {
  color: #F48024;
}

.navbar-action {
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border: none;
  padding: 16px 0;
  line-height: 28px;
  color: #333333;
  display: inline-block;
}

.navbar-action:hover {
  text-decoration: underline;
  outline: -webkit-focus-ring-color auto 5px;
}

.navbar-action__suggestion,
.navbar-action__tdm {
  display: none;
}

.navigation__links {
  list-style: none;
  margin: 0;
  display: inline-flex;
}

.navigation__link {
  margin-left: 25px;
}

.page__container {
  margin: 0 auto;
}

.tdm {
  display: inline-flex;
}

.navbar-action__other-language {
  color: #F48024;
  text-decoration: unset;
  text-transform: uppercase;
  font-size: 14px;
}

.navbar-action__tdm {
  padding: 10px;
}

@media only screen and (min-width: 640px) {
  .page__header--container {
    justify-content: space-between;
  }

  .navbar-action__suggestion,
  .navbar-action__tdm {
    display: inline-block;
  }

  .logo-link__recontact {
    color: #07c;
    padding-left: 0;
  }

  .navbar-action__other-language {
    font-size: 20px;
  }
}
</style>
