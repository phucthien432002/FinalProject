<template>
  <div class="order-history-page">
    <h1>Order History</h1>
    <div class="order-container" v-for="order in orders" :key="order.id">
      <div class="order-id">Order ID: {{ order.id }}</div>
      <div class="order-date">Date: {{ order.createdAt }}</div>
      <div class="order-total">Total: {{ order.total }}</div>
      <div class="order-payment-method">Payment Method: {{ order.paymentMethod }}</div>
      <div class="delete-button-container">
        <button class="btn1" @click.prevent="deleteOrder(order.id)">Delete</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  data() {
    return { orders: [] };
  },
  computed: { ...mapState(["isAdmin", "userEmail"]) },
  mounted() {
    axios
      .get("https://shoppingweb-de3d9-default-rtdb.firebaseio.com/orders.json")
      .then((response) => {
        const ordersArray = [];
        for (const key in response.data) {
          ordersArray.push({ id: key, ...response.data[key] });
        }
        this.orders = ordersArray.reverse();
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  },
  methods: {
    deleteOrder(orderId) {
      axios
        .delete(
          `https://shoppingweb-de3d9-default-rtdb.firebaseio.com/orders/${orderId}.json`
        )
        .then(() => {
          this.orders = this.orders.filter((order) => order.id !== orderId);
        })
        .catch((error) => {
          console.error("Error deleting order:", error);
        });
    },
  },
};
</script>
<style scoped>
.order-container {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 16px;
}
.order-id,
.order-date,
.order-total,
.order-payment-method {
  margin-bottom: 8px;
}
.delete-button-container {
  display: flex;
  justify-content: flex-end;
}
</style>
