<template>
  <div>
    <v-container>
    <div
      :class="
        $vuetify.breakpoint.xs ? 'd-flex flex-column' : 'text-center d-flex'
      "
      class="bordercard mt-10"
    >
      <div>
        <h2 class="px-5">{{ $t("what") }}</h2>
      </div>
      <div class="d-flex flex-wrap text-h6">
        <a href="" class="px-5 no-underline black--text">{{ $t("sale") }}</a>
        <a
          class="px-5 bestsellerboder red--text"
          @click="scrollTo('bestseller')"
          >{{ $t("bestseller") }}</a
        >
      </div>
    </div>
    <div>
      <bestsellerimg></bestsellerimg>
    </div>
  </v-container>
  </div>
</template>

<script>
import bestsellerimg from "./bestsellerimg.vue";
export default {
  components: { bestsellerimg },
  methods: {
    scrollTo(sectionId) {
      var windowHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
      // 100vh;
      var scrollToValue = (windowHeight * 100) / 100;
      const element = document.getElementById(sectionId);
      if (element) {
        console.log(window.scrollY);
        window.scrollTo({
          behavior: "smooth",
          top: element.offsetTop + scrollToValue - 56,
        });
      }
    },
  },
};
</script>

<style>
.no-underline {
  text-decoration: none;
}
.bordercard {
  border-color: #dfe4ea;
  border-bottom: 1px solid #dee2e6;
}
.bestsellerboder {
  border-bottom: 3px solid #e31837;
}
</style>

