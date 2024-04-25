import Vuex from 'vuex'
import axios from 'axios'
import Cookies from 'js-cookie';
export const state = () => ({
  decks:[],
  token: null,
  userEmail: null,
  cartItems: [],  
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
  addToCart(state, payload) {
    state.cartItems.push(payload);
  },
  setCartItems(state, cartItems) {
    state.cartItems = cartItems;
  },
  setUserEmail(state, email) {
    state.userEmail = email;
  },
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
  // set language
  SET_LANG(state, locale) {
    state.locale = locale;
    this.$cookies.set("lang", locale);
  },
  addToCart(state, payload) {
    // Thêm sản phẩm vào giỏ hàng
    const existingProductIndex = state.cartItems.findIndex(item => item.id === payload.id);
    if (existingProductIndex !== -1) {
        state.cartItems[existingProductIndex].quantity += payload.quantity;
    } else {
        state.cartItems.push(payload);
    }
    // Cập nhật localStorage
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
},

deleteCartItem(state, index) {
  const item = state.cartItems[index];
  if (item.quantity > 1) {
    // Giảm số lượng sản phẩm đi 1
    item.quantity -= 1;
  } else {
    // Nếu số lượng là 1 thì xóa sản phẩm khỏi giỏ hàng
    state.cartItems.splice(index, 1);
  }
  // Cập nhật localStorage
  localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
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
        vuexContext.commit('setUserEmail', credentials.email);
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
      if (!tokenKey || !tokenExpirationKey || !isAdminKey) {
        vuexContext.dispatch('logout')
        return false
      };
  
      token = tokenKey.split('=')[1];
      tokenExpiration = tokenExpirationKey.split('=')[1];
      isAdmin = isAdminKey.split('=')[1];
    } else {
      // Xử lý khi không có req (ở môi trường client)
      token = localStorage.getItem('token');
      tokenExpiration = localStorage.getItem('tokenExpiration');
      if(new Date().getTime() > tokenExpiration || !token) {
        vuexContext.dispatch('logout')
        return false
      }
      isAdmin = localStorage.getItem('isAdmin');
      if (!token || !tokenExpiration || !isAdmin) return false;
    }
    vuexContext.dispatch('setLogoutTimer', tokenExpiration - new Date().getTime());
    vuexContext.commit('setToken', token);
    vuexContext.commit('setIsAdmin', isAdmin === 'true');
  },
  logout(vuexContext){
    vuexContext.commit('clearToken')
    Cookies.remove('token')
    Cookies.remove('tokenExpiration')
    localStorage.removeItem('token')
    localStorage.removeItem('tokenExpiration')
  },
  addToCart({ commit, state }, payload) {
    // Thêm sản phẩm vào giỏ hàng
    commit('addToCart', payload);
    // Lưu giỏ hàng mới vào local storage
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  },
  initializeCartFromLocalStorage({ commit }) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    commit('setCartItems', cartItems);
  }
};
