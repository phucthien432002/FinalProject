<template>
  <v-app dark>
    <nav class="nav-bar">
      <input type="checkbox" id="check" />
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <label class="logo"
        ><nuxt-link
          to="/"
          class="logo a-hover"
          style="text-decoration: none; color: white"
          >Pizza Family</nuxt-link
        ></label
      >
      <ul class="ul-nav">
        <li>
          <a href="">{{ $t("salenav") }}</a>
        </li>
        <li>
          <a href="/product-listing">{{ $t("menunav") }}</a>
        </li>
        <li>
          <a href="">{{ $t("blog") }}</a>
        </li>
        <li>
          <shoppingCart style="position: relative !important" />
        </li>
        <li>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="#ff5c23" dark v-bind="attrs" v-on="on">
                <h5>Language</h5>
              </v-btn>
            </template>
            <v-list>
              <v-list-item-group v-model="selectedItem" color="#ff5c23">
                <v-list-item
                  v-for="(item, index) in locales"
                  :key="index"
                  @click="changeLange(item.value)"
                >
                  <img :src="item.flag" alt="Flag icon" class="px-2" />
                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>
        </li>
      </ul>
    </nav>
    <!-- <div>
        <nuxt-link to="/" class="logo"
          ><img src="../static/images/icon4.png" alt="Logo"
        /></nuxt-link>
      </div>
      <div
        class="d-inline-flex align-center justify-center"
        style="position: fixed; right: 1%; left: 0"
        width="100%"
      >
        <div class="navbar-collapse collapse">
          <ul class="navbar-nav mx-auto text-center text-uppercase ul-navbar">
            <li class="nav-item d-flex align-items-center">
              <a href="" class="nav-link">{{ $t("salenav") }}</a>
            </li>
            <li class="nav-item d-flex align-items-center">
              <a href="/product-listing" class="nav-link">{{ $t("menunav") }}</a>
            </li>
            <li class="nav-item d-flex align-items-center">
              <a href="" class="nav-link">{{ $t("blog") }}</a>
            </li>
          </ul>
        </div>
        <v-spacer />
        <div class="mr-2" style="position: relative">
          <shoppingCart />
        </div>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="#ff5c23" dark v-bind="attrs" v-on="on">
              <h5>Language</h5>
            </v-btn>
          </template>
          <v-list>
            <v-list-item-group v-model="selectedItem" color="#ff5c23">
              <v-list-item
                v-for="(item, index) in locales"
                :key="index"
                @click="changeLange(item.value)"
              >
                <img :src="item.flag" alt="Flag icon" class="px-2" />
                <v-list-item-title>{{ item.name }}</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </div> -->

    <v-main>
      <Nuxt />
    </v-main>
    <footer>
      <div id="footer">
        <div
          class="grid-container"
          :class="$vuetify.breakpoint.smAndDown ? 'd-flex flex-column' : ''"
        >
          <div class="item-footer">
            <h1>About Us</h1>
            <ul>
              <li>
                <a href="" target="_blank"> Blog</a>
              </li>
              <li>
                <a href="" target="_blank"> Recruitment</a>
              </li>
              <li>
                <a href="" target="_blank"> Store List</a>
              </li>
            </ul>
          </div>
          <div class="item-footer">
            <h1>Products</h1>
            <ul>
              <li>
                <a href="" target="_blank"> Menu</a>
              </li>
              <li>
                <a href="" target="_blank"> E-Voucher</a>
              </li>
              <li>
                <a href="" target="_blank"> Promotion</a>
              </li>
            </ul>
          </div>
          <div class="item-footer">
            <h1>Legal</h1>
            <ul>
              <li>
                <a href=""> Cookies</a>
              </li>
              <li>
                <a href=""> Privacy</a>
              </li>
              <li>
                <a href=""> Sales and Returns</a>
              </li>
              <li>
                <a href=""> Sustainability Policy</a>
              </li>
              <li>
                <a href=""> Terms and Conditions</a>
              </li>
              <li>
                <a href=""> Warranty</a>
              </li>
            </ul>
          </div>
          <div class="item-footer">
            <h1>Social Media</h1>
            <ul>
              <li>
                <a href="" target="_blank"
                  ><i class="fa-brands fa-facebook"></i> Facebook</a
                >
              </li>
              <li>
                <a href="" target="_blank"
                  ><i class="fa-brands fa-instagram"></i> Instagram</a
                >
              </li>
              <li>
                <a href="" target="_blank"><i class="fa-brands fa-tiktok"></i> Tiktok</a>
              </li>
              <li>
                <a href="" target="_blank"
                  ><i class="fa-brands fa-youtube"></i> Youtube</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="copy-right-container">
          <span class="text-center align-center">
            © 2023 Pizza Family Vietnam | Privacy Policy
          </span>
        </div>
      </div>
    </footer>
    <scrollup />
  </v-app>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import scrollup from "../components/scrollup.vue";
