<template>
  <div class="orders-container">
    <div v-for="orderInfo in displayOrders" :key="orderInfo.id" class="order-card">
      <div class="card">
        <p class="card-title">
          {{ orderInfo.name }}
        </p>
        <div class="card-content">
          <div>Số điện thoại: {{ hidePhoneNumber(orderInfo.phone) }}</div>
          <div>Tổng tiền: {{ orderInfo.totalAmount }} $</div>
          <!-- Các thông tin khác -->
        </div>
      </div>
    </div>
    <button @click="showMore">Xem thêm</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      pageSize: 5,
      orders: [],
      orderInfo: {
        name: "",
        phone: "",
        totalAmount: "",
      },
    };
  },
  async asyncData() {
    const response = await axios.get(
      "https://shopping-website-62b9c-default-rtdb.firebaseio.com/orders.json"
    );
    return {
      orders: response.data,
    };
  },
  computed: {
    displayOrders() {
      const ordersArray = Object.values(this.orders);
      return ordersArray.slice(0, this.pageSize);
    },
  },
  methods: {
    showMore() {
      this.pageSize += 5;
    },
    hidePhoneNumber(phoneNumber) {
      if (phoneNumber.length === 10) {
        return "xxxxxx" + phoneNumber.substring(6);
      } else {
        return phoneNumber;
      }
    },
  },
};
</script>

<style scoped>
.card {
  padding: 20px;

  border: 1px solid #ddd;
}
.orders-container {
  display: flex;
  flex-direction: column;
}
button {
  margin-top: 16px;
}
</style>
