<template>
  <div id="app">
  <div class="bs-example">
    <nav class="navbar navbar-expand-md navbar-light bg-light">
        <a href="/" class="navbar-brand">Clink! Clink!</a>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
                <a href="/" class="nav-item nav-link active">Home</a>
                <a href="/about" class="nav-item nav-link">About</a>
                <a href="/wines" class="nav-item nav-link">Show All Wines</a>
                <a href="/wines/new" class="nav-item nav-link">Add A New Wine</a>
                <a href="/card" class="nav-item nav-link">New Entry</a>
                <a href="/signup" class="nav-item nav-link">Signup</a>
                <a href="/login" class="nav-item nav-link">Login</a>
                <a href="/logout" class="nav-item nav-link">Logout</a>
            </div>
        </div>
    </nav>
</div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
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