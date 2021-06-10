<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <div class="row">
      <div
        class="col-md-4 col-lg4"
        v-for="(data, index) in products"
        :key="index"
      >
        <div @click="goTodetail(data.id)">
          <h1>{{data.email}}</h1>
          <!-- <img :src="data.image" class="img-fluid" /> -->
          <h3>{{ data.name }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "home",
  data() {
    return {
      title: "Home",
      info: null,
      loading: true,
      errored: false,
      products: null,
    };
  },
  methods: {
    goTodetail(prodId) {
      let proId = prodId;
      this.$router.push({ name: "details", params: { id: proId } });
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/customers")
      .then((response) => {
        this.products = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row img {
  max-height: 15em;
  width: 100%;
}
.row h3 {
  cursor: pointer;
}
</style>