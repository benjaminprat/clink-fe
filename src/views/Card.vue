<template>
  <div class="test">
    <!-- <h3>{{ entry.wine.producer_wine }}</h3> -->
    <h1>{{ entry.producer_wine }}</h1>
    <h1>{{ entry.vintage }}</h1>
    <h1>{{ entry.grape }}</h1>
    <h1>{{ entry.region }}</h1>
    <h1>{{ entry.country }}</h1>
    <p>{{ entry.opinion }}</p>
    <p>{{ entry.look }}</p>
    <p>{{ entry.smell }}</p>
    <p>{{ entry.taste }}</p>
    <p>{{ entry.date_tasted }}</p>
    <p>{{ entry.purchase_point }}</p>

    <!-- <h1>{{ entry.grape }}</h1>
    <h3>{{ entry.wine.region }}</h3>
    <h3>{{ entry.wine.country }}</h3>
    <h3>{{ entry.wine.vintage }}</h3> -->
    <!-- <p>{{ entry.opinion }}</p>
    <p>{{ entry.look }}</p>
    <p>{{ entry.smell }}</p>
    <p>{{ entry.taste }}</p>
    <p>{{ entry.date_tasted }}</p>
    <p>{{ entry.purchase_point }}</p> -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      entry: {},
    };
  },
  created: function () {
    axios.get("/api/entries/" + this.$route.params.id).then((response) => {
      console.log("show entry", response);
      this.entry = response.data;
    });
  },
  methods: {},
};
</script>
