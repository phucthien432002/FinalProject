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
            <a href="/product-listing/Pizza">{{ $t("pizza") }}</a>
          </li>
          <li>
            <a href="/product-listing/Sides">{{ $t("sides") }}</a>
          </li>
          <li>
            <a href="/product-listing/Dessert">{{ $t("dessert") }}</a>
          </li>
          <li>
            <a class="px-5 py-1 bestsellerboder red--text" href="/product-listing/Drinks">{{ $t("drinks") }}</a>
          </li>
        </ul>
      </div>
    </v-container>
    </v-row>

    <v-row> </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
.dot-list{
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
      "sale": "Daily Promotions",
      "paradise": "The paradise of food is waiting for you! Come and enjoy the quintessence of dishes from professional chefs",
      "pizza": "Pizza",
      "sides": "Sides",
      "dessert": "Dessert",
      "drinks": "Drinks"
    },
    "vn":{
      "sale": "Khuyến Mãi Mỗi Ngày",
      "paradise": "Thiên đường của những món ăn đang chờ đợi bạn! Hãy đến và thưởng thức những tinh hoa của các món ăn từ tay những đầu bếp chuyên nghiệp",
      "pizza": "Pizza",
      "sides": "Món Phụ",
      "dessert": "Tráng Miệng",
      "drinks": "Đồ Uống"
    }
  }
</i18n>