export const state = () => ({
  products: [],
  shoppingCart: [],
  locales: [
    {
      name: "VietNamese",
      value: "vn",
      flag: require("../static/images/flags/vn.png")
    },
    {
      name: "English",
      value: "en",
      flag: require("../static/images/flags/usa.png")
    }
  ],
  locale: "en"
});
export const getters = {
  locale: state => state.locales,
  locales: state => state.locales
};
export const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
  // set language
  SET_LANG(state, locale) {
    state.locale = locale;
    this.$cookies.set("lang", locale);
  }
};
export const actions = {};
