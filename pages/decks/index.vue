<template>
  <div>
    <div class="container">
      <div class="d-flex justify-space-between my-3">
        <h3>List of your decks:</h3>
        <button v-if="$store.state.isAdmin" class="btn1" @click.prevent="openModal">
          Create a Deck
        </button>
      </div>
      <div class="deck-modal">
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
  </div>
</template>

<script>
import DeckList from "@/components/Decks/DeckList";

export default {
  middleware: ["check-auth", "auth"],
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
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.deck-card {
  flex: 1 0 24%;
  padding: 2px;
  display: flex;
  flex-direction: column;
  min-height: 250px;
  img {
    width: 220px;
    height: 220px;
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
.deck-modal {
  display: flex;
  flex-direction: wrap;
}
</style>
