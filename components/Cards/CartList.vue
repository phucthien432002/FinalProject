<template>
  <div class="column_3 mb-3">
    <div class="card">
      <div class="front-card">
        <img :src="picture" />
      </div>
      <div class="back-card">
        {{ keyword }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    keyword: {
      type: String,
      require: true,
    },
    picture: {
      type: String,
      require: true,
    },
  },
};
</script>

<style></style>
