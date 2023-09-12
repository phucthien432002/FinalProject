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
              <a
                class="px-5 py-1 bestsellerboder red--text"
                href="/product-listing/Pizza"
                >{{ $t("pizza") }}</a
              >
            </li>
            <li>
              <a href="/product-listing/Sides">{{ $t("sides") }}</a>
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
                  <h5 style="margin-top: 1px; font-size: 16px !important">
                    {{ product.size }}
                  </h5>
                  <h5>-</h5>
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
                  <h5 style="margin-top: 1px; font-size: 16px !important" class="h5-size">
                    {{ product.size }}
                  </h5>
                  <h5>-</h5>
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
                  <h5 style="margin-top: 1px; font-size: 16px !important">
                    {{ product.size }}
                  </h5>
                  <h5>-</h5>
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
                  <h5 style="margin-top: 1px; font-size: 16px !important">
                    {{ product.size }}
                  </h5>
                  <h5>-</h5>
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
          uuid: "1",
          name: this.$t("name1"),
          
          size: "MEDIUM",
          price: "205500",
          photoURL: "https://img.dominos.vn/Menu+BG+-+TIENG+ANH_tom+ga.jpg",
        },
        {
          uuid: "2",
          name: this.$t("name2"),
          
          size: "MEDIUM",
          price: "205500",
          photoURL: "https://img.dominos.vn/Menu+BG+-+TIENG+ANH_full+ga.jpg",
        },
        {
          uuid: "3",
          name: this.$t("name3"),
         
          size: "MEDIUM",
          price: "215500",
          photoURL: "https://img.dominos.vn/Menu+BG+-+TIENG+ANH_full+tom.jpg",
        },
        {
          uuid: "4",
          name: this.$t("name4"),
         
          size: "MEDIUM",
          price: "215500",
          photoURL: "https://img.dominos.vn/Menu+BG+1.jpg",
        },
      ],
      products2: [
        {
          uuid: "5",
          name: this.$t("name5"),
          
          size: "SMALL",
          price: "117000",
          photoURL: "https://img.dominos.vn/Surf-turf-Pizza-Bo-Tom-Nuong-Kieu-My-1.jpg",
        },
        {
          uuid: "6",
          name: this.$t("name6"),
          
          size: "SMALL",
          price: "117000",
          photoURL: "https://img.dominos.vn/Pizza-Hai-San-Xot-Mayonnaise-Ocean-Mania.jpg",
        },
        {
          uuid: "7",
          name: this.$t("name7"),
         
          size: "SMALL",
          price: "117000",
          photoURL: "https://img.dominos.vn/Pizzaminsea-Hai-San-Nhiet-Doi-Xot-Tieu.jpg",
        },
        {
          uuid: "8",
          name: this.$t("name8"),
         
          size: "SMALL",
          price: "117000",
          photoURL:
            "https://img.dominos.vn/Pizza-Hai-San-Xot-Ca-Chua-Seafood-Delight.jpg",
        },
        {
          uuid: "9",
          name: this.$t("name9"),
         
          size: "MEDIUM",
          price: "205500",
          photoURL: "https://img.dominos.vn/Pizza+Bach+Tuoc+Mania-+TIENG+ANH.jpg",
        },
        {
          uuid: "10",
          name: this.$t("name10"),
         
          size: "MEDIUM",
          price: "205500",
          photoURL: "https://img.dominos.vn/Pizza+Bach+Tuoc+Pizzamin+-+TIENG+ANH.jpg",
        },
        {
          uuid: "11",
          name: this.$t("name11"),
         
          size: "MEDIUM",
          price: "205500",
          photoURL: "https://img.dominos.vn/Pizza+Bach+Tuoc+Delight+-+TIENG+ANH.jpg",
        },
      ],
      products3: [
        {
          uuid: "12",
          name: this.$t("name12"),
          
          size: "SMALL",
          price: "97500",
          photoURL: "https://img.dominos.vn/Sausage-Kid-Mania-1.jpg",
        },
        {
          uuid: "13",
          name: this.$t("name13"),
          
          size: "SMALL",
          price: "97500",
          photoURL:
            "https://img.dominos.vn/Pizza-Ga-Pho-Mai-Thit-Heo-Xong-Khoi-Cheesy-Chicken-Bacon.jpg",
        },
      ],
      products4: [
        {
          uuid: "14",
          name: this.$t("name14"),
          
          size: "MEDIUM",
          price: "176000",
          photoURL: "https://img.dominos.vn/Menu+BG+-+TIENG+ANH_cheese.jpg",
        },
        {
          uuid: "15",
          name: this.$t("name15"),
          
          size: "SMALL",
          price: "117000",
          photoURL: "https://img.dominos.vn/Pizza-Thap-Cam-Thuong-Hang-Extravaganza.jpg",
        },
        {
          uuid: "16",
          name: this.$t("name16"),
         
          size: "SMALL",
          price: "87500",
          photoURL: "https://img.dominos.vn/Veggie-mania-Pizza-Rau-Cu-Thap-Cam.jpg",
        },
        {
          uuid: "17",
          name: this.$t("name17"),
         
          size: "SMALL",
          price: "117,000",
          photoURL: "https://img.dominos.vn/Meat-lover-Pizza-5-Loai-Thit-Thuong-Hang.jpg",
        },
        {
          uuid: "18",
          name: this.$t("name18"),
          
          size: "SMALL",
          price: "117000",
          photoURL: "https://img.dominos.vn/Pepperoni-feast-Pizza-Xuc-Xich-Y.jpg",
        },
        {
          uuid: "19",
          name: this.$t("name19"),
          
          size: "LARGE",
          price: "97500",
          photoURL:
            "https://img.dominos.vn/Pizza-Ga-Xot-Tuong-Kieu-Nhat-Teriyaki-Chicken.jpg",
        },
        {
          uuid: "20",
          name: this.$t("name20"),
         
          size: "SMALL",
          price: "97500",
          photoURL: "https://img.dominos.vn/Pizza-Dam-Bong-Dua-Kieu-Hawaii-Hawaiian.jpg",
        },
        {
          uuid: "21",
          name: this.$t("name21"),
         
          size: "SMALL",
          price: "87500",
          photoURL: "https://img.dominos.vn/Pizza-Pho-Mai-Hao-Hang-Cheese-Mania.jpg",
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
      "title-product1":"FLAVORS OF THE WORLD",
      "title-product2":"SEAFOOD CRAVERS",
      "title-product3":"KID FAVORS",
      "title-product4":"TRADITIONAL & MEAT LOVERS",
      "name1":"BANGKOK GREEN CURRY SHRIMP CHICKEN",
      "name2":"BANGKOK GREEN CURRY CHICKEN",
      "name3":"BANGKOK GREEN CURRY SHRIMP",
      "name4":"NEW YORK CHEESESTEAK",
      "name5":"SURF & TURF",
      "name6":"OCEAN MANIA",
      "name7":"PIZZAMIN SEA",
      "name8":"SEAFOOD DELIGHT",
      "name9":"OCTOPUS OCEAN MANIA",
      "name10":"OCTOPUS PIZZAMIN SEA",
      "name11":"OCTOPUS SEAFOOD DELIGHT",
      "name12":"SAUSAGE KID MANIA",
      "name13":"CHEESY CHICKEN BACON",
      "name14":"CHEESY MADNESS",
      "name15":"EXTRAVAGANZA",
      "name16":"VEGGIE MANIA",
      "name17":"MEAT LOVERS",
      "name18":"PEPPERONI FEAST",
      "name19":"TERIYAKI CHICKEN",
      "name20":"HAWAIIAN",
      "name21":"CHEESE MANIA",
      "sale": "Daily Promotions",
      "paradise": "The paradise of food is waiting for you! Come and enjoy the quintessence of dishes from professional chefs",
      "pizza": "Pizza",
      "sides": "Sides",
      "dessert": "Dessert",
      "drinks": "Drinks"
    },
    "vn":{
      "title-product1":"HƯƠNG VỊ THẾ GIỚI",
      "title-product2":"NGƯỜI MÊ HẢI SẢN",
      "title-product3":"ƯU ĐÃI TRẺ EM",
      "title-product4":"NGƯỜI YÊU THỊT & TRUYỀN THỐNG",
      "name1":"PIZZA BANGKOK CÀ RI XANH TÔM GÀ",
      "name2":"PIZZA BANGKOK CÀ RI XANH GÀ",
      "name3":"PIZZA BANGKOK CÀ RI XANH TÔM",
      "name4":"PIZZA BÒ BEEFSTEAK PHÔ MAI KIỂU NEW YORK",
      "name5":"PIZZA BÒ & TÔM NƯỚNG KIỂU MỸ",
      "name6":"PIZZA HẢI SẢN XỐT MAYONNAISE",
      "name7":"PIZZA HẢI SẢN NHIỆT ĐỚI XỐT TIÊU",
      "name8":"PIZZA HẢI SẢN XỐT CÀ CHUA",
      "name9":"PIZZA HẢI SẢN BẠCH TUỘC XỐT MAYONNAISE",
      "name10":"PIZZA HẢI SẢN BẠCH TUỘC NHIỆT ĐỚI XỐT TIÊU",
      "name11":"PIZZA HẢI SẢN BẠCH TUỘC XỐT CÀ CHUA",
      "name12":"PIZZA XÚC XÍCH XỐT PHÔ MAI",
      "name13":"PIZZA GÀ PHÔ MAI THỊT HEO XÔNG KHÓI",
      "name14":"PIZZA NGẬP VỊ PHÔ MAI HẢO HẠNG",
      "name15":"PIZZA THẬP CẨM THƯỢNG HẠNG",
      "name16":"PIZZA RAU CỦ THẬP CẨM",
      "name17":"PIZZA 5 LOẠI THỊT THƯỢNG HẠNG",
      "name18":"PIZZA XÚC XÍCH Ý TRUYỀN THỐNG",
      "name19":"PIZZA GÀ XỐT TƯƠNG KIỂU NHẬT",
      "name20":"PIZZA DĂM BÔNG DỨA KIỂU HAWAII",
      "name21":"PIZZA PHÔ MAI HẢO HẠNG",
      "sale": "Khuyến Mãi Mỗi Ngày",
      "paradise": "Thiên đường của những món ăn đang chờ đợi bạn! Hãy đến và thưởng thức những tinh hoa của các món ăn từ tay những đầu bếp chuyên nghiệp",
      "pizza": "Pizza",
      "sides": "Món Phụ",
      "dessert": "Tráng Miệng",
      "drinks": "Đồ Uống"
    }
  }
</i18n>
