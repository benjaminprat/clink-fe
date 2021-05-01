<template >
<div class="pairings-index" >
  <p>Search: <input type="text" v-model="searchTerm"></p>
  <br>
  <div class="row">
  <div class="col-sm-4" v-bind:key="pairing.id" v-for="pairing in filterBy(pairings, searchTerm, 'ingredient')">
    <div class="card">
       <div class="card-body">
<p>Pairing Id: {{pairing.id}}</p>

<p class="card-text">Ingredient name: {{pairing.ingredient}}</p>
<p class="card-text">Ingredient Category: {{pairing.category}}</p>
<p class="card-text">Ingredient Sub Category: {{pairing.sub_category}}</p>
<p class="card-text">Wine Style: {{pairing.wine_style}}</p>
<p class="card-text">Is perfect pairing? {{pairing.perfect_pairing}}</p>
</div>
</div>
  </div>
  </div>

</div>
<!-- <div class="gcse-search"></div> -->

</template>
<style>

.pairings {
  background-color:grey;
  height: 100%;
}
</style>

<script>
import axios from 'axios';
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      message: "Pair Your Shit",
      pairings: [],
      searchTerm: ""
      }
    }, 
  created: function() {
    this.pairingsIndex()
  },
   
  methods: {
    pairingsIndex: function() {
    console.log("all pairings")
      axios.get('api/pairings').then(response => {
        this.pairings = response.data;
        console.log(response.data)
      })
    }
  }
}
</script>
