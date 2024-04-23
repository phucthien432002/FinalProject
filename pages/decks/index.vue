<template>
  <div>
    <div class="container">
      <div class="d-flex justify-space-between my-3">
        <h3>List of your decks:</h3>
        <button class="btn1" @click.prevent="openModal">Create a Deck</button>
      </div>
      <ul class="decks-list">
        <deck-list
          v-for="deck in decks"
          :id="deck.id"
          :key="deck.id"
          :name="deck.name"
          :description="deck.description"
          :thumbnail="deck.thumbnail"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import DeckList from "@/components/Decks/DeckList";

export default {
  middleware: "auth",
  components: {
    DeckList,
  },
  computed: {
    decks() {
      return this.$store.getters.decks;
    },
  },
  methods: {
    openModal() {
      this.$modal.open({ name: "DeckFormModal" });
    },
  },
};
</script>

<style lang="scss">
.card {
  border: 2px solid black;
}

.deck {
  display: block;
}
li {
  list-style-type: none;
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
}
.decks-list {
  padding: 0;
  margin: 0;
}
.deck-card {
  padding: 2px;
  display: flex;
  flex-direction: row;
  height: 250px;
  img {
    width: 250px;
    height: auto;
  }
}
.modal_body {
  background-color: #ffffff;
  padding: 1rem;
}
.form_control {
  display: flex;
  flex-direction: column;
}
</style>
