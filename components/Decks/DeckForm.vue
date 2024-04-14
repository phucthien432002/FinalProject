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
      <label for="">Description:</label>
      <textarea
        v-model="editedDeck.description"
        class="form_control form_input"
        placeholder="Please enter description"
      ></textarea>
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
      <button class="btn1" @click.prevent="closeModal">Close Modal</button>
      <button class="btn1 ml-3" type="submit">Create Modal</button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    deck: {
      type: Object,
      default: () => ({ name: "", description: "", thumbnail: "" }),
    },
  },
  data() {
    return {
      editedDeck: this.deck
        ? { ...this.deck }
        : { name: "", description: "", thumbnail: "" },
    };
  },
  methods: {
    closeModal() {
      this.$modal.close({ name: "CreateDeckModal" });
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
