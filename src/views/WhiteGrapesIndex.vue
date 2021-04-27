<template>
  <div class="white-grapes-all">
  <NavBarTwo/>
    <h1>{{ message }}</h1>
    <h1>
      <div v-for="grape in whiteGrapes" v-bind:key="grape.id">
        <h1>{{ grape.name }}</h1>
      </div>
    </h1>
  </div>
</template>
// missing from chard to rose I think it's bc of the page height all logging to console
<style>
.white-grapes-all {
  height: 100%;
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
