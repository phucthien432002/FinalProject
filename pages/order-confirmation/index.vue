<template>
  <div class="confirmation-page">
    <h1>Confirm your order</h1>
    <form @submit.prevent="confirmOrder">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div class="form-group">
        <label for="address">Address:</label>
        <input type="text" id="address" v-model="address" required />
      </div>
      <div class="form-group">
        <label for="payment">Payment Method:</label>
        <select id="payment" v-model="paymentMethod" required>
          <option value="credit_card">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="apple_pay">Apple Pay</option>
        </select>
      </div>
      <button class="confirm-btn btn1" type="submit">Confirm Order</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  data() {
    return {
      name: "",
      address: "",
      paymentMethod: "",
      cartItems: [],
    };
  },
  mounted() {
    this.cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  },
  methods: {
    confirmOrder() {
      const currentTime = new Date(); // Lấy thời gian hiện tại
      const isoTime = currentTime.toISOString(); // Chuyển đổi thành chuỗi ISO 8601
      const order = {
        email: this.userEmail,
        name: this.name,
        address: this.address,
        paymentMethod: this.paymentMethod,
        items: this.cartItems,
        total: this.total,
        createdAt: isoTime, // Thêm trường createdAt vào đơn hàng
      };

      axios
        .post("https://shoppingweb-de3d9-default-rtdb.firebaseio.com/orders.json", order)
        .then((response) => {
          console.log("Order placed successfully:", response.data);
          localStorage.removeItem("cartItems");
          this.$router.replace("/decks");
          setTimeout(() => {
            window.location.reload();
          }, 500);
        })
        .catch((error) => {
          console.error("Error placing order:", error);
          // Xử lý lỗi nếu cần thiết
        });
    },
  },

  computed: {
    ...mapState(["userEmail"]),
    total() {
      return this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    },
  },
};
</script>
