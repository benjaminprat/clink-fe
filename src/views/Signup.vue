<template>
  
<div id="signup-box">
    <form v-on:submit.prevent="submit()">
  <div class="left">
    <h1>Sign Up</h1>
    <ul>
          <li class="text-danger" v-for="error in errors" v-bind:key="error">
            {{ error }}
          </li>
        </ul>
    <input type="text" name="username" placeholder="First Name" v-model="first_name" />
    <input type="text" name="email" placeholder="E-mail" v-model="email" />
    <input type="password" name="password" placeholder="Password" v-model="password"/>
    <small v-if="password_validation !== password">Passwords must match</small>
    <input type="password" name="password_validation" placeholder="Confirm Password" />
    <input type="submit" value="Sign Up" />
  </div>
  
  </form>
</div> 
</template>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Sign Up to Continue",
      first_name: "",
      email: "",
      password: "",
      password_validation: "",
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
        password_validation: this.password_validation
      };
      axios
        .post("/api/users", params)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login")
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>



