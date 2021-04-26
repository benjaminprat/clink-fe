<template>
  <div class="home">
    <NavBar/>
    <img class="logo" alt='Clink Clink Logo' src='../assets/clink-logo.png'>
  </div>
</template>
<style scoped>
.logo{
height:400px;
/* display: flex; */
flex-direction: row;
}
</style>
<script>
// @ is an alias to /src
import NavBar from '@/views/NavBar.vue'


export default {
  name: 'Home',
  components: {
   NavBar
  }
}

</script>