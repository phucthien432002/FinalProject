<template>
  <section class="page">
    <div class="card card_form">
      <div class="card_body">
        <h3 class="text-h3">Login</h3>
        <form @submit.prevent="onSubmit">
          <div class="form_group">
            <label for="email">Email</label>
            <input
              class="form_control"
              id="email"
              v-model="email"
              type="text"
              placeholder="example@gmail.com"
            />
          </div>
          <div class="form_group">
            <label for="password">Password</label>
            <input
              class="form_control"
              id="password"
              v-model="password"
              type="password"
              placeholder="Please enter password"
            />
          </div>

          <div class="from_group">
            <button type="submit" class="btn1 signIn">Login</button>
          </div>
        </form>
        <div class="other">
          <span
            >Have not your account?
            <nuxt-link to="/register" tag="a">Register here</nuxt-link></span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: "auth",
  data() {
    return {
      email: "",
      password: "",
      isLogin: true,
    };
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("authenticateUser", {
          email: this.email,
          password: this.password,
          isLogin: this.isLogin,
        })
        .then((result) => {
          if (result.success) this.$router.push("/my-deck");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.page {
  display: flex;
  justify-content: center;
  padding-top: 100px;
}
.card {
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}
.card_form {
  width: 500px;
}
.text-h3 {
  text-align: center;
  margin-block-start: 0 !important;
  margin-block-end: 0 !important;
}
.form_group {
  padding: 4px;
  display: flex;
  flex-direction: column;
}
.card_body {
  padding: 12px;
}
input {
  border: 2px solid grey;
  border-radius: 8px;
}
.signIn {
  width: 100%;
}
</style>
