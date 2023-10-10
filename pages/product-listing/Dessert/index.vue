<template>
  <div class="page">
    <v-row style="margin: 0 !important">
      <div
        class="justify-center align-center d-flex "
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
              <a
                class="px-5 py-1 bestsellerboder red--text"
                href="/product-listing/Dessert"
                >{{ $t("dessert") }}</a
              >
            </li>
            <li>
              <a href="/product-listing/Drinks">{{ $t("drinks") }}</a>
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
          price: "38500",
          photoURL: "https://img.dominos.vn/Banana-Pandan-PC-NEW-NEW.jpg",
        },
        {
          uuid: "40",
          name: this.$t("name2"),
          price: "48500",
          photoURL: "https://img.dominos.vn/MENU-PC-Cinnamon-Roll-nen-xam_360X240px.jpg",
        },
        {
          uuid: "41",
          name: this.$t("name3"),
          price: "48500",
          photoURL: "https://img.dominos.vn/MENU-PC-Chocolate-Roll-nen-xam_360X240px.jpg",
        },
        {
          uuid: "42",
          name: this.$t("name4"),
          price: "48500",
          photoURL: "https://img.dominos.vn/MENU-PC-Cinnamon-Roll-nen-xam_360X240px.jpg",
        },
        {
          uuid: "43",
          name: this.$t("name4"),
          price: "48500",
          photoURL:
            "https://img.dominos.vn/MENU-PC_BA%CC%81NH-SO%CC%82-CO%CC%82-LA-%C4%90U%CC%81T-LO%CC%80.jpg",
        },
        {
          uuid: "44",
          name: this.$t("name4"),
          price: "38500",
          photoURL: "https://img.dominos.vn/MENU-PC_choco-pizza.jpg",
        },
        {
          uuid: "45",
          name: this.$t("name4"),
          price: "38500",
          photoURL: "https://img.dominos.vn/MENU-PC_choco-pizza.jpg",
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
      "title-product1":"DESSERT",
      "name1":"BANANA PANDAN TOAST",
      "name2":"CINNAMON ROLL MILK",
      "name3":"CHOCOLATE ROLL",
      "name4":"CINNAMON ROLL CREAMY CHEESE",
      "name5":"CHOCO LAVA",
      "name6":"CHOCOCHIPS THIN",
      "name7":"CHOCOCHIPS DOUGH",
      "sale": "Daily Promotions",
      "paradise": "The paradise of food is waiting for you! Come and enjoy the quintessence of dishes from professional chefs",
      "pizza": "Pizza",
      "sides": "Sides",
      "dessert": "Dessert",
      "drinks": "Drinks"
    },
    "vn":{
      "title-product1":"TRÁNG MIỆNG",
      "name1":"BÁNH CHUỐI LÁ DỨA",
      "name2":"BÁNH CUỘN QUẾ XỐT SỮA ĐẶC",
      "name3":"BÁNH CUỘN QUẾ XỐT SÔ-CÔ-LA",
      "name4":"BÁNH CUỘN QUẾ XỐT KEM SỮA",
      "name5":"BÁNH SÔ-CÔ-LA ĐÚT LÒ",
      "name6":"CHOCOCHIPS (ĐẾ MỎNG GIÒN)",
      "name7":"CHOCOCHIPS (ĐẾ DÀY XỐP)",
      "sale": "Khuyến Mãi Mỗi Ngày",
      "paradise": "Thiên đường của những món ăn đang chờ đợi bạn! Hãy đến và thưởng thức những tinh hoa của các món ăn từ tay những đầu bếp chuyên nghiệp",
      "pizza": "Pizza",
      "sides": "Món Phụ",
      "dessert": "Tráng Miệng",
      "drinks": "Đồ Uống"
    }
  }
</i18n>
