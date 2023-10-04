<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      style="height: 100px; background-color: #c1a742 !important"
      class="d-flex"
      width="100%"
    >
      <div>
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
      </div>
    </v-app-bar>
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
                <a href="https://dominos.vn/blogs" target="_blank"> Blog</a>
              </li>
              <li>
                <a href="https://dominos.vn/blogs/tuyen-dung" target="_blank">
                  Recruitment</a
                >
              </li>
              <li>
                <a
                  href="https://dominos.vn/store-locations?store-id=1185"
                  target="_blank"
                >
                  Store List</a
                >
              </li>
            </ul>
          </div>
          <div class="item-footer">
            <h1>Products</h1>
            <ul>
              <li>
                <a href="https://dominos.vn/product-listing" target="_blank"> Menu</a>
              </li>
              <li>
                <a href="https://dominos.vn/voucher-default" target="_blank">
                  E-Voucher</a
                >
              </li>
              <li>
                <a
                  href="https://dominos.vn/promotion-listing?store-id=1185&device-enum=0"
                  target="_blank"
                >
                  Promotion</a
                >
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
                <a
                  href="https://www.facebook.com/DominosPizzaVietnam/?brand_redir=207571100452"
                  target="_blank"
                  ><i class="fa-brands fa-facebook"></i> Facebook</a
                >
              </li>
              <li>
                <a href="https://www.instagram.com/dominospizza_vietnam/" target="_blank"
                  ><i class="fa-brands fa-instagram"></i> Instagram</a
                >
              </li>
              <li>
                <a href="https://www.tiktok.com/@dominospizzavietnam" target="_blank"
                  ><i class="fa-brands fa-tiktok"></i> Tiktok</a
                >
              </li>
              <li>
                <a href="https://www.youtube.com/@DominosPizzaVNOfficial" target="_blank"
                  ><i class="fa-brands fa-youtube"></i> Youtube</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="copy-right-container">
          <span class="text-center align-center">
            © 2020 Domino’s Pizza Vietnam | Privacy Policy
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
.ul-navbar {
  gap: 50px;
}
@media screen and (max-width: 1024px) {
  .ul-navbar {
    gap: 0px !important;
  }
}
.v-application p {
  margin-bottom: 0 !important;
}
#C1A742 .v-toolbar__content,
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
.navbar-nav li a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 2.35rem 4px !important;
}
.navbar-nav li a:hover {
  color: white;
  background-color: #ff5c23;
}
.navbar-nav .nav-link {
  padding-right: 0;
  padding-left: 0;
}
.nav-link {
  display: block;
  padding: 0.5rem 4px;
  cursor: pointer;
}

.navbar-nav {
  justify-content: center;
  display: flex;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
}
.logo img {
  display: block;
  width: 230px;
  height: 270px;
}
.v-toolbar__content {
  height: 100% !important;
}
@media screen and (min-width: 1200px) and (max-width: 2800px) {
  .navbar-nav li a {
    padding: 2.3rem 2.5rem !important;
  }
}
@media screen and (min-width: 778px) {
  .navbar-nav li a {
    padding: 2.3rem 1.5rem !important;
  }
}

@media only screen and (max-width: 616px) {
  .v-btn__content {
    font-size: 12px;
  }
  .navbar-nav li a {
    font-size: 12px;
  }
  .nav-link {
    padding: none !important;
  }
  .navbar-nav {
    padding: none !important;
  }
  .navbar-nav li a {
    padding: none !important;
  }
}
@media only screen and (max-width: 777px) {
  .imgicon {
    width: 100px;
    height: 45px;
  }
  footer {
    background-color: #c1a742;
    width: 100vw;
    padding-top: 16px;
    border-top: #ff5c23 solid 8px;
    position: relative;
    bottom: 0;
    justify-content: center;
    align-items: center;
  }
  #footer {
    display: flex;
    flex-direction: column;
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
    margin-top: 20px;
    background-color: #717980;
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
  .v-app-bar__nav-icon {
    display: none;
  }
  .logo img {
    content: url(../static/images/icon5.png);
    width: 170px; /* Adjust the size as needed */
    height: 100px;
  }
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
