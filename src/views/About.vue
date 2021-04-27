<template>
<div class="search">
  <body>
  <h1>{{message}}</h1>
<div class="gcse-search"></div>
  </body>
</div>
</template>
<style >
.search{
  background-color: tomato;
  height: 100vh;
}

h1 {
  color:white;
}
</style>

<script>
export default {
  data: function () {
    return {
      message: "Welcome to the Vue.js! test page",
    };
  },
  created: function () {},
  methods: {},
};
</script>
