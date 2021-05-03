<template>
<div class="container">
    <div class="row">
       <div class="col-sm-6 col-lg-4">
          <div class="card">
            <div class="content card-body">
    <h4 class="card-title">Pairing ID {{pairing.id}} </h4>
    <h4 class="card-text"> Wine Style {{ pairing.style}}</h4>
    <h4 class="card-title">Ingredient {{pairing.name}} </h4>
    <h4 class="card-text"> Category {{ pairing.category }} </h4>
    <h4 class="card-text"> Sub Cat {{ pairing.sub_category}}</h4>
    <h4 class="card-text">Perfect Pairing? {{ pairing.perfect_pairing}}</h4>
    <!-- <ul class="list-group list-group-flush pb-3">
     <li class="list-group-item">{{ entry.region }}, {{ entry.country }}</li>
     <li class="list-group-item">{{ entry.look }}</li>
     <li class="list-group-item">{{ entry.smell }}</li>
     <li class="list-group-item">{{ entry.taste }}</li>
     <li class="list-group-item"> Store: {{ entry.purchase_point}}</li>
   </ul> -->
    </div>
  </div>
  </div>
</div>
</div>
</template>

<style>

.card {
  background-color: #fffffe;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}

.card-title {
  color: #e53170;
}

.card-text, .list-group-item {
  color: #2e2f3e;
}
</style>
<script>
import axios from 'axios'
export default {
  name: 'PairingsCard',
  components: {
   
  },
  data: function () {
    return {
     
      pairing: {},

    };
  },
  created: function () {
     console.log("single");
      axios.get("/api/pairings/" + this.$route.params.id).then(response => {
        console.log(response.data);
        this.pairing = response.data;


      })
  },
  
};
</script>
