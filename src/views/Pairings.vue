<template >
<div class="pairings-index" >
  
  
<select v-model="style">
<option value="Light-White"> Light White</option>
<option value="Full-Red"> Full Red</option>
</select>
<!-- <input type="text" v-model="style"> -->
<p>Search By Ingredient: <input type="text" class="form-control" v-model="searchTerm" placeholder="Filter By Ingredient"></p>
<p>Search By Wine Style: <input type="text" class="form-control" v-model="searchWine" placeholder="Filter By Wine Style"></p>
  <br>
  <div class="row">
  <div class="col-sm-4" v-bind:key="pairing.id" v-for="pairing in filterBy(filterBy(pairings, searchTerm), searchWine)">
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
      sortKey: "",
      reverse: false,
      message: "Pair Your Shit",
      pairings: [],
      searchTerm: "",
      style: "",
      searchWine: ""
     
      }
    }, 
  created: function() {
    this.pairingsIndex()
  },
  // computed: {
  //   filterPairings: function() {
  //     return.this.filter
  //   }
  // }
   
  methods: {
    pairingsIndex: function() {
    console.log("all pairings")
      axios.get('api/pairings').then(response => {
        this.pairings = response.data;
        console.log(response.data)
      })
    },
    filterPairingsByIngredient: function(pairings) {
      return pairings.filter(pairing => !pairing.ingredient.indexOf(this.ingredient))
    },

    filterPairingsByWineStyle: function(pairings) {
      return pairings.filter(pairing => !pairing.style.indexOf(this.style))
    }
    // filters: {
    //   name: function(pairings) {

    //   }
    // }

  }
}
</script>
