<template>
  <div id="app">
     <router-view />
  </div>
</template>

 <style>
 /* @import'~bootstrap/dist/css/bootstrap.css'; */

 .text-primary {
  color: #ff8906 !important;
}

 #app {
   font-family: 'Roboto', sans-serif;
   height: 100vh;
   background:grey;
   color: #2c3e50;
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