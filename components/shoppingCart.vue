<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on"> Cart </v-btn>
      </template>
      <v-list width="300px" class="justify-center align-center">
        <v-list-item>
          <div
            v-for="(product, index) in $store.state.shoppingCart"
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
            <div>
              <h5 style="flex: none !important">{{ product.name }}</h5>
              <p>{{ product.description }}</p>
              <p>{{ product.price }} x $ {{ product.amount }}</p>
            </div>
            <div>
              <img
                :src="product.photoURL"
                :style="
                  $vuetify.breakpoint.smAndDown
                    ? 'width: 50px; height: 50px'
                    : 'width: 150px; height: 150px'
                "
              />
            </div>
            <div class="d-grid">
              <button @click="removeFromCart(product)">Remove</button>
            </div>
          </div>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>

<style></style>
