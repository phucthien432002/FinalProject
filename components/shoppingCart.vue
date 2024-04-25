<template>
  <div class="cart-icon-container">
    <button class="cart-icon btn1" @click="toggleCart">
      <v-icon>mdi-cart</v-icon>
    </button>
    <div v-show="showCart" class="cart-container card">
      <div class="cart-header">
        <h2>Shopping Cart</h2>
        <span>Total: ${{ total }}</span>
      </div>
      <div class="cart-items" v-show="cartItems.length > 0">
        <div class="cart-scroll">
          <!-- Thêm thẻ card bao bọc cho danh sách sản phẩm -->
          <div class="cart-card-wrapper">
            <div
              v-for="(item, index) in cartItems"
              :key="index"
              class="cart-card d-flex flex-column"
            >
              <div class="thumbnail-item">
                <img :src="item.thumbnail" :alt="item.name" class="thumbnail" />
              </div>
              <div class="item-info">
                <h3>{{ item.name }}</h3>
                <p>Price: ${{ item.price }}</p>
                <p>Quantity: {{ item.quantity }}</p>
                <button
                  class="btn1"
                  style="background-color: red"
                  @click="removeItem(index)"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="cartItems.length === 0">
        <h5>Your cart is empty. Please add items to your cart.</h5>
      </div>
      <div class="checkout-btn">
        <button class="btn1" @click="checkOut">Checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showCart: false,
    };
  },
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    },
    total() {
      return this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    },
  },
  methods: {
    toggleCart() {
      this.showCart = !this.showCart;
    },
    removeItem(index) {
      // Gọi mutation để xóa sản phẩm khỏi giỏ hàng
      this.$store.commit("deleteCartItem", index);
      // Cập nhật localStorage
      localStorage.setItem("cartItems", JSON.stringify(this.$store.state.cartItems));
    },
    checkOut() {
      this.$router.push("/order-confirmation");
    },
  },
};
</script>

<style scoped>
.cart-icon-container {
  position: relative;
}

.cart-container {
  position: absolute;
  left: -150%;
  z-index: 999;
  width: 300px;
  background: white;
}

.cart-header {
  margin-bottom: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.cart-scroll {
  max-height: 400px;
  overflow-y: auto;
}

.cart-card-wrapper {
  margin-left: -10px;
  height: 250px;
}

.cart-card {
  display: flex;
  text-align: center;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}

.thumbnail {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 10px;
  text-align: center;
}
.thumbnail-item {
  text-align: center;
}

.item-info {
  flex-grow: 1;
}
.card {
  margin-right: 400px !important;
}
.checkout-btn {
  text-align: center;
}
.checkout-btn button {
  width: 100%;
}
</style>
