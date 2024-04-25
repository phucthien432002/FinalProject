<template>
  <li>
    <nuxt-link class="deck" :to="`/decks/${id}`">
      <div class="card deck-card">
        <img :src="thumbnail" :alt="`Thumbnail of ${name}`" />

        <div class="card_body">
          <h3>{{ name }}</h3>
          <p>{{ description }}</p>
        </div>
        <div class="btn-add">
          <button class="btn1" style="background-color: green" @click.prevent="addToCart">
            Add to Cart
          </button>
        </div>
        <!-- Nút "Delete" được đặt trong card -->
        <div class="btn-delete" v-if="$store.state.isAdmin">
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
      // Gọi action deleteDeck từ Vuex Store và truyền id của deck cần xóa
      this.$store
        .dispatch("deleteDeck", this.id)
        .then(() => {
          // Xóa thành công, thông báo và làm mới trang
          alert("Bạn đã xóa deck thành công");
          window.location.reload();
        })
        .catch((error) => {
          // Xử lý lỗi khi xóa deck
          console.error(error);
        });
    },
  },
};
</script>

<style>
.card_body {
  text-align: center;
}
.btn-delete {
  text-align: center;
}
.btn-add {
  text-align: center;
}
</style>
