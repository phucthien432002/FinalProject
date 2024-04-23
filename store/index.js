import Vuex from 'vuex'
import axios from 'axios'
import Cookies from 'js-cookie';
export const state = () => ({
  decks:[],
  token: null,
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
  isAuthenticated(state){
    return state.token != null
  },
  decks(state){
    return state.decks
  },
  locale: state => state.locales,
  locales: state => state.locales
};
export const mutations = {
  setIsAdmin(state, isAdmin) {
    state.isAdmin = isAdmin;
  },  
  clearToken(state){
    state.token = null
  },
  setToken(state,token){
    state.token = token
  },
  setDecks(state, decks){
    state.decks =  decks
  },
  addDeck(state, newDeck){
    state.decks.push(newDeck)
  },
  editDeck(state, editDeck){
    const deckIndex = state.decks.findIndex(deck => deck.id === editDeck.id)

    state.decks[deckIndex] = editDeck
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
  nuxtServerInit(vuexContext,context){
    return axios.get(process.env.baseApiUrl + '/decks.json' ).then((response) => {
    const decksArr = []
    for (const key in response.data){
      decksArr.push({...response.data[key],id: key})
    }
    vuexContext.commit('setDecks',decksArr)
    }).catch((e) => {
      context.error(e)
    })
  },
  addDeck(vuexContext,deckData){
    return axios
    .post(
      process.env.baseApiUrl + '/decks.json?auth=' + vuexContext.state.token,
      deckData
    )
    .then((result) => {
      vuexContext.commit('addDeck', {...deckData, id: result.data.name})
    })
    .catch((e) => {
      console.log(e);
    });
  },
  deleteDeck(vuexContext, deckId) {
    // Kiểm tra xem người dùng đã đăng nhập chưa
    if (!vuexContext.state.token) {
      // Xử lý trường hợp người dùng chưa đăng nhập
      return Promise.reject(new Error('Bạn cần đăng nhập trước khi xóa deck.'));
    }
    
    // Gửi yêu cầu xóa deck lên Firebase
    return axios.delete(
      `${process.env.baseApiUrl}/decks/${deckId}.json?auth=${vuexContext.state.token}`
    )
    .then(() => {
      // Xóa deck thành công
      vuexContext.commit('deleteDeck', deckId);
      return Promise.resolve();
    })
    .catch((error) => {
      // Xử lý lỗi khi xóa deck
      return Promise.reject(error);
    });
  },
  editDeck(vuexContext, deckData){
    const deckId = deckData.id;
    delete deckData.id;
    axios
      .put(
        process.env.baseApiUrl + '/decks/' +
          deckId +
          ".json?auth=" +vuexContext.state.token,
        deckData
      )
      .then((result) => {
        vuexContext.commit('editDeck', {...result.data, id: deckId})
      })
      .catch((e) => {
        console.log(e);
      });
  },
  setDecks(vuexContext, decks){
    vuexContext.commit('setDecks',decks)
  },
 // Trong actions authenticateUser
 authenticateUser(vuexContext, credentials) {
  return new Promise((resolve, reject) => {
    let authUrlApi = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbApiKey}`;

    if (!credentials.isLogin) {
      authUrlApi = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbApiKey}`;
    }
    return (this.$axios
      .$post(authUrlApi, {
        email: credentials.email,
        password: credentials.password,
        returnSecureToken: true,
      })
      .then((result) => {
        vuexContext.commit('setToken', result.idToken);
        localStorage.setItem('token', result.idToken);
        localStorage.setItem('tokenExpiration', new Date().getTime() + result.expiresIn * 1000);
        Cookies.set('token', result.idToken);
        Cookies.set('tokenExpiration', new Date().getTime() + result.expiresIn * 1000);

        // Lưu trữ thông tin vai trò của người dùng vào localStorage
        localStorage.setItem('isAdmin', result.email === 'admin@gmail.com');

        // Lưu trữ thông tin vai trò của người dùng vào cookie
        Cookies.set('isAdmin', result.email === 'admin@gmail.com');

        vuexContext.dispatch('setLogoutTimer', result.expiresIn * 1000);

        resolve({ success: true });
      })
      .catch((error) => {
        reject(error.response);
      })
    );
  });
},

  setLogoutTimer(vuexContext,duration){
    setTimeout(() => {
      vuexContext.commit('clearToken')
    },duration)
  },
  // Trong action initAuth
  initAuth(vuexContext, req) {
    let token, tokenExpiration, isAdmin;
    if (req) {
      if (!req.headers.cookie) return false;
      const tokenKey = req.headers.cookie.split(';').find((c) => c.trim().startsWith('token='));
      const tokenExpirationKey = req.headers.cookie.split(';').find((c) => c.trim().startsWith('tokenExpiration='));
      const isAdminKey = req.headers.cookie.split(';').find((c) => c.trim().startsWith('isAdmin='));
      if (!tokenKey || !tokenExpirationKey || !isAdminKey) return false;
  
      token = tokenKey.split('=')[1];
      tokenExpiration = tokenExpirationKey.split('=')[1];
      isAdmin = isAdminKey.split('=')[1];
    } else {
      // Xử lý khi không có req (ở môi trường client)
      token = localStorage.getItem('token');
      tokenExpiration = localStorage.getItem('tokenExpiration');
      isAdmin = localStorage.getItem('isAdmin');
      if (!token || !tokenExpiration || !isAdmin) return false;
    }
    vuexContext.dispatch('setLogoutTimer', tokenExpiration - new Date().getTime());
    vuexContext.commit('setToken', token);
    vuexContext.commit('setIsAdmin', isAdmin === 'true');
  },
  
  
  

};
