<template>
  <div class="home">
    <img alt="Clink Clink Logo" src="../assets/clink-logo.png">
    <HelloWorld msg="Clink!Clink!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
