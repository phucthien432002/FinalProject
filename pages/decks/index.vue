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
          :id="deck._id"
          :key="deck._id"
          :name="deck.name"
          :description="deck.description"
          :thumbnail="deck.thumbnail"
        />
      </ul>
    </div>
    <!--  Modal -->
    <v-modal name="CreateDeckModal">
      <div class="modal_body">
        <h2>Create a new Deck</h2>
        <form action="">
          <div class="from_group">
            <label for="">Name:</label>
            <input
              style="border: 2px solid grey; width: 100%; border-radius: 8px"
              class="form_control"
              type="text"
              placeholder="Please enter name Deck"
            />
          </div>
          <div class="from_group">
            <label for="">Description:</label>
            <textarea
              style="border: 2px solid grey; width: 100%; border-radius: 8px"
              class="form_control"
              placeholder="Please enter description"
            ></textarea>
          </div>
          <div class="from_group">
            <label for="">Thumbnail:</label>
            <input type="file" />
            <div class="review"></div>
          </div>
          <div
            class="form_group"
            style="display: flex; justify-content: end; padding-top: 12px"
          >
            <button class="btn1" @click.prevent="closeModal">Close Modal</button>
            <button class="btn1 ml-3" @click.prevent="closeModal">Create Modal</button>
          </div>
        </form>
      </div>
    </v-modal>
  </div>
</template>

<script>
import DeckList from "@/components/Decks/DeckList";

export default {
  components: {
    DeckList,
  },
  asyncData(context, callback) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          decks: [
            {
              _id: 1,
              name: "1",
              description: "1",
              thumbnail:
                "https://i.etsystatic.com/29488153/r/il/e0f22b/3860244894/il_fullxfull.3860244894_p9az.jpg",
            },
            {
              _id: 2,
              name: "2",
              description: "2",
              thumbnail:
                "https://i.etsystatic.com/29488153/r/il/e0f22b/3860244894/il_fullxfull.3860244894_p9az.jpg",
            },
            {
              _id: 3,
              name: "3",
              description: "3",
              thumbnail:
                "https://i.etsystatic.com/29488153/r/il/e0f22b/3860244894/il_fullxfull.3860244894_p9az.jpg",
            },
          ],
        });
      }, 1500);
    })
      .then((data) => {
        return data;
      })
      .catch((e) => {
        console.log(e);
      });
  },

  methods: {
    closeModal() {
      this.$modal.close({ name: "CreateDeckModal" });
    },
    openModal() {
      console.log("open modal");
      this.$modal.open({ name: "CreateDeckModal" });
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
