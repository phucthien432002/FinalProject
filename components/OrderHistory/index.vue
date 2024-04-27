<template>
  <div class="order-history-page">
    <h1>Order History</h1>
    <table>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Date</th>
          <th>Total</th>
          <th>Payment Method</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td>{{ order.id }}</td>
          <td>{{ order.createdAt }}</td>
          <td>{{ order.total }}</td>
          <td>{{ order.paymentMethod }}</td>
          <td>
            <button
              v-if="$store.state.isAdmin"
              class="btn1"
              @click.prevent="deleteOrder(order.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  data() {
    return {
      orders: [],
    };
  },
  computed: {
    ...mapState(["isAdmin", "userEmail"]),
  },
  mounted() {
    axios
      .get("https://shoppingweb-de3d9-default-rtdb.firebaseio.com/orders.json")
      .then((response) => {
        const ordersArray = [];
        for (const key in response.data) {
          ordersArray.push({
            id: key,
            ...response.data[key],
          });
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
