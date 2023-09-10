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
              <a class="" href="/product-listing/Pizza">{{ $t("pizza") }}</a>
            </li>
            <li>
              <a
                class="px-5 py-1 bestsellerboder red--text"
                href="/product-listing/Sides"
                >{{ $t("sides") }}</a
              >
            </li>
            <li>
              <a href="/product-listing/Dessert">{{ $t("dessert") }}</a>
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
      <div class="product-content">
        <div class="title-product">{{ $t("title-product2") }}</div>
        <v-row
          class="container-item"
          style="margin: 0 !important; justify-content: center; align-items: center"
        >
          <div
            v-for="(product, index) in products2"
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
      <div class="product-content">
        <div class="title-product">{{ $t("title-product3") }}</div>
        <v-row
          class="container-item"
          style="margin: 0 !important; justify-content: center; align-items: center"
        >
          <div
            v-for="(product, index) in products3"
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
      <div class="product-content">
        <div class="title-product">{{ $t("title-product4") }}</div>
        <v-row
          class="container-item"
          style="margin: 0 !important; justify-content: center; align-items: center"
        >
          <div
            v-for="(product, index) in products4"
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
      <div class="product-content">
        <div class="title-product">{{ $t("title-product5") }}</div>
        <v-row
          class="container-item"
          style="margin: 0 !important; justify-content: center; align-items: center"
        >
          <div
            v-for="(product, index) in products5"
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
          uuid: "22",
          name: this.$t("name1"),
          description: this.$t("description"),
          price: "97500",
          photoURL: "https://img.dominos.vn/Chicken-Satay-PC-NEW-NEW.jpg",
        },
        {
          uuid: "23",
          name: this.$t("name2"),
          description: this.$t("description2"),
          price: "97500",
          photoURL:
            "https://img.dominos.vn/Khai-Vi%CC%A3-To%CC%82%CC%89ng-Ho%CC%9B%CC%A3p-PC-nen-xam-1_360X240px_1.jpg",
        },
        {
          uuid: "24",
          name: this.$t("name3"),
          description: this.$t("description3"),
          price: "68000",
          photoURL:
            "https://img.dominos.vn/MENU-PC-Ga%CC%80-Vie%CC%82n-Pho%CC%82-Mai-%C4%90u%CC%81t-Lo%CC%80-1.jpg",
        },
        {
          uuid: "25",
          name: this.$t("name4"),
          description: this.$t("description4"),
          price: "127000",
          photoURL:
            "https://img.dominos.vn/MENU-PC_Ca%CC%81nh-Ga%CC%80-BBQ-Kie%CC%82%CC%89u-My%CC%83-.jpg",
        },
        {
          uuid: "26",
          name: this.$t("name5"),
          description: this.$t("description4"),
          price: "97500",
          photoURL:
            "https://img.dominos.vn/MENU-PC_Ca%CC%81nh-Ga%CC%80-BBQ-Kie%CC%82%CC%89u-My%CC%83-.jpg",
        },
      ],
      products2: [
        {
          uuid: "27",
          name: this.$t("name6"),
          description: this.$t("description"),
          price: "87500",
          photoURL:
            "https://img.dominos.vn/MENU-PC-My%CC%80-Y%CC%81-Da%CC%86m-Bo%CC%82ng-_-Na%CC%82%CC%81m-Xo%CC%82%CC%81t-Kem-1.jpg",
        },
        {
          uuid: "28",
          name: this.$t("name7"),
          description: this.$t("description2"),
          price: "87500",
          photoURL:
            "https://img.dominos.vn/MENU-PC_MI%CC%80-Y%CC%81-HA%CC%89I-SA%CC%89N-%C4%90U%CC%81T-LO%CC%80.jpg",
        },
        {
          uuid: "29",
          name: this.$t("name8"),
          description: this.$t("description3"),
          price: "78000",
          photoURL:
            "https://img.dominos.vn/MENU-PC_MI%CC%80-Y%CC%81-RAU-CU%CC%89-%C4%90U%CC%81T-LO%CC%80.jpg",
        },
        {
          uuid: "30",
          name: this.$t("name9"),
          description: this.$t("description4"),
          price: "197500",
          photoURL:
            "https://img.dominos.vn/MENU-PC_Mi%CC%80-Y%CC%81-Bo%CC%80-Ba%CC%86%CC%80m-%C4%90u%CC%81t-Lo%CC%80.jpg",
        },
      ],
      products3: [
        {
          uuid: "31",
          name: this.$t("name10"),
          description: this.$t("description"),
          price: "48500",
          photoURL:
            "https://img.dominos.vn/MENU-PC_Xu%CC%81c-Xi%CC%81ch-Xo%CC%82ng-Kho%CC%81i-%C4%90u%CC%81t-Lo%CC%80+-+Copy.jpg",
        },
        {
          uuid: "32",
          name: this.$t("name11"),
          description: this.$t("description2"),
          price: "87500",
          photoURL:
            "https://img.dominos.vn/MENU-PC_Xu%CC%81c-Xi%CC%81ch-Xo%CC%82ng-Kho%CC%81i-%C4%90u%CC%81t-Lo%CC%80.jpg",
        },
      ],
      products4: [
        {
          uuid: "33",
          name: this.$t("name12"),
          description: this.$t("description"),
          price: "197500",
          photoURL: "https://img.dominos.vn/MENU-PC-Banh-sung-bo-1.jpg",
        },
        {
          uuid: "34",
          name: this.$t("name13"),
          description: this.$t("description2"),
          price: "68000",
          photoURL: "https://img.dominos.vn/3A8C2A9E-ADDC-4D23-A919-83A67EB8B327.jpeg",
        },
        {
          uuid: "35",
          name: this.$t("name14"),
          description: this.$t("description3"),
          price: "58000",
          photoURL: "https://img.dominos.vn/5FB03526-5255-4A74-9E03-B4C394CA0DF7.jpeg",
        },
        {
          uuid: "36",
          name: this.$t("name15"),
          description: this.$t("description4"),
          price: "58000",
          photoURL:
            "https://img.dominos.vn/MENU-PC_Ba%CC%81nh-Mi%CC%80-Nu%CC%9Bo%CC%9B%CC%81ng-Pho%CC%82-Mai.jpg",
        },
        {
          uuid: "37",
          name: this.$t("name16"),
          description: this.$t("description"),
          price: "48500",
          photoURL:
            "https://img.dominos.vn/MENU-PC_Ba%CC%81nh-Mi%CC%80-Nu%CC%9Bo%CC%9B%CC%81ng-Bo%CC%9B-To%CC%89i.jpg",
        },
      ],
      products5: [
        {
          uuid: "38",
          name: this.$t("name17"),
          description: this.$t("description"),
          price: "48500",
          photoURL:
            "https://img.dominos.vn/MENU-PC_Khoai-Ta%CC%82y-Pho%CC%82-Mai-%C4%90u%CC%81t-Lo%CC%80.jpg",
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
      "title-product1":"CHICKEN",
      "title-product2":"PASTA",
      "title-product3":"SAUSAGE",
      "title-product4":"BREAD",
      "title-product5":"POTATO",
      "name1":"GRILLED CHICKEN SATAY",
      "name2":"MIXED APPETIZERS",
      "name3":"CHEESY CHICKEN POPCORN",
      "name4":"BBQ CHICKEN WINGS (6 PCS)",
      "name5":"BBQ CHICKEN WINGS (4 PCS)",
      "name6":"HAM & MUSHROOM PASTA",
      "name7":"BAKED SEAFOOD PASTA",
      "name8":"BAKED VEGGIE PASTA",
      "name9":"BAKED BOLOGNESE PASTA",
      "name10":"BAKED PORK SAUSAGES (4PCS)",
      "name11":"BAKED PORK SAUSAGES (8PCS)",
      "name12":"BEEF CROISSANT",
      "name13":"SIDE CHEESY BREAD + MILK",
      "name14":"SIDE GARLIC BREAD + MILK",
      "name15":"BAKED CHEESY BREAD",
      "name16":"BAKED GARLIC BUTTER BREAD",
      "name17":"BAKED CHEESY POTATO WEDGES",
      "sale": "Daily Promotions",
      "paradise": "The paradise of food is waiting for you! Come and enjoy the quintessence of dishes from professional chefs",
      "pizza": "Pizza",
      "sides": "Sides",
      "dessert": "Dessert",
      "drinks": "Drinks"
    },
    "vn":{
      "title-product1":"GÀ",
      "title-product2":"MỲ Ý",
      "title-product3":"XÚC XÍCH",
      "title-product4":"BÁNH MÌ",
      "title-product5":"KHOAI TÂY",
      "name1":"GÀ XIÊN NƯỚNG SATAY",
      "name2":"KHAI VỊ TỔNG HỢP",
      "name3":"GÀ VIÊN PHÔ MAI ĐÚT LÒ",
      "name4":"CÁNH GÀ BBQ KIỂU MỸ (6 MIẾNG)",
      "name5":"CÁNH GÀ BBQ KIỂU MỸ (4 MIẾNG)",
      "name6":"MỲ Ý DĂM BÔNG & NẤM XỐT KEM",
      "name7":"MỲ Ý HẢI SẢN ĐÚT LÒ",
      "name8":"MỲ Ý RAU CỦ ĐÚT LÒ",
      "name9":"MỲ Ý BÒ BẰM ĐÚT LÒ",
      "name10":"XÚC XÍCH XÔNG KHÓI ĐÚT LÒ (4 MIẾNG)",
      "name11":"XÚC XÍCH XÔNG KHÓI ĐÚT LÒ (8 MIẾNG)",
      "name12":"BÁNH SỪNG BÒ NHÂN BÒ BEEFSTEAK PHÔ MAI",
      "name13":"BÁNH MÌ NƯỚNG PHÔ MAI CHẤM SỮA",
      "name14":"BÁNH MÌ NƯỚNG BƠ TỎI CHẤM SỮA",
      "name15":"BÁNH MÌ NƯỚNG PHÔ MAI",
      "name16":"BÁNH MÌ NƯỚNG BƠ TỎI",
      "name17":"KHOAI TÂY PHÔ MAI ĐÚT LÒ",
      "sale": "Khuyến Mãi Mỗi Ngày",
      "paradise": "Thiên đường của những món ăn đang chờ đợi bạn! Hãy đến và thưởng thức những tinh hoa của các món ăn từ tay những đầu bếp chuyên nghiệp",
      "pizza": "Pizza",
      "sides": "Món Phụ",
      "dessert": "Tráng Miệng",
      "drinks": "Đồ Uống"
    }
  }
</i18n>
