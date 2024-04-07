<template>
  <div>
    <header>
      <nav>
        <ul class="header_setting">
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/decks">Decks</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/profile">Profile</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/settings">Settings</nuxt-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header_setting {
  display: flex;
  gap: 40px;
}
</style>
