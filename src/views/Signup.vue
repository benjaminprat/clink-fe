<template>
  <div class="login-box">
    <h1>{{ message }}</h1>
    <br />
    <div class="left">
      <form v-on:submit.prevent="submit()">
        <h1>Signup</h1>
        <ul>
          <li class="text-danger" v-for="error in errors" v-bind:key="error">
            {{ error }}
          </li>
        </ul>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="First Name" v-model="first_name" />
        </div>
        <div class="form-group">
          <input type="email" class="form-control" placeholder="E-mail" v-model="email" />
        </div>
        <div class="form-group">
          <input type="password" class="form-control" placeholder="Password" v-model="password" />
        </div>
        <div class="form-group">
          <input type="password" class="form-control" placeholder="Confirm Password" v-model="password_validation" />
          <small v-if="password_validation !== password">Passwords must match</small>
        </div>
        <input type="submit" class="btn btn-primary" value="Sign Up" />
      </form>
    </div>
     <div class="right">
    <span class="loginwith">Sign in with<br />social network</span>
    <button class="social-signin google">Log in with Google</button>
  </div>
  <div class="or">OR</div>
  </div>
  <!-- <div id="login-box">
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
  <div class="right">
    <span class="loginwith">Sign in with<br />social network</span>
    <button class="social-signin google">Log in with Google</button>
  </div>
  <div class="or">OR</div>
  </form>
</div> -->

</template>
<script>
import './Signup.css'
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
