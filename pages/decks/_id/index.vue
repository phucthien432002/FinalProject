<template>
  <section>
    <div class="row">
      <div class="container text-center">
        <h3>Deck: {{ deck.name }}</h3>
        <div class="tools">
          <button class="btn1">Start Now</button>
          <button
            style="background-color: green !important"
            class="btn1"
            @click.prevent="openModal('CreateCardModal')"
          >
            Create a card
          </button>
          <button
            class="btn1"
            style="background-color: orange !important"
            @click.prevent="openModal('DeckFormModal')"
          >
            Edit Modal
          </button>
        </div>
        <hr class="divide" />
        <div class="row">
          <card-list
            v-for="card in cards"
            :key="card._id"
            :keyword="card.keyword"
            :picture="card.picture"
          />
        </div>
      </div>
    </div>
    <!--  Modal -->
    <v-modal name="CreateCardModal">
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
            <button class="btn1 ml-3" @click.prevent="openModal">Create Modal</button>
          </div>
        </form>
      </div>
    </v-modal>
  </section>
</template>

<script>
import axios from "axios";
import CardList from "@/components/Cards/CartList.vue";
export default {
  components: {
    CardList,
  },
  asyncData(context) {
    return axios
      .get(
        `https://shoppingweb-de3d9-default-rtdb.firebaseio.com/decks/${context.params.id}.json`
      )
      .then((response) => {
        return {
          deck: response.data,
        };
      })
      .catch((e) => {
        context.error(e);
      });
  },

  data() {
    return {
      cards: [
        {
          _id: 1,
          picture:
            "https://i.etsystatic.com/29488153/r/il/e0f22b/3860244894/il_fullxfull.3860244894_p9az.jpg",
          keyword: "Shop",
        },
        {
          _id: 2,
          picture:
            "https://i.etsystatic.com/29488153/r/il/e0f22b/3860244894/il_fullxfull.3860244894_p9az.jpg",
          keyword: "Shop",
        },
        {
          _id: 3,
          picture:
            "https://i.etsystatic.com/29488153/r/il/e0f22b/3860244894/il_fullxfull.3860244894_p9az.jpg",
          keyword: "Shop",
        },
        {
          _id: 4,
          picture:
            "https://i.etsystatic.com/29488153/r/il/e0f22b/3860244894/il_fullxfull.3860244894_p9az.jpg",
          keyword: "Shop",
        },
      ],
    };
  },

  methods: {
    closeModal() {
      this.$modal.close({ name: "CreateCardModal" });
    },
    openModal(name) {
      if (name === "CreateCardModal") {
        this.$modal.open({ name: "CreateCardModal" });
      } else if (name === "DeckFormModal") {
        this.$modal.open({
          name: "DeckFormModal",
          payload: { ...this.deck, id: this.$route.params.id },
        });
      }
    },
  },
};
</script>

<style>
section {
  padding-top: 3rem;
}
.divide {
  margin: 2rem 0;
}
.card {
  border: 2px solid black;
  padding: 1rem;
}
.column_3 {
  flex: 0 0 20%;
  max-width: 25%;
}
.row {
  display: flex;
  gap: 20px;
  justify-content: center;
  padding-bottom: 20px;
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
