<template>
  <div class="white-grape-card">
    <NavBarTwo/>
    <div class="grape-content" >
      <h3>{{ grape.name }}</h3>
        <p> Pronunciation:{{grape.pronunciation}}</p>
        <p> Origin: {{grape.origin}}</p>
        <p> Fruit: {{grape.fruit}}</p>
        <p> Body: {{grape.body}}</p>
        <p> Acidity: {{grape.acidity}}</p>
        <p> Alcohol: {{grape.alcohol}}</p>
        <p> Dominant Flavors: {{grape.dominant_flavors}}</p>
  </div>
</div>
</template>
<style >
.grape-content {
  /* background-color: grey; */
}
p {
  color: #FFFFFE;
}
</style>
<script>
import NavBarTwo from '@/views/NavBarTwo.vue'
import axios from 'axios'
export default {
  name: 'WhiteGrapeCard',
  components: {
    NavBarTwo
  },
  data: function () {
    return {
      message: "Welcome to the Vue.js! test page",
      grape: {},
    };
  },
  created: function () {
     console.log("single");
      axios.get("/api/grapes/" + this.$route.params.id).then(response => {
        console.log(response.data);
        this.grape = response.data;


      })
  },
  methods: {
    grapeContent: function() {
  
    }
  },
};
</script>
