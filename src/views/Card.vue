<template>
<div class="container">
    <div class="row">
       <div class="col-sm-6 col-lg-4">
          <div class="card">
            <div class="content card-body">
    <h2 class="card-title"> {{ entry.vintage }} </h2>
    <h2 class="card-text">{{ entry.producer_wine }} {{ entry.grape }}</h2>
    <h4 class="card-text">{{ entry.opinion }}Stars</h4>
    <h4 class="card-text">{{ entry.date_tasted }}</h4>
    <ul class="list-group list-group-flush pb-3">
     <li class="list-group-item">{{ entry.region }}, {{ entry.country }}</li>
     <li class="list-group-item">{{ entry.smell }}</li>
     <li class="list-group-item">{{ entry.taste }}</li>
     <li class="list-group-item"> Store: {{ entry.purchase_point}}</li>
   </ul>
    </div>
  </div>
  </div>
</div>
</div>
</template>

<style>

.card {
  background-color: #fffffe;
}

.card-title {
  color: #e53170;
}

.card-text, .list-group-item {
  color: #2e2f3e;
}




/* .text-primary {
  color: #ff8906 !important;
} */

/* * {
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

template {
  background:grey; 
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
 height:500px;
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
  color:black;
} */


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
      console.log(this.entry)
    });
  },
  methods: {},
};
</script>
