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
  addToCart(state, product) {
    // Thêm sản phẩm vào giỏ hàng
    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng hay chưa
    const existingProduct = state.shoppingCart.find(item => item.uuid === product.uuid);

    if (existingProduct) {
      existingProduct.amount += 1;
    } else {
      state.shoppingCart.push({ ...product, amount: 1 });
    }
  },
  removeFromCart(state, product) {
    // Xóa sản phẩm khỏi giỏ hàng
    const productIndex = state.shoppingCart.findIndex(item => item.uuid === product.uuid);

    if (productIndex !== -1) {
      if (state.shoppingCart[productIndex].amount > 1) {
        state.shoppingCart[productIndex].amount -= 1;
      } else {
        state.shoppingCart.splice(productIndex, 1);
      }
    }
  },
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
