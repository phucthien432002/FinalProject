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
              <a href="/product-listing/Deseert">{{ $t("dessert") }}</a>
            </li>
            <li>
              <a href="/product-listing/Drinks">{{ $t("drinks") }}</a>
            </li>
          </ul>
        </div>
      </v-container>
    </v-row>
    <div class="container">
      <div class="text-center">
        <h2>{{ $t("title1") }}</h2>
      </div>
      <v-col
        cols="12"
        class="flex-nowrap flex-md-wrap justify-content-start d-flex"
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
              <p class="card-text">
                {{ product.description }}
              </p>
              <div class="d-grid">
                <button @click="addToCart(product)" class="btn1">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </div>
    <div class="container">
      <div class="text-center">
        <h2>{{ $t("title2") }}</h2>
      </div>
      <v-col
        cols="12"
        class="py-2 flex-fit d-flex flex-wrap"
        style="margin: 0 !important; justify-content: center; align-items: center"
      >
        <div
          v-for="(product, index) in products2"
          :key="'product-' + index"
          class="px-1 py-1"
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
              <p class="card-text">
                {{ product.description }}
              </p>
              <div class="d-grid">
                <button @click="addToCart(product)" class="btn1">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </div>
    <div class="container">
      <div class="text-center">
        <h2>{{ $t("title3") }}</h2>
      </div>
      <v-col
        cols="12"
        class="flex-fit d-flex"
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
              <p class="card-text">
                {{ product.description }}
              </p>
              <div class="d-grid">
                <button @click="addToCart(product)" class="btn1">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </div>
    <div class="container">
      <div class="text-center">
        <h2>{{ $t("title4") }}</h2>
      </div>
      <v-col
        cols="12"
        class="flex-fit d-flex"
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
              <p class="card-text">
                {{ product.description }}
              </p>
              <div class="d-grid">
                <button @click="addToCart(product)" class="btn1">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </v-col>
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
          name: this.$t("name"),
          description: this.$t("description"),
          price: "1",
          photoURL: "https://img.dominos.vn/Menu+BG+-+TIENG+ANH_tom+ga.jpg",
        },
        {
          uuid: "2",
          name: this.$t("name2"),
          description: this.$t("description2"),
          price: "2",
          photoURL: "https://img.dominos.vn/Menu+BG+-+TIENG+ANH_full+ga.jpg",
        },
        {
          uuid: "3",
          name: this.$t("name3"),
          description: this.$t("description3"),
          price: "3",
          photoURL: "https://img.dominos.vn/Menu+BG+-+TIENG+ANH_full+tom.jpg",
        },
        {
          uuid: "4",
          name: this.$t("name4"),
          description: this.$t("description4"),
          price: "4",
          photoURL: "https://img.dominos.vn/Menu+BG+1.jpg",
        },
      ],
      products2: [
        {
          uuid: "1",
          name: this.$t("name5"),
          description: this.$t("description"),
          price: "1",
          photoURL: "https://img.dominos.vn/Menu+BG+-+TIENG+ANH_tom+ga.jpg",
        },
        {
          uuid: "2",
          name: this.$t("name6"),
          description: this.$t("description2"),
          price: "2",
          photoURL: "https://img.dominos.vn/Menu+BG+-+TIENG+ANH_full+ga.jpg",
        },
        {
          uuid: "3",
          name: this.$t("name7"),
          description: this.$t("description3"),
          price: "3",
          photoURL: "https://img.dominos.vn/Menu+BG+-+TIENG+ANH_full+tom.jpg",
        },
        {
          uuid: "4",
          name: this.$t("name8"),
          description: this.$t("description4"),
          price: "4",
          photoURL: "https://img.dominos.vn/Menu+BG+1.jpg",
        },
        {
          uuid: "4",
          name: this.$t("name9"),
          description: this.$t("description4"),
          price: "4",
          photoURL: "https://img.dominos.vn/Menu+BG+1.jpg",
        },
        {
          uuid: "4",
          name: this.$t("name10"),
          description: this.$t("description4"),
          price: "4",
          photoURL: "https://img.dominos.vn/Menu+BG+1.jpg",
        },
        {
          uuid: "4",
          name: this.$t("name11"),
          description: this.$t("description4"),
          price: "4",
          photoURL: "https://img.dominos.vn/Menu+BG+1.jpg",
        },
      ],
      products3: [
        {
          uuid: "1",
          name: this.$t("name12"),
          description: this.$t("description"),
          price: "1",
          photoURL: "https://img.dominos.vn/Menu+BG+-+TIENG+ANH_tom+ga.jpg",
        },
        {
          uuid: "2",
          name: this.$t("name13"),
          description: this.$t("description2"),
          price: "2",
          photoURL: "https://img.dominos.vn/Menu+BG+-+TIENG+ANH_full+ga.jpg",
        },
      ],
      products4: [
        {
          uuid: "1",
          name: this.$t("name14"),
          description: this.$t("description"),
          price: "1",
          photoURL: "https://img.dominos.vn/Menu+BG+-+TIENG+ANH_tom+ga.jpg",
        },
        {
          uuid: "2",
          name: this.$t("name15"),
          description: this.$t("description2"),
          price: "2",
          photoURL: "https://img.dominos.vn/Menu+BG+-+TIENG+ANH_full+ga.jpg",
        },
        {
          uuid: "3",
          name: this.$t("name16"),
          description: this.$t("description3"),
          price: "3",
          photoURL: "https://img.dominos.vn/Menu+BG+-+TIENG+ANH_full+tom.jpg",
        },
        {
          uuid: "4",
          name: this.$t("name17"),
          description: this.$t("description4"),
          price: "4",
          photoURL: "https://img.dominos.vn/Menu+BG+1.jpg",
        },
        {
          uuid: "4",
          name: this.$t("name18"),
          description: this.$t("description4"),
          price: "4",
          photoURL: "https://img.dominos.vn/Menu+BG+1.jpg",
        },
        {
          uuid: "4",
          name: this.$t("name19"),
          description: this.$t("description4"),
          price: "4",
          photoURL: "https://img.dominos.vn/Menu+BG+1.jpg",
        },
        {
          uuid: "4",
          name: this.$t("name20"),
          description: this.$t("description4"),
          price: "4",
          photoURL: "https://img.dominos.vn/Menu+BG+1.jpg",
        },
      ],
      shoppingCart: [],
    };
  },
  mounted() {
    this.shoppingCart = JSON.parse(localStorage.getItem("shoppingCart") || "[]");
  },
  watch: {
    shoppingCart: {
      handler(newValue) {
        localStorage.setItem("shoppingCart", JSON.stringify(newValue));
      },
      deep: true,
    },
  },
  methods: {
    ...mapMutations(["addToCart"]),
  },
};
</script>

