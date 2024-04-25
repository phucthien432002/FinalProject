<template>
  <form @submit.prevent="onSave">
    <div class="from_group">
      <label for="">Name:</label>
      <input
        v-model="editedDeck.name"
        class="form_control form_input"
        type="text"
        placeholder="Please enter name Deck"
      />
    </div>
    <div class="from_group">
      <label for="">Price:</label>
      <input
        type="number"
        v-model="editedDeck.price"
        class="form_control form_input"
        placeholder="Please enter price"
      />
    </div>
    <div class="from_group">
      <label for="">Thumbnail:</label>
      <input
        v-model="editedDeck.thumbnail"
        class="form_control form_input"
        type="text"
        placeholder="https://example.com/foo.png"
      />
      <div class="preview"></div>
    </div>
    <div
      class="form_group"
      style="display: flex; justify-content: end; padding-top: 12px"
    >
      <button class="btn1" type="button" @click.prevent="closeModal">Close Modal</button>
      <button class="btn1 ml-3" type="submit">
        {{ editedDeck && editedDeck.id ? "Edit" : "Create" }}
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    deck: {
      type: Object,
      default: () => ({ name: "", price: "", thumbnail: "" }),
    },
  },
  data() {
    return {
      editedDeck: {
        name: this.deck.name || "",
        price: this.deck.price ? parseInt(this.deck.price) : null, // Chuyển đổi kiểu dữ liệu thành number
        thumbnail: this.deck.thumbnail || "",
      },
    };
  },
  methods: {
    closeModal() {
      this.$modal.close({ name: "DeckFormModal" });
    },
    onSave() {
      this.$emit("submit", this.editedDeck);
    },
  },
};
</script>

<style>
.form_input {
  border: 2px solid grey;
  width: 100%;
  border-radius: 8px;
}
</style>
