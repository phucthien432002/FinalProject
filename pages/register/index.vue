<template>
  <section class="page">
    <div class="card card_form">
      <div class="card_body">
        <h3 class="text-h3">Sign Up</h3>
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
          <div class="form_group">
            <label for="re-password">Re-password</label>
            <input
              class="form_control"
              id="re-password"
              v-model="rePassword"
              type="password"
              placeholder="Please enter re-password"
            />
          </div>
          <div class="from_group">
            <button type="submit" class="btn1 signUp">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  layout: "auth",
  data() {
    return {
      email: "",
      password: "",
      rePassword: "",
    };
  },
  methods: {
    checkValidPassword() {
      return this.password === this.rePassword;
    },
    onSubmit() {
      const validPassword = this.checkValidPassword();

      if (validPassword) {
        this.$axios
          .$post(
            `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbApiKey}`,
            {
              email: this.email,
              password: this.password,
              returnSecureToken: true,
            }
          )
          .then((result) => console.log(result))
          .catch((e) => console.log(e));
        this.$router.push("/signIn");
      } else {
        console.log("Password is not valid");
      }
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
.signUp {
  width: 100%;
}
</style>
