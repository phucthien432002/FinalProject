<template>
  <v-app dark>
    <div class="announcement">
      <div class="announcement-bar-text">
        <span class="announcement-bar-close" tabindex="0" role="button"> </span>
        <div class="announcement-bar-text-inner">
          <p>
            <a @click="showRegisterForm = true" target="_blank">
              Join the Buddy’s Team! We are Hiring - Apply Now!
            </a>
          </p>
        </div>
      </div>
    </div>
    <div v-if="showRegisterForm" class="register-form">
      <div class="d-flex">
        <h2>Đăng ký</h2>
        <v-spacer></v-spacer>
        <button @click="closeRegistrationForm">x</button>
      </div>
      <form @submit.prevent="submitHiring">
        <div class="form-group">
          <label for="name">Tên:</label>
          <input
            type="text"
            id="name"
            v-model="orderInfo.name"
            required
            class="custom-input"
          />
        </div>
        <div class="form-group">
          <label for="address">Địa chỉ:</label>
          <input
            type="text"
            id="address"
            v-model="orderInfo.address"
            required
            class="custom-input"
          />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="text"
            id="email"
            v-model="orderInfo.email"
            required
            class="custom-input"
          />
          <div v-if="emailError" class="error-message">
            {{ emailError }}
          </div>
        </div>
        <div>
          <div class="form-group">
            <label for="fileURL"
              >Bạn hãy cung cấp cho chúng tôi đường dẫn đến file Word của bạn thông qua
              Google Drive</label
            >
            <a
              href="https://drive.google.com/uc?export=download&id=1ZMXpT9kDHk7Am68p7SZF6lWLvzB8b-DR"
              download
            >
              Tải xuống tệp Word
            </a>
            <input
              type="text"
              id="fileURL"
              v-model="orderInfo.fileURL"
              required
              class="custom-input"
            />
          </div>
        </div>
        <div class="button-order">
          <v-alert v-if="showAlert" type="success" dismissible @input="showAlert = false">
            Bạn đã đăng ký thành công!
          </v-alert>
          <button type="submit">Hoàn tất đăng ký</button>
        </div>
      </form>
    </div>
    <nav class="nav-bar">
      <input type="checkbox" id="check" />
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <label class="logo"
        ><nuxt-link
          to="/"
          class="logo a-hover"
          style="text-decoration: none; color: #e5152d"
          >Pizza Family</nuxt-link
        ></label
      >
      <ul class="ul-nav">
        <li>
          <a href="/promo-listing">{{ $t("salenav") }}</a>
        </li>
        <li>
          <a href="/decks">{{ $t("menunav") }}</a>
        </li>
        <li>
          <a href="/blog">{{ $t("blog") }}</a>
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
    <v-main>
      <Nuxt />
    </v-main>
    <!--  Modal -->
    <v-modal v-slot="payload" name="DeckFormModal">
      <div class="modal_body">
        <h2>{{ payload && payload.payload ? "Edit a deck" : "Create a new Deck" }}</h2>
        <deck-form :deck="payload.payload" @submit="onSubmit" />
      </div>
    </v-modal>
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
    <phone-num />
  </v-app>
</template>

