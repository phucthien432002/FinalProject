<template>
  <div>
    <input type="text" v-model="inputText" placeholder="Enter text to sort" />
    <button @click="sortList">Sort</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: "",
      initialDecks: [],
    };
  },
  created() {
    // Lưu danh sách ban đầu khi component được tạo
    this.initialDecks = [...this.$store.getters.decks];
  },
  methods: {
    sortList() {
      this.$emit("sort", this.inputText);
    },
  },
};
</script>
