<template>
  <div>
    <h1>Your profile is here</h1>
    <button class="btn1" @click="onLogout">Logout</button>
  </div>
</template>

<script>
export default {
  middleware: ["check-auth", "auth"],
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    },
  },
};
</script>

<style></style>
