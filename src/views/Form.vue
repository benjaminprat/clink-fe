<template>
 <div class="form-style-3">
      <form v-on:submit.prevent="submit()">
        <fieldset><legend>My Wine</legend>
       <div class="style">🍷
        <select
          required
          name="style"
          id="style"
          v-model="style"
          placeholder="Wine Style"
        >
          <option value="sparkling">Sparkling</option>
          <option value="light-white">Light-Bodied White Wine</option>
          <option value="full-white">Full-Bodied White Wine</option>
          <option value="aromatic-white">Aromatic White Wine</option>
          <option value="rose">Rosé</option>
          <option value="light-red">Light-Bodied Red Wine</option>
          <option value="medium-red">Medium-Bodied Red Wine</option>
          <option value="full-red">Full-Bodied Red Wine</option>
          <option value="dessert">Dessert</option>
        </select>
        </div> 
        <div class="wine-stats">
        <p>
          <input
            type="text"
            v-model="producer_wine"
            placeholder="Producer/Wine"
          />
        </p>
        <p>
          🍇
          <input type="text" v-model="grape" placeholder="Grape" />
        </p>
        <p>
          📆
          <input type="text" v-model="vintage" placeholder="Vintage" />
        </p>
        <p>
          📍
          <input type="text" v-model="region" placeholder="Region" />
        </p>
        <p>
          🌍
          <input type="text" v-model="country" placeholder="Country" />
        </p>
        </div>
          <fieldset><legend>Profile</legend>
          </fieldset>
        <div class="user-stats">
      <!-- ⭐️
        <button class="star">★✭★</button> -->
        <!-- <label for="opinion">Overall Opinion: </label>
        
        <select name="opinion" id="opinion" v-model="opinion">
          <option value="🍷">🍷</option>
          <option value="🍷🍷">🍷🍷</option>
          <option value="🍷🍷🍷">🍷🍷🍷</option>
          <option value="🍷🍷🍷🍷">🍷🍷🍷🍷</option>
          <option value="🍷🍷🍷🍷🍷">🍷🍷🍷🍷🍷</option>
        </select> -->
        <div class="look">
        <p>
          <!-- 👁
          <input type="radio" placeholder="Look" v-model="look" /> -->
          <input type="radio" id="pale-garnet" value="PaleGarnet" v-model="look">
          <label for="pale-garnet">Pale Garnet</label>
          <img src="../assets/pale-garnet.jpg" alt="">
          <br>
          <input type="radio" id="medium-red" value="MediumRed" v-model="look">
          <label for="medium-red">Medium Red</label>
          <img src="../assets/medium-red.jpg" alt="">
           <br>
            <input type="radio" id="deep-purple" value="DeepPurple" v-model="look">
          <label for="deep-purple">Deep Purple</label>
          <img src="../assets/deep-purple.jpg" alt="">
        </p>
         </div>
        <p>
        
          👃🏽
          <input type="text" placeholder="Smell" v-model="smell" />
        </p>
        <p>
        
          👅
          <input type="text" placeholder="Taste" ref="" v-model="taste" />
        </p>
        <p>
  
          📆
          <input
            type="date"
            name="date"
            required
            pattern="\d{4}-\d{2}-\d{2}"
            v-model="date_tasted"
          />
        </p>
        <p>
          🛒
          <input type="text" placeholder="Source" v-model="purchase_point" />
        </p>
        </div>
        <input type="submit" class="button" value="Add New Wine" />
      </fieldset>
      </form>
    </div>
    </template>

<style></style>

<script>
import axios from "axios";
import './Form.css';
export default {
    name: "Form",
   data: function () {
    return {
      message: "Add A New Wine",
      opinion: "",
      look: "",
      smell: "",
      taste: "",
      date_tasted: "",
      purchase_point: "",
      entries: [],
      wines: [],
      entry: {},
      style: "",
      producer_wine: "",
      grape: "",
      region: "",
      vintage: "",
      country: "",
    };
  },

  methods: {
    submit: function () {
      var wineParams = {
        style: this.style,
        producer_wine: this.producer_wine,
        vintage: this.vintage,
        grape: this.grape,
        region: this.region,
        country: this.country,
      };
      var entryParams = {
        wine_id: "",
        opinion: this.opinion,
        look: this.look,
        smell: this.smell,
        taste: this.taste,
        date_tasted: this.date_tasted,
        purchase_point: this.purchase_point,
      };
      axios.post("api/wines", wineParams).then((response) => {
        entryParams.wine_id = response.data.id;
        this.wines.push(response.data);
        return axios
          .post("/api/entries", entryParams)
          .then((response) => {
            console.log(response);
            // var entry = response.data;
            this.entries.push(response.data);
            this.$router.push("/cards/" + response.data.id);
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
        });
      },
    }
  }

</script>
