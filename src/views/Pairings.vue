<template >
<div class="pairings" >
  <h1>{{message}}</h1>
  <div v-for="pairing in pairings" v-bind:key="pairing.id">
<p>Pairing Id: {{pairing.id}}</p>

<p>Ingredient name: {{pairing.ingredient}}</p>
<p>Ingredient Category: {{pairing.category}}</p>
<p>Ingredient Sub Category: {{pairing.sub_category}}</p>
<p>Wine Style: {{pairing.wine_style}}</p>
<p>Is perfect pairing? {{pairing.perfect_pairing}}</p>
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
import Vue2Filters from "vue2-filters";
import axios from 'axios';
export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      message: "Pair Your Shit",
     pairings: [],
      ingredient_id: this.ingredient_id,
      classification_id: this.classification_id,
      perfect_pairing: this.perfect_pairing
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
