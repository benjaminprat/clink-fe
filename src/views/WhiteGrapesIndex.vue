<template>
  <div class="white-grapes-all">
  <NavBarTwo/>
    <h1>{{ message }}</h1>
      <div v-for="grape in whiteGrapes" v-bind:key="grape.id">
        <h2>{{ grape.name }}</h2>
        <p> Pronunciation: {{grape.pronunciation}}</p>
        <p> Origin: {{grape.origin}}</p>
        <p> Fruit: {{grape.fruit}}</p>
        <p> Body: {{grape.body}}</p>
        <p> Acidity: {{grape.acidity}}</p>
        <p> Alcohol: {{grape.alcohol}}</p>
        <p> Dominant Flavors: {{grape.dominant_flavors}}</p>
      </div>
  </div>
</template>
<style>
.white-grapes-all {
  height: 100vh;
  width: 100%;
}
h2{
  color: #FFFFFE;
  font-size: 2.5rem;
}
p {
  font-size: 1.25rem;
  color: #FFFFFE;
}
</style>

<script>
import NavBarTwo from '@/views/NavBarTwo.vue'
import axios from "axios";
export default {
   name: 'WhiteGrapesAll',
  components: {
    NavBarTwo
  },
  data: function () {
    return {
    message: "White Wine & Rosé",
    whiteGrapes: [],
    name: this.name,
    pronunciation: this.pronunciation,
    origin: this.origin,
    fruit: this.fruit,
    body: this.body,
    acidity: this.acidity,
    alcohol: this.alcohol,
    dominant_flavors: this.dominant_flavors,
    };
  },
  created: function () {
    this.whiteGrapesAllIndex();
  },
  methods: {
    whiteGrapesAllIndex: function () {
      console.log("all white grapes + rose");
      axios.get("api/grapes").then((response) => {
        this.whiteGrapes = response.data;
        console.log(response.data);
      });
    },
  },
};
</script>
