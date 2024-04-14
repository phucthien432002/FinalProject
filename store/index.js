import { set } from "core-js/core/dict";

export const state = () => ({
  decks:[],
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
  decks(){
    return state.decks
  },
  locale: state => state.locales,
  locales: state => state.locales
};
export const mutations = {
  setDecks(state, decks){
    state.decks =  decks
  },
  addToCart(state, product) {
    const existingProduct = state.shoppingCart.find(item => item.uuid === product.uuid);

    if (existingProduct) {
      existingProduct.amount += 1;
    } else {
      state.shoppingCart.push({ ...product, amount: 1 });
    }

    // Lưu giỏ hàng vào Local Storage
    localStorage.setItem('shoppingCart', JSON.stringify(state.shoppingCart));
    
  },
  clearCart(state) {
    state.shoppingCart = [];
  },
  removeFromCart(state, product) {
    const productIndex = state.shoppingCart.findIndex(item => item.uuid === product.uuid);

    if (productIndex !== -1) {
      if (state.shoppingCart[productIndex].amount > 1) {
        state.shoppingCart[productIndex].amount -= 1;
      } else {
        state.shoppingCart.splice(productIndex, 1);
      }

      // Lưu giỏ hàng vào Local Storage
      localStorage.setItem('shoppingCart', JSON.stringify(state.shoppingCart));
    }
  },
  setProducts(state, products) {
    state.products = products;
  },
  // Khởi tạo giỏ hàng từ Local Storage khi ứng dụng khởi đầu
  initializeCartFromLocalStorage(state) {
    if (process.client) {
      const cartData = localStorage.getItem('shoppingCart');
      if (cartData) {
        state.shoppingCart = JSON.parse(cartData);
      }
    }
  },

  // set language
  SET_LANG(state, locale) {
    state.locale = locale;
    this.$cookies.set("lang", locale);
  }
};
export const actions = {
  setDecks(vuexContext, decks){
    vuexContext.commit('setDecks',decks)
  }
};
