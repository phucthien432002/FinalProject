<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </template>
      <v-list class="justify-center align-center cart-container">
        <v-list-item class="d-flex flex-column">
          <div
            v-for="(product, index) in $store.state.shoppingCart"
            :key="'product-' + index"
            width="300px"
            style="
              gap: 20px;
              align-items: center;
              justify-content: center;
              text-align: center;
            "
            class="py-2 justify-center align-center card-container"
          >
            <div>
              <h5 style="flex: none !important">{{ product.name }}</h5>
              <p>{{ product.description }}</p>
              <p>{{ product.price }} x $ {{ product.amount }}</p>
            </div>
            <div>
              <img
                :src="product.photoURL"
                :style="
                  $vuetify.breakpoint.smAndDown
                    ? 'width: 50px; height: 50px'
                    : 'width: 150px; height: 150px'
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
};
</script>

<style>
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
.cart-container {
  width: 300px;
  height: 80vh;
  overflow-x: auto;
}
</style>
