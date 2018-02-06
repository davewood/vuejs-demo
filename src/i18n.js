import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const messages = {
  de: {
    message: {
      hello: 'hallo welt'
    }
  },
  en: {
    message: {
      hello: 'hello world'
    }
  }
};

const i18n = new VueI18n({
  locale: 'de',
  messages,
});

export default i18n;
