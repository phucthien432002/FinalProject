import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);
export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: app.$cookies.get("lang"),
    fallbackLocale: "en",
    messages: {
      en: require("~/locales/en.json"),
      vn: require("~/locales/vn.json")
    }
  });
  app.i18n.path = link => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`;
    }
    return `/${app.i18n.locale}/${link}`;
  };
};