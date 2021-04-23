<template>
  <div class="wines-index">
    <h1>{{ message }}</h1>
    <h1>
      <div v-for="wine in wines" v-bind:key="wine.id">
        {{ wine.producer_wine }}
      </div>
    </h1>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
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
      axios.get("api/wines").then((response) => {
        this.wines = response.data;
        console.log(response.data);
      });
    },
  },
};
</script>