<script>
import DeckForm from "@/components/Decks/DeckForm.vue";
import { mapGetters, mapMutations } from "vuex";
import axios from "axios";
import scrollup from "../components/scrollup.vue";
export default {
  components: { scrollup, DeckForm },
  data() {
    return {
      selectedItem: 1,
      clipped: false,
      drawer: false,
      fixed: false,
      showRegisterForm: false,
      file: null,
      showAlert: false,
      emailValid: false,
      emailError: "",
      orderInfo: {
        name: "",
        address: "",
        email: "",
        fileURL: "",
      },
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
  mounted() {
    this.$store.dispatch("initializeCartFromLocalStorage");
  },
  methods: {
    ...mapMutations(["SET_LANG"]),
    changeLange(value) {
      const path = this.switchLocalePath(value);
      this.$router.push(path);
    },
    validateEmail(email) {
      const emailPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailPattern.test(email);
    },
    getFlagIcon(language) {
      // Assuming the flag icons are placed in the "static/flags" directory
      return `/flags/${language}.png`; // Replace "png" with the actual file extension of your flag icons
    },

    submitHiring() {
      if (!this.validateEmail(this.orderInfo.email) || this.orderInfo.email.length < 9) {
        this.emailError = "Email không hợp lệ";
        this.orderInfo.email = "";
        return; // Ngăn việc đặt hàng nếu email không hợp lệ
      } else {
        this.emailError = ""; //
      }

      const orderData = {
        name: this.orderInfo.name,
        address: this.orderInfo.address,
        email: this.orderInfo.email,
        fileURL: this.orderInfo.fileURL,
      };

      // Gửi dữ liệu đăng ký và tệp lên Firebase Realtime Database
      const firebaseUrl =
        "https://shopping-website-62b9c-default-rtdb.firebaseio.com/hiring.json";
      axios
        .post(firebaseUrl, orderData)
        .then((response) => {
          console.log("Dữ liệu đã được gửi thành công:", response.data);
          axios.post("http://localhost:8080", {
            from: "phucthien1233212002@gmail.com",
            to: this.orderInfo.email,
            subject: "Do not reply this message",
            text:
              "Chúng tôi đã nhận được đơn và sẽ sớm liên hệ bạn. Xin vui lòng chờ đợi từ 5-7 ngày.",
          });
        })
        .catch((error) => {
          console.error("Lỗi khi gửi dữ liệu lên Firebase:", error);
        });

      this.showAlert = true;

      setTimeout(function () {
        window.location.reload();
      }, 1000);
    },

    closeRegistrationForm() {
      this.showRegisterForm = false;
    },
    onSubmit(deckData) {
      if (deckData && !deckData.id) {
        this.$store
          .dispatch("addDeck", deckData)
          .then(() => this.$modal.close({ name: "DeckFormModal" }));
      } else {
        this.$store.dispatch("editDeck", deckData).then(() => {
          this.$modal.close({ name: "DeckFormModal" });
          this.$router.push("/decks");
        });
      }
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

.register-form {
  z-index: 999999999 !important;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  text-align: start;
}

.register-form p {
  margin: 0;
  font-size: 18px;
}

.register-form input[type="text"] {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.register-form button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.register-form button:hover {
  background-color: #0056b3;
}
nav {
  height: 80px;
  width: 100%;
  background-color: white;
}
label.logo {
  font-size: 34px;
  line-height: 80px;
  padding-left: 100px;
  font-weight: bold;
}
.nav-bar ul {
  float: right;
  list-style: none;
  justify-content: center;
}
.nav-bar ul li {
  display: inline-block;
  margin: 0 5px;
  line-height: 80px;
}
.nav-bar ul li a {
  font-family: cursive;
  font-weight: bold;
  color: #164983 !important;
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
  color: black;
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
    font-size: 24px;
    padding-left: 20px !important;
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
    background-color: white;
    top: 150px;
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
  background-color: #164983;
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
  color: white;
}

.item-footer li a {
  margin-left: 10px;
  font-size: 15px;
  text-decoration: none;
  color: white;
  border-bottom: white solid 1px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
}

footer a:hover {
  color: #ff5c23;
  transition: 0.3s;
}

.copy-right-container {
  border-top: 2px solid white;
  margin-top: 80px;
  background-color: #164983;
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
.announcement {
  background-color: #e5152d;
  text-align: center;
}
.announcement-bar {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.announcement-bar-text {
  font-family: "proxima-nova", arial, sans-serif;
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0px;
  text-transform: none;
  line-height: 1.2em;
  padding: 0.8em 3em;
}
.announcement-bar-close {
  display: none !important;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  width: 2.8em;
  height: 2.78em;
}
.announcement-bar-text-inner a {
  color: white;
  text-decoration: underline;
  font-weight: bold;
}
.btn1 {
  display: inline-block;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  border-radius: 3px;
  padding: 12px 24px;
  border: 0;
  color: #fff;
  background: #1976d2;
  line-height: 1.15;
  font-size: 16px;
}
.btn1:hover {
  transition: all 0.1s ease;
  box-shadow: 0 0 0 0 #fff, 0 0 0 3px #1de9b6;
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
