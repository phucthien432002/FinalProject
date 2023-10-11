<template>
  <div>
    <v-fab-transition>
      <v-btn
        v-show="showFab"
        v-scroll="checkScroll"
        class="scrollupicon mr-3 facebook-icon"
        :light="$vuetify.theme.dark"
        fab
        fixed
        bottom
        left
        @click="openFacebook"
      >
        <v-icon>mdi-facebook</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showFab: false,
    };
  },
  methods: {
    checkScroll() {
      const h = window.scrollY;
      if (h > 300) {
        this.showFab = true;
      } else {
        this.showFab = false;
      }
    },
    openFacebook() {
      window.open("https://www.facebook.com/phucthien.2002");
    },
  },
};
</script>

<style scoped>
.facebook-icon {
  color: blue;
}
</style>
