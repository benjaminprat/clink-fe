<template>
  <div id="create">
    <!-- <h1>{{ message }}</h1> -->
    <div class="form">
      <form v-on:submit.prevent="submit()">
        <!-- <label for="style">Wine Style: </label> -->
        🍷
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

        <p>
          ✏️
          <input
            type="text"
            v-model="producer_wine"
            placeholder="Producer/Wine"
          />
        </p>
        <p>
          <!-- <label>grape: </label> -->
          🍇
          <input type="text" v-model="grape" placeholder="Grape" />
        </p>

        <p>
          <!-- <label>Vintage: </label> -->
          📆
          <input type="text" v-model="vintage" placeholder="Vintage" />
        </p>
        <p>
          <!-- <label>region: </label> -->
          📍
          <input type="text" v-model="region" placeholder="Region" />
        </p>
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
        <p>
          <!-- <label>region: </label> -->
          🌍
          <input type="text" v-model="country" placeholder="Country" />
        </p>
        <p>
          <!-- <label>Look: </label> -->
          👁
          <input type="text" placeholder="Look" v-model="look" />
        </p>
        <p>
          <!-- <label>Smell: </label> -->
          👃🏽
          <input type="text" placeholder="Smell" v-model="smell" />
        </p>
        <p>
          <!-- <label>Taste: </label> -->
          👅
          <input type="text" placeholder="Taste" ref="" v-model="taste" />
        </p>
        <p>
          <!-- <label>Date Tasted: </label> -->
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
          <!-- <label>Purchase Point: </label> -->
          🛒
          <input type="text" placeholder="Source" v-model="purchase_point" />
        </p>

        <input type="submit" class="button" value="Add New Wine" />
      </form>
    </div>
    <br />
  </div>
</template>

<script>
import axios from "axios";
export default {
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
        grape: this.grape,
        region: this.region,
        country: this.country,
        vintage: this.vintage,
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
  },
};
</script>

<style></style>
