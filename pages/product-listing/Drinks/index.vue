<template>
  <div class="page">
    <v-row style="margin: 0 !important">
      <div
        class="py-4 justify-center align-center d-flex mt-8"
        style="background-color: #e2f4fc; width: 100vw"
      >
        <h4 class="pr-2 pa-2" style="color: #717273">{{ $t("paradise") }}</h4>
        <i class="fa-solid fa-pizza-slice"></i>
      </div>
      <v-container>
        <div style="width: 100%; max-width: 100vw">
          <ul class="dot-list py-2" style="width: 100%; max-width: 100vw">
            <li>
              <a href="">{{ $t("sale") }}</a>
            </li>
            <li>
              <a href="/product-listing/Pizza">{{ $t("pizza") }}</a>
            </li>
            <li>
              <a href="/product-listing/Sides">{{ $t("sides") }}</a>
            </li>
            <li>
              <a href="/product-listing/Dessert">{{ $t("dessert") }}</a>
            </li>
            <li>
              <a
                class="px-5 py-1 bestsellerboder red--text"
                href="/product-listing/Drinks"
                >{{ $t("drinks") }}</a
              >
            </li>
          </ul>
        </div>
      </v-container>
    </v-row>
    <div class="container">
      <div class="product-content">
        <div class="title-product">{{ $t("title-product1") }}</div>
        <v-row
          class="container-item"
          style="margin: 0 !important; justify-content: center; align-items: center"
        >
          <div
            v-for="(product, index) in products"
            :key="'product-' + index"
            class="px-1 py-1 flex-fit"
          >
            <div
              class="card mb-3 justify-center text-center"
              style="width: auto; border: 4px solid #fff6f6"
            >
              <img
                :src="product.photoURL"
                class="card-img-top"
                style="min-width: auto; height: 150px"
              />
              <div class="card-body">
                <h5 class="card-title">
                  {{ product.name }}
                </h5>
                <div
                  class="d-flex justify-center align-center"
                  style="margin: 0; padding: 0; gap: 5px"
                >
                  <p class="card-text">{{ product.price }}₫</p>
                </div>
                <div class="d-grid">
                  <button @click="addToCart(product)" class="btn1">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      products: [
        {
          uuid: "39",
          name: this.$t("name1"),
          price: "24500",
          photoURL: "https://img.dominos.vn/coke-390.jpg",
        },
        {
          uuid: "40",
          name: this.$t("name2"),
          price: "24500",
          photoURL: "https://img.dominos.vn/fanta-390.jpg",
        },
        {
          uuid: "41",
          name: this.$t("name3"),
          price: "24500",
          photoURL: "https://img.dominos.vn/Sprite-390.jpg",
        },
        {
          uuid: "42",
          name: this.$t("name4"),
          price: "24500",
          photoURL: "https://img.dominos.vn/coke-zero.jpg",
        },
        {
          uuid: "43",
          name: this.$t("name4"),
          price: "38500",
          photoURL: "https://img.dominos.vn/coke-1.5.jpg",
        },
        {
          uuid: "44",
          name: this.$t("name4"),
          price: "38500",
          photoURL: "https://img.dominos.vn/coke-1.5-new-new.png",
        },
        {
          uuid: "45",
          name: this.$t("name4"),
          price: "38500",
          photoURL: "https://img.dominos.vn/Sprite-1.5L.jpg",
        },
        {
          uuid: "46",
          name: this.$t("name4"),
          price: "38500",
          photoURL: "https://img.dominos.vn/fanta-1.5.jpg",
        },
        {
          uuid: "47",
          name: this.$t("name4"),
          price: "24500",
          photoURL: "https://img.dominos.vn/dao-hat-chia.jpg",
        },
        {
          uuid: "48",
          name: this.$t("name4"),
          price: "24500",
          photoURL: "https://img.dominos.vn/Fuzetea%2B-Chanh-Day-350ml-new-new.png",
        },
        {
          uuid: "49",
          name: this.$t("name4"),
          price: "24500",
          photoURL: "https://img.dominos.vn/daisani.jpg",
        },
        {
          uuid: "50",
          name: this.$t("name4"),
          price: "38500",
          photoURL: "https://img.dominos.vn/dasani-pc-new.png",
        },
      ],
      shoppingCart: [],
    };
  },
  methods: {
    ...mapMutations(["addToCart"]),
    // Gọi mutation để khởi tạo giỏ hàng từ Local Storage khi tải lại trang
    initializeCart() {
      this.$store.commit("initializeCartFromLocalStorage");
    },
  },
  created() {
    this.initializeCart();
  },
};
</script>

