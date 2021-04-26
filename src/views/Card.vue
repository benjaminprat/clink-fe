<template>
  <div class="card">
    <div class="content">
    <!-- <h3>{{ entry.wine.producer_wine }}</h3> -->
    <h1>{{ entry.producer_wine }}</h1>
    <h2>{{ entry.vintage }}</h2>
    <h2>{{ entry.grape }}</h2>
    <h2>{{ entry.region }}</h2>
    <h2>{{ entry.country }}</h2>
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
  </div>
</template>

<style>

* {
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

template {
  background: #11101A; 
  display: flex;
  justify-content:center;
  align-items: center;
  height: 100%;
  overflow: hidden;
  font-size: 1rem;
  height: 100%;
  min-height: 100%;
}

.card {
  margin:10px auto 0;
  max-width:400px;
 background-color: white;
 display: flex;
 flex-direction: column;
 justify-content: center;
 width:300px;
 height:400px;
 box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.9);
 border-radius: 5px;
 border: 5px, solid, white;
}

.content {
  margin-top: 2rem;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content:center;
  padding-left:15px;
  padding-right:15px;
}

h1,h2 {
  color: black;
}
p {
  color: black;
}
</style>

<script>
import axios from "axios";
// import './Card.css'
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
