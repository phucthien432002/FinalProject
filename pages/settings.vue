<template>
  <div class="page">
    <div class="nav">
      <ul>
        <li>
          <nuxt-link to="/settings">General</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/settings/deck">Deck</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/settings/schedule">Schedule</nuxt-link>
        </li>
      </ul>
    </div>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
export default {
  middleware: ["check-auth", "auth"],
};
</script>

<style lang="scss">
.page {
  display: flex;
}
.main {
  margin-left: 3rem;
}
</style>