<style scoped>
.btn1 {
  display: inline-block;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  border-radius: 3px;
  padding: 12px 24px;
  border: 0;
  color: #fff;
  background: #ff5000;
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
      "title1": "FLAVORS OF THE WORLD",
      "title2": "SEAFOOD CRAVERS",
      "title3": "KID FAVORS",
      "title4": "TRADITIONAL & MEAT LOVERS",
      "name":"BANGKOK GREEN CURRY SHRIMP CHICKEN",
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
      "name14":"EXTRAVAGANZA",
      "name15":"VEGGIE MANIA",
      "name16":"MEAT LOVERS",
      "name17":"PEPPERONI FEAST",
      "name18":"TERIYAKI CHICKEN",
      "name19":"HAWAIIAN",
      "name20":"CHEESE MANIA",
      "description":"1",
      "description2":"2",
      "description3":"3",
      "description4":"4",
      "sale": "Daily Promotions",
      "paradise": "The paradise of food is waiting for you! Come and enjoy the quintessence of dishes from professional chefs",
      "pizza": "Pizza",
      "sides": "Sides",
      "dessert": "Dessert",
      "drinks": "Drinks"
    },
    "vn":{
      "title1": "HƯƠNG VỊ THẾ GIỚI",
      "title2": "NGƯỜI YÊU HẢI SẢN",
      "title3": "DÀNH CHO TRẺ EM",
      "title4": "TRUYỀN THỐNG & NGƯỜI YÊU THỊT",
      "name":"PIZZA BANGKOK CÀ RI XANH TÔM GÀ",
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
      "name12":"PIZZA XÚC XÍCH XỐT PHÔ MAI ",
      "name13":"PIZZA GÀ PHÔ MAI THỊT HEO XÔNG KHÓI",
      "name14":"PIZZA THẬP CẨM THƯỢNG HẠNG",
      "name15":"PIZZA RAU CỦ THẬP CẨM",
      "name16":"PIZZA 5 LOẠI THỊT THƯỢNG HẠNG",
      "name17":"PIZZA XÚC XÍCH Ý TRUYỀN THỐNG",
      "name18":"PIZZA GÀ XỐT TƯƠNG KIỂU NHẬT",
      "name19":"PIZZA DĂM BÔNG DỨA KIỂU HAWAII",
      "name20":"PIZZA PHÔ MAI HẢO HẠNG",
      "description":"1",
      "description2":"2",
      "description3":"3",
      "description4":"4",
      "sale": "Khuyến Mãi Mỗi Ngày",
      "paradise": "Thiên đường của những món ăn đang chờ đợi bạn! Hãy đến và thưởng thức những tinh hoa của các món ăn từ tay những đầu bếp chuyên nghiệp",
      "pizza": "Pizza",
      "sides": "Món Phụ",
      "dessert": "Tráng Miệng",
      "drinks": "Đồ Uống"
    }
  }
</i18n>