export default {
  components: { scrollup },
  data() {
    return {
      selectedItem: 1,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-cart",
          title: "Menu",
          to: "/product-listing",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
    };
  },
  computed: {
    ...mapGetters(["locales", "locale"]),
  },
  methods: {
    ...mapMutations(["SET_LANG"]),
    changeLange(value) {
      const path = this.switchLocalePath(value);
      this.$router.push(path);
    },
    getFlagIcon(language) {
      // Assuming the flag icons are placed in the "static/flags" directory
      return `/flags/${language}.png`; // Replace "png" with the actual file extension of your flag icons
    },
    removeFromCart(product) {
      const shoppingCart = this.modelValue;
      const productIndex = shoppingCart.findIndex((item) => item.uuid === product.uuid);
      shoppingCart[productIndex].amount -= 1;

      if (shoppingCart[productIndex].amount < 1) {
        shoppingCart.splice(productIndex, 1);
      }
      this.$emit("update:modelValue", shoppingCart);
    },
  },
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
}
nav {
  height: 80px;
  width: 100%;
  background-color: #c1a742;
}
label.logo {
  font-size: 35px;
  line-height: 80px;
  padding: 0 100px;
  font-weight: bold;
}
.nav-bar ul {
  float: right;
  list-style: none;
  margin-right: 20px;
  justify-content: center;
}
.nav-bar ul li {
  display: inline-block;
  margin: 0 5px;
  line-height: 80px;
}
.nav-bar ul li a {
  color: white !important;
  font-size: 17px;
  padding: 24px 12px;
  border-radius: 4px;
  text-transform: uppercase;
}
.ul-nav a:hover {
  background-color: #ff5c23;
  transition: 0.5s ease;
}
.checkbtn {
  font-size: 30px;
  color: white;
  line-height: 80px;
  float: right;
  margin-right: 40px;
  cursor: pointer;
  display: none;
}
#check {
  display: none;
}
@media (max-width: 952px) {
  label.logo {
    font-size: 30px;
    padding-left: 50px;
  }
  nav ul li a {
    font-size: 16px;
  }
}
@media (max-width: 858px) {
  .checkbtn {
    display: block;
  }
  .ul-nav {
    z-index: 999999999;
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: #c1a742;
    top: 80px;
    left: -100%;
    transition: all 0.5s;
    text-align: center;
  }
  nav ul li {
    display: block;
    margin: 50px 0;
    line-height: 30px;
  }
  nav ul li a {
    font-size: 20px;
  }
  a.active {
    background: none;
    color: #ff5c23;
  }
  #check:checked ~ ul {
    left: 0;
  }
}
@media screen and (max-width: 1024px) {
}
.v-application p {
  margin-bottom: 0 !important;
}
.v-toolbar__content,
.v-toolbar__extension {
  padding: 4px 0px !important;
}
.v-application ul,
.v-application ol {
  padding-left: 0 !important;
}
.removeclass {
  text-decoration: none;
  border-radius: 4px !important;
  padding: 4px;
  background-color: black;
  color: white !important;
}

footer {
  background-color: #c1a742;
  width: 100vw;
  padding-top: 64px;
  border-top: #ff5c23 solid 8px;
  position: relative;
  bottom: 0;
}

#footer {
  display: flex;
  flex-direction: column;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 0 12vw;
}

.item-footer {
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
}

.item-footer h1 {
  margin-left: 10px;
  color: white;
}

.item-footer li {
  list-style-type: ">";
  line-height: 32px;
}

.item-footer li a {
  margin-left: 10px;
  font-size: 15px;
  text-decoration: none;
  color: white;
  border-bottom: black solid 1px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
}

footer a:hover {
  color: black;
  transition: 0.3s;
}

.copy-right-container {
  border-top: 2px solid white;
  margin-top: 80px;
  background-color: #c1a742;
  color: white;
  font-weight: 600;
  font-size: 16px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.copy-right-container a {
  text-decoration: none;
  color: white;
}

.dropbtn {
  display: none;
}

#checkDropmenu {
  display: none;
}
.a-hover:hover {
  color: #ff5c23 !important;
  transition: 0.5s;
}
</style>
<i18n>
  {
    "en":{
      "salenav": "Promotions",
      "menunav": "Menu",
      "blog": "Blog"
    },
    "vn":{
      "salenav": "Khuyến Mãi",
      "menunav": "Thực Đơn",
      "blog": "Blog"
    }
  }
</i18n>
