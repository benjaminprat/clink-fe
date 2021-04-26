<template>
  <div class="NavBar">
    <a href="/" class="navbar-brand">Clink! Clink!</a>
    <a href="/wines" >Show All Wines</a>
    <button type="button"><a href="/signup" class="nav-item nav-link">Signup</a></button>
    <button type="button"><a href="/login" class="nav-item nav-link">Login</a></button>
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

