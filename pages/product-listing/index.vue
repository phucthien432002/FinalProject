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
            <a class="px-5 py-1 bestsellerboder red--text" href="/product-listing/Pizza">{{ $t("pizza") }}</a>
          </li>
          <li>
            <a href="/product-listing/Sides">{{ $t("sides") }}</a>
          </li>
          <li>
            <a href="/product-listing/Deseert">{{ $t("dessert") }}</a>
          </li>
          <li>
            <a href="/product-listing/Drinks">{{ $t("drinks") }}</a>
          </li>
        </ul>
      </div>
      <v-sheet>
        <v-row class="mx-7 ma-7 ">
          <v-hover v-for="(form, index) in forms" :key="index">
            <template>
              <v-card
                data-aos="zoom-out-down"
                data-aos-duration="900"
                class="d-flex flex-column rounded-xl"
                :class="$vuetify.breakpoint.smAndDown
                  ? ' my-4 mx-auto'
                  : ' mx-auto px-3 ma-7 px-6 '"
              >
                <v-col class="justify-center">
                  <v-img
                    contain
                    cover
                    height="300px"
                    :max-width="$vuetify.breakpoint.smAndDown ? '290px': '400px '"
                    :src="form.imgs"
                  />
                </v-col>
                <v-card-text class="d-flex flex-column text-center font-weight-bold">
                  <h2 class="text-h5 black--text">
                    {{ form.Name }}
                  </h2>
                  <h3>{{ form.Position }}</h3>
                </v-card-text>
              </v-card>
            </template>
          </v-hover>
        </v-row>
      </v-sheet>
    </v-container>
    </v-row>
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