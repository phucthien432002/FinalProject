<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="300">
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
                    ? 'width: 150px; height: 150px'
                    : 'width: 200px; height: 200px'
                "
              />
            </div>
            <div class="d-grid btn1">
              <button @click="removeFromCart(product)">Remove</button>
            </div>
          </div>
        </v-list-item>
        <div>
          <button v-if="cartHasItems" @click="showCheckoutForm">Thanh toán</button>
          <!-- Biểu mẫu nhập thông tin -->
          <form v-if="isCheckoutFormVisible" @submit.prevent="submitOrder">
            <div class="form-group">
              <label for="name">Tên:</label>
              <input type="text" id="name" v-model="orderInfo.name" required />
            </div>
            <div class="form-group">
              <label for="address">Địa chỉ:</label>
              <input type="text" id="address" v-model="orderInfo.address" required />
            </div>
            <!-- Thêm các trường khác tương tự -->
            <div>
              <v-alert
                v-if="showAlert"
                type="success"
                dismissible
                @input="showAlert = false"
              >
                Cảm ơn bạn đã đặt hàng!
              </v-alert>
              <button type="submit">Đặt hàng</button>
            </div>
          </form>
        </div>
      </v-list>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      showAlert: false,
      isCheckoutFormVisible: false, // Mặc định biểu mẫu không hiển thị
      orderInfo: {
        name: "",
        address: "",
        // Thêm các trường khác tương tự
      },
      cartHasItems: false,
      dialog: false,
    };
  },
  watch: {
    shoppingCart: {
      handler(newVal) {
        // Khi dữ liệu trong giỏ hàng thay đổi, cập nhật biến cartHasItems
        this.cartHasItems = newVal.length > 0;
      },
      immediate: true, // Tính giá trị ban đầu khi component được tạo
    },
  },
  methods: {
    showCheckoutForm() {
      // Hiển thị biểu mẫu khi nút thanh toán được nhấn
      this.isCheckoutFormVisible = true;
    },

    submitOrder() {
      // Truy cập giỏ hàng và console log ra sản phẩm
      const shoppingCart = this.$store.state.shoppingCart;
      console.log("Sản phẩm trong giỏ hàng của bạn:", shoppingCart);

      // Lấy thông tin đặt hàng từ biểu mẫu
      const orderData = {
        ...this.orderInfo,
        shoppingCart,
      };

      // Gọi mutation để xóa tất cả sản phẩm khỏi giỏ hàng
      this.$store.commit("clearCart");

      // Xóa trạng thái giỏ hàng từ localStorage
      localStorage.removeItem("shoppingCart");

      // Gửi dữ liệu đặt hàng (bao gồm thông tin và giỏ hàng) lên Firebase Realtime Database
      const firebaseUrl =
        "https://final-project-bf632-default-rtdb.firebaseio.com/orders.json";
      axios
        .post(firebaseUrl, orderData)
        .then((response) => {
          console.log("Dữ liệu đã được gửi thành công:", response.data);
          // Thực hiện các xử lý khác sau khi gửi dữ liệu thành công
          // Sau khi hoàn thành đặt hàng, bạn có thể ẩn biểu mẫu lại
          this.isCheckoutFormVisible = false;
        })
        .catch((error) => {
          console.error("Lỗi khi gửi dữ liệu lên Firebase:", error);
          // Xử lý lỗi nếu cần
        });
      this.showAlert = true;
      window.location.reload();
    },
    removeFromCart(product) {
      // Gọi mutation để xóa sản phẩm khỏi giỏ hàng
      this.$store.commit("removeFromCart", product);
    },
  },
  computed: {
    shoppingCart() {
      return this.$store.state.shoppingCart;
    },

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
.v-dialog {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 98%;
  transform: translateX(-100%);
  z-index: 1000;
}
</style>
