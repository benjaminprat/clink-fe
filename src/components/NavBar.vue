<template>
  <div class="NavBar">
    <a href="/" class="navbar-brand">Clink! Clink!</a>
    <a href="/about" >About</a>
    <a href="/wines" >Show All Wines</a>
    <a href="/wines/new" >Add A New Wine</a>
    <a href="/card" class="nav-item nav-link">New Entry</a>
    <button type="button"><a href="/signup" class="nav-item nav-link">Signup</a></button>
    <button type="button"><a href="/login" class="nav-item nav-link">Login</a></button>
    <a href="/logout" class="nav-item nav-link">Logout</a>
  </div>
</template>

<script>
import './NavBar.css'
export default {
  name: 'NavBar',
  props: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

