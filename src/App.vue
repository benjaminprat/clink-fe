<template>
  <div id="app">
     <router-view />
  </div>
</template>

<style>


#app {
  font-family: 'Roboto', sans-serif;
  height: 100vh;
  text-align: center;
  background: #11101A;
  /* color: #2c3e50; */
  color:#fffffe;
}




</style>
<script>
  export default {
    methods: {
      isLoggedIn: function() {
        console.log('logged in');
        if (localStorage.getItem("jwt")) {
          return true;
        } else {
          return false;
        }
      },
      getUserId: function() {
        return localStorage.getItem("user_id");
      }
    }
  }
</script>