<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on"> Dropdown </v-btn>
      </template>
      <v-list width="300px" class="justify-center align-center">
        <v-list-item
          v-for="(product, index) in products"
          :key="'product-' + index"
          width="300px"
          style="
            gap: 20px;
            align-items: center;
            justify-content: center;
            text-align: center;
          "
          class="py-2 justify-center align-center"
        >
          <v-list-item-title style="flex: none !important">{{
            product.name
          }}</v-list-item-title>
          <p>{{ product.description }}</p>
          <p>{{ product.price }} x $ {{ product.amount }}</p>
          <img
            :src="product.photoURL"
            :style="
              $vuetify.breakpoint.smAndDown
                ? 'width: 50px; height: 50px'
                : 'width: 150px; height: 150px'
            "
          />
          <div class="d-grid">
            <button>Remove</button>
          </div>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["products"]),
  },
};
</script>

<style></style>
