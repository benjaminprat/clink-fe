<template>
  <div class="wines-index">
  <NavBarTwo />
    <h1>{{ message }}</h1>
    <h1>
      <div v-for="wine in wines" v-bind:key="wine.id">
        <p class="wines">{{ wine.producer_wine }}</p>
      </div>
    </h1>
  </div>
</template>

<style>
.wines-index {
  height: 100%;
}
</style>

<script>
import NavBarTwo from '@/views/NavBarTwo.vue'
import axios from "axios";
export default {
   name: 'WinesIndex',
  components: {
   NavBarTwo
  },
  data: function () {
    return {
      message: "Here are all your wines",
      wines: [],
      style: this.style,
      name: this.name,
      producer_wine: this.producer_wine,
      grape: this.grape,
      region: this.region,
      vintage: this.vintage,
      country: this.country,
    };
  },
  created: function () {
    this.winesIndex();
  },
  methods: {
    winesIndex: function () {
      console.log("all wines");
      axios.get('api/wines').then((response) => {
        this.wines = response.data;
        console.log(response.data);
      });
    },
  },
};
</script>
