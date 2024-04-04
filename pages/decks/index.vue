<template>
  <div>
    <div class="container">
      <h3>List of your decks:</h3>
      <ul class="decks-list">
        <li class="li-card">
          <nuxt-link class="deck" to="/decks/1">
            <div class="card deck-card">
              <img
                src="https://i.etsystatic.com/29488153/r/il/e0f22b/3860244894/il_fullxfull.3860244894_p9az.jpg"
                alt=""
              />

              <div class="card_body">
                <h3>Title card</h3>
                <p>Description card</p>
              </div>
            </div>
          </nuxt-link>
        </li>
        <li class="li-card">
          <nuxt-link class="deck" to="/decks/2">
            <div class="card deck-card">
              <img
                src="https://i.etsystatic.com/29488153/r/il/e0f22b/3860244894/il_fullxfull.3860244894_p9az.jpg"
                alt=""
              />

              <div class="card_body">
                <h3>Title card</h3>
                <p>Description card</p>
              </div>
            </div>
          </nuxt-link>
        </li>
        <li class="li-card">
          <nuxt-link class="deck" to="/decks/3">
            <div class="card deck-card">
              <img
                src="https://i.etsystatic.com/29488153/r/il/e0f22b/3860244894/il_fullxfull.3860244894_p9az.jpg"
                alt=""
              />

              <div class="card_body">
                <h3>Title card</h3>
                <p>Description card</p>
              </div>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deckID: "1",
    };
  },
  methods: {
    showDeck() {
      this.$router.push(`/decks/${this.deckID}`);
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
</style>
