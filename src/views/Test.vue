<template >
<div class="test" >
  <h1>{{message}}</h1>
  <div v-for="pairing in pairings" v-bind:key="pairing.id">
<p>Pairing Id: {{pairing.id}}</p>

<p>Ingredient Id: {{pairing.ingredient_id}}</p>
<p>Wine Style: {{pairing.classification_id}}</p>
<p>Is perfect pairing? {{pairing.perfect_pairing}}</p>
  </div>

</div>
<!-- <div class="gcse-search"></div> -->

</template>
<style>

.card {
  background-color:grey;
  height: 80vh;
}
</style>

<script>
import axios from 'axios';
export default {
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
