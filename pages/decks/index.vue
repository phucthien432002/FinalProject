<template>
  <div>
    <div class="container">
      <div class="d-flex justify-space-between my-3">
        <h3>List of your decks:</h3>
        <SortItem buttonText="Sort Alphabetically" @sort="sortDecks" />
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
            :price="parseInt(deck.price)"
            :thumbnail="deck.thumbnail"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import DeckList from "@/components/Decks/DeckList";
import SortItem from "@/components/SortItem";
export default {
  middleware: ["check-auth", "auth"],
  components: {
    DeckList,
    SortItem,
  },
  computed: {
    decks() {
      return this.$store.getters.decks;
    },
    sortedDecks() {
      // Mặc định sắp xếp theo giá
      return this.decks.slice().sort((a, b) => a.price - b.price);
    },
  },
  methods: {
    sortDecks(text) {
      // Kiểm tra nếu initialDecks chưa được khởi tạo hoặc không có giá trị
      if (!this.initialDecks || !this.initialDecks.length) {
        // Lưu danh sách ban đầu từ Vuex vào initialDecks
        this.initialDecks = [...this.$store.getters.decks];
      }

      if (text) {
        const sortedDecks = this.initialDecks
          .filter((deck) => deck.name.toLowerCase().includes(text.toLowerCase()))
          .sort((a, b) => a.name.localeCompare(b.name));
        this.$store.commit("setDecks", sortedDecks);
      } else {
        // Nếu không có text, trở lại danh sách ban đầu
        this.$store.commit("setDecks", this.initialDecks);
      }
    },

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
