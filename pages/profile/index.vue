<template>
  <h1>Your profile is here</h1>
</template>

<script>
export default {
  middleware: ["check-auth", "auth"],
};
</script>

<style></style>