<style scoped>
.container-item {
  gap: 20px;
}
.card {
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}
.card-body {
  display: grid !important;
  grid-template-rows: 1fr 1fr 1fr;
  justify-content: center;
}
.card-title {
  width: 200px;
  color: #ff5000;
}
.card-text {
  font-weight: bold;
}
.title-product {
  font-size: 28px;
  text-transform: uppercase;
  font-weight: 400;
  text-align: center;
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
.bestsellerboder {
  border-bottom: 3px solid #e31837;
}
.dot-list {
  list-style-type: none;
  display: flex;
  justify-content: space-between !important;
  align-items: center;
}
a {
  text-decoration: none;
  color: black;
  font-weight: bold;
}

@media screen and (min-width: 800px) {
  .dot-list {
    width: 70% !important;
  }
}

@media only screen and (max-width: 600px) {
  .dot-list {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: space-between !important;
    align-items: flex-start;
  }
  .dot-list li {
    flex: 1 0 50%; /* Two columns on mobile */
    max-width: 50%; /* Two columns on mobile */
  }
}
</style>
<i18n>
  {
    "en":{
      "title-product1":"DRINKS",
      "name1":"COCA COLA 390ML BOTTLE",
      "name2":"FANTA 390ML BOTTLE",
      "name3":"SPRITE 390ML BOTTLE",
      "name4":"COCA COLA ZERO 320ML CAN",
      "name5":"COCA COLA 1.5L BOTTLE",
      "name6":"COCA COLA ZERO SUGAR 1.5L",
      "name7":"SPRITE 1.85L BOTTLE",
      "name8":"FANTA 1.5L BOTTLE",
      "name9":"FUZETEA PEACH TEA & CHIA SEEDS 350ML",
      "name10":"FUZETEA CHIA SEED PASSION FRUIT 350ML BOTTLE",
      "name11":"DASANI 510ML BOTTLE",
      "name12":"DASANI 1.5L BOTTLE",
      "sale": "Daily Promotions",
      "paradise": "The paradise of food is waiting for you! Come and enjoy the quintessence of dishes from professional chefs",
      "pizza": "Pizza",
      "sides": "Sides",
      "dessert": "Dessert",
      "drinks": "Drinks"
    },
    "vn":{
      "title-product1":"GIẢI KHÁT",
      "name1":"CHAI COCA-COLA 390ML",
      "name2":"CHAI FANTA 390ML",
      "name3":"CHAI SPRITE 390ML",
      "name4":"LON COCA-COLA ZERO 320ML",
      "name5":"CHAI COCA-COLA 1.5L",
      "name6":"CHAI COCA-COLA ZERO SUGAR 1.5L",
      "name7":"CHAI SPRITE 1.85L",
      "name8":"CHAI FANTA 1.5L",
      "name9":"TRÀ ĐÀO HẠT CHIA 350ML",
      "name10":"CHANH DÂY HẠT CHIA 350ML",
      "name11":"NƯỚC SUỐI DASANI 510ML",
      "name12":"NƯỚC SUỐI DASANI 1.5L",
      "sale": "Khuyến Mãi Mỗi Ngày",
      "paradise": "Thiên đường của những món ăn đang chờ đợi bạn! Hãy đến và thưởng thức những tinh hoa của các món ăn từ tay những đầu bếp chuyên nghiệp",
      "pizza": "Pizza",
      "sides": "Món Phụ",
      "dessert": "Tráng Miệng",
      "drinks": "Đồ Uống"
    }
  }
</i18n>
