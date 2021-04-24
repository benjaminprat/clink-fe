<template>
  <div class="signup">
    <h1>{{ message }}</h1>
    <br />
    <div class="signup">
      <form v-on:submit.prevent="submit()">
        <h1>Signup</h1>
        <ul>
          <li class="text-danger" v-for="error in errors" v-bind:key="error">
            {{ error }}
          </li>
        </ul>
        <div class="form-group">
          <label>Name:</label>
          <input type="text" class="form-control" v-model="first_name" />
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email" />
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password" />
        </div>
        <input type="submit" class="btn btn-primary" value="Sign Up" />
      </form>
    </div>
  </div>
</template>
<style></style>

// push to login??

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Sign Up to Continue",
      first_name: "",
      email: "",
      password: "",
      errors: [],
    };
  },
  created: function () {},
  methods: {
    submit: function () {
      var params = {
        first_name: this.first_name,
        email: this.email,
        password: this.password,
      };
      axios
        .post("/api/users", params)
        .then((response) => {
          console.log(response.data);
          this.$router.push("login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
