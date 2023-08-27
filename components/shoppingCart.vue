<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </template>
      <v-list v-if="$store.state.shoppingCart.length === 0">
        <v-list-item class="justify-center align-center">
          <div>
            <h5>Your cart is empty. Please add items to your cart.</h5>
          </div>
        </v-list-item>
      </v-list>
      <v-list v-else>
        <v-list-item
          class="justify-center align-center"
          style="border-bottom: 2px solid black"
        >
          <div class="d-flex">
            <h5>Shopping Cart -</h5>
            <h5 style="color: #c1a742; margin-left: 4px">{{ totalSum }}₫</h5>
          </div>
        </v-list-item>
      </v-list>
      <v-list class="justify-center align-center cart-container py-4">
        <v-list-item class="d-flex flex-column py-4" style="gap: 10px">
          <div
            v-for="(product, index) in $store.state.shoppingCart"
            :key="'product-' + index"
            width="300px"
            style="
              align-items: center;
              justify-content: center;
              text-align: center;
              padding: 20px;
            "
            class="justify-center align-center card-container"
          >
            <div class="card-body">
              <h5 style="flex: none !important; width: 200px; color: #ff5000">
                {{ product.name }}
              </h5>
              <p style="font-weight: bold">{{ product.price }}₫ x {{ product.amount }}</p>
            </div>
            <div>
              <img
                :src="product.photoURL"
                :style="
                  $vuetify.breakpoint.smAndDown
                    ? 'width: 50px; height: 50px'
                    : 'width: 200px; height: 200px'
                "
              />
            </div>
            <div class="d-grid btn1">
              <button @click="removeFromCart(product)">Remove</button>
            </div>
          </div>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  methods: {
    removeFromCart(product) {
      // Gọi mutation để xóa sản phẩm khỏi giỏ hàng
      this.$store.commit("removeFromCart", product);
    },
  },
  computed: {
    totalSum() {
      let sum = 0;
      for (const product of this.$store.state.shoppingCart) {
        sum += product.price * product.amount;
      }
      return sum;
    },
  },
};
</script>

<style>
.card-body {
  justify-content: center;
  display: grid !important;
  grid-template-rows: 1fr 1fr;
}
.card-container {
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  min-width: 250px;
}
.text-center {
  z-index: 999999 !important;
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
.cart-container {
  min-width: 300px;
  height: 80vh;
  overflow-x: auto;
}
</style>
