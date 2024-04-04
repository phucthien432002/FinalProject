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
    <main class="general">
      <h3>General settings...</h3>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.page {
  display: flex;
}
.main {
  margin-left: 3rem;
}
</style>
