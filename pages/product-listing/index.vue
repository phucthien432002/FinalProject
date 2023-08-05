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
      <v-row style="margin: 0 !important; justify-content: center; align-items: center">
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
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          name: this.$t("name"),
          description: this.$t("description"),
          price: "3",
          photoURL: "images/1.jpg",
        },
        {
          name: this.$t("name2"),
          description: this.$t("description2"),
          price: "3",
          photoURL: "images/1.jpg",
        },
        {
          name: this.$t("name3"),
          description: this.$t("description3"),
          price: "3",
          photoURL: "images/1.jpg",
        },
        {
          name: this.$t("name4"),
          description: this.$t("description4"),
          price: "3",
          photoURL: "images/1.jpg",
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
    addToCart(product) {
      let exists = false;

      for (const cartItem of this.shoppingCart) {
        if (cartItem.uuid === product.uuid) {
          cartItem.amount = cartItem.amount + 1;
          exists = true;
          break;
        }
      }
      if (!exists) {
        this.shoppingCart.push({
          ...product,
          amount: 1,
        });
      }
    },
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
      "name":"1",
      "name2":"2",
      "name3":"3",
      "name4":"4",
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
      "name":"1",
      "name2":"2",
      "name3":"3",
      "name4":"4",
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
