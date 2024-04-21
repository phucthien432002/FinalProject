<template>
  <li>
    <nuxt-link class="deck" :to="`/decks/${id}`">
      <div class="card deck-card">
        <img :src="thumbnail" :alt="`Thumbnail of ${name}`" />

        <div class="card_body">
          <h3>{{ name }}</h3>
          <p>{{ description }}</p>
        </div>

        <!-- Nút "Delete" được đặt trong card -->
        <div class="btn-delete" style="text-align: right">
          <button class="btn1" style="background-color: red" @click.prevent="deleteDeck">
            Delete
          </button>
        </div>
      </div>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      default: "",
    },
    thumbnail: {
      type: String,
      require: true,
    },
  },
  methods: {
    deleteDeck() {
      // Gửi yêu cầu xóa deck lên Firebase
      fetch(
        `https://shoppingweb-de3d9-default-rtdb.firebaseio.com/decks/${this.id}.json`,
        {
          method: "DELETE",
        }
      )
        .then((response) => {
          response.ok;
          this.$emit("delete", this.id);
          alert("Bạn đã xóa deck thành công");
          window.location.reload();
        })
        .catch((e) => {
          context.error(e);
        });
    },
  },
};
</script>

<style>
.deck-card {
  position: relative;
}

.btn-delete {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
</style>
