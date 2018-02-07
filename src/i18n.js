import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const messages = {
  de: {
    welcome: 'Willkommen zur VueJS Demo',
    message: {
      hello: 'hallo {0}'
    }
  },
  en: {
    welcome: 'Welcome to VueJS Demo',
    message: {
      hello: 'hello {0}'
    }
  }
};

const i18n = new VueI18n({
  locale: 'de',
  messages,
});

export default i18n;
