<template>
  <div class="text-center" style="z-index: 999999999999 !important; margin-right: 8px">
    <div class="cart-icon-container">
      <span class="cart-count">{{ cartItemCount }}</span>
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
              <h5 style="margin-left: 4px">{{ totalSum - discountedAmount }}₫</h5>
            </div>
          </v-list-item>
        </v-list>
        <v-list class="justify-center align-center cart-container pt-4">
          <v-list-item class="d-flex flex-column pt-4" style="gap: 10px">
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
                <p style="font-weight: bold">
                  {{ product.price }}₫ x {{ product.amount }}
                </p>
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
          <div
            class="px-3 pb-4"
            style="d-flex flex-column;border-top: 2px solid black"
            v-if="cartHasItems"
          >
            <div class="discount-voucher">
              <input type="text" v-model="discountCode" placeholder="Nhập mã giảm giá" />
              <button @click="applyDiscount">Áp dụng</button>
            </div>
            <div v-if="discountCodeError" class="error-message">
              {{ discountCodeError }}
            </div>
            <div class="row-checkout">
              <div class="col-8">
                <span class="grey--text font-weight-bold">{{
                  $t("total-checkout")
                }}</span>
              </div>

              <div class="col-4 text-right">
                <span style="font-weight: bold">{{ totalSum - discountedAmount }}đ</span>
              </div>
            </div>
            <div class="row-checkout">
              <div class="col-8">
                <span class="grey--text font-weight-bold">{{
                  $t("promo-checkout")
                }}</span>
              </div>

              <div class="col-4 text-right">
                <span style="color: red">0đ</span>
              </div>
            </div>
            <div class="row-checkout">
              <div class="col-8">
                <span class="grey--text font-weight-bold">{{
                  $t("voucher-checkout")
                }}</span>
              </div>

              <div class="col-4 text-right">
                <span style="color: red">{{ discountedAmount }}đ</span>
              </div>
            </div>
            <div class="row-checkout">
              <div class="col-8">
                <span class="grey--text font-weight-bold">{{ $t("ship-checkout") }}</span>
              </div>

              <div class="col-4 text-right">
                <span style="color: red">0đ</span>
              </div>
            </div>
          </div>
          <div>
            <button class="btn-checkout" v-if="cartHasItems" @click="showCheckoutForm">
              {{ $t("checkout") }} - {{ totalSum - discountedAmount }}₫
            </button>

            <form
              v-if="isCheckoutFormVisible"
              @submit.prevent="submitOrder"
              class="centered-form"
            >
              <div class="form-group">
                <label for="name">Tên:</label>
                <input
                  type="text"
                  id="name"
                  v-model="orderInfo.name"
                  required
                  class="custom-input"
                />
              </div>
              <div class="form-group">
                <label for="address">Địa chỉ:</label>
                <input
                  type="text"
                  id="address"
                  v-model="orderInfo.address"
                  required
                  class="custom-input"
                />
              </div>
              <div class="form-group">
                <label for="phone">Số điện thoại:</label>
                <input
                  type="text"
                  id="phone"
                  v-model="orderInfo.phone"
                  required
                  class="custom-input"
                />
              </div>
              <div class="form-group">
                <label for="address">Email:</label>
                <input
                  type="text"
                  id="address"
                  v-model="orderInfo.email"
                  required
                  class="custom-input"
                />

                <div v-if="emailError" class="error-message">
                  {{ emailError }}
                </div>
              </div>
              <div class="button-order">
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
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      emailValid: false,
      emailError: "",
      discountCodeEmpty: false,
      discountCode: "",
      discountedAmount: 0,
      showAlert: false,
      isCheckoutFormVisible: false,
      orderInfo: {
        name: "",
        address: "",
        phone: "",
        email: "",
      },
      cartHasItems: false,
      dialog: false,
      discountCodeError: "",
    };
  },
  watch: {
    shoppingCart: {
      handler(newVal) {
        // Khi dữ liệu trong giỏ hàng thay đổi, cập nhật biến cartHasItems
        this.cartHasItems = newVal.length > 0;
      },
      immediate: true,
    },
  },
  methods: {
    validateEmail(email) {
      const emailPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailPattern.test(email);
    },
    applyDiscount() {
      if (this.discountCode === "GIAM15K") {
        this.discountedAmount = 15000;

        this.discountCode = "GIAM15K";

        this.discountCodeError = "";

        this.discountCodeEmpty = false;
      } else if (this.discountCode === "GIAM20K") {
        this.discountedAmount = 20000;

        this.discountCode = "GIAM20K";

        this.discountCodeError = "";

        this.discountCodeEmpty = false;
      } else {
        if (!this.discountCode.trim()) {
          this.discountCodeError = "Vui lòng nhập mã khuyến mãi";

          this.discountCodeEmpty = true;
        } else {
          this.discountCodeError = "Mã giảm giá không hợp lệ";

          this.discountCodeEmpty = false;

          this.discountedAmount = 0;
        }
      }
    },
    showCheckoutForm() {
      // Hiển thị biểu mẫu khi nút thanh toán được nhấn
      this.isCheckoutFormVisible = true;
    },

    submitOrder() {
      if (!this.validateEmail(this.orderInfo.email) || this.orderInfo.email.length < 9) {
        this.emailError = "Email không hợp lệ";
        this.orderInfo.email = "";
        return;
      } else {
        this.emailError = "";
      }

      const shoppingCart = this.$store.state.shoppingCart;
      console.log("Sản phẩm trong giỏ hàng của bạn:", shoppingCart);

      // Lấy thông tin đặt hàng từ biểu mẫu
      const orderData = {
        ...this.orderInfo,
        shoppingCart,
        discountCode: this.discountCode,
        totalAmount: this.totalSum - this.discountedAmount, //
      };

      // Gán giá trị của discountCode trước khi gửi lên Firebase
      this.discountCode = this.discountCode;

      this.$store.commit("clearCart");

      localStorage.removeItem("shoppingCart");

      const firebaseUrl =
        "https://shopping-website-62b9c-default-rtdb.firebaseio.com/orders.json";
      axios
        .post(firebaseUrl, orderData)
        .then((response) => {
          console.log("Dữ liệu đã được gửi thành công:", response.data);

          let totalSum = 0;
          const cartText = shoppingCart
            .map((product) => {
              totalSum += product.price * product.amount;
              return `
              <div>
              Tên sản phẩm: ${product.name}
              </div>
              <div>
              Giá: ${product.price}
              </div>
              <div>
              Số lượng: ${product.amount}
              </div>
  `;
            })
            .join("\r\n\r\n");
          const totalAmount = totalSum - this.discountedAmount;
          let message = `
          Tổng giá tiền của bạn là: ${totalAmount}  
`;
          axios.post("http://localhost:8080", {
            from: "phucthien1233212002@gmail.com",
            to: this.orderInfo.email,
            subject: "Your Order",
            text: [cartText, message],
          });
          this.isCheckoutFormVisible = false;
        })
        .catch((error) => {
          console.error("Lỗi khi gửi dữ liệu lên Firebase:", error);
        });

      this.showAlert = true;

      setTimeout(function () {
        window.location.reload();
      }, 1000);
      this.$router.push("/history");
    },
    removeFromCart(product) {
      this.$store.commit("removeFromCart", product);
      if (this.$store.state.shoppingCart.length === 0) {
        window.location.reload();
      }
    },
  },
  computed: {
    cartItemCount() {
      const cart = this.$store.state.shoppingCart;
      return cart.reduce((total, product) => total + product.amount, 0);
    },

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
.error-message {
  color: red;
  margin-top: 5px;
}
.discount-voucher {
  margin-top: 4px !important;
  gap: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 300px;
  margin: 0 auto;
}

.discount-voucher input[type="text"] {
  padding: 4px;
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

.discount-voucher button {
  padding: 4px 1px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.discount-voucher button:hover {
  background-color: #0056b3;
}
.custom-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 16px;
}
.centered-form {
  background-color: white;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}
.row-checkout {
  display: flex;
  flex-wrap: wrap;
}
.btn-checkout {
  color: #fff;
  background-color: #e31837;
  border-color: #e31837;
  width: 100%;
  display: inline-block;
  border: 1px solid transparent;
  padding: 0.75rem 1rem;
  text-align: center;
}
.cart-icon-container {
  position: relative;
}

.cart-count {
  position: relative;
  padding: 4px;
  top: -20px;
  right: -76px;
  background-color: #ff5000;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
  z-index: 9999999 !important;
}
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
.button-order button {
  padding: 4px 1px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
</style>

<i18n>
  {
    "en":{
      "checkout":"Proceed to checkout",
      "total-checkout":"Total",
      "promo-checkout":"Discount Promotion",
      "voucher-checkout":"Discount Voucher",
      "ship-checkout": "Delivery Charges"
    },
    "vn":{
      "checkout":"Hoàn tất đơn hàng",
      "total-checkout":"Tổng",
      "promo-checkout":"Giảm K.Mãi",
      "voucher-checkout":"Giảm Vouchers",
      "ship-checkout": "Phí giao hàng"
    }
  }
  
</i18n>
