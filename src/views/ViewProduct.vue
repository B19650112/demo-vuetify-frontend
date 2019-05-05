<template>
  <div class="projects">
    <h1 class="subheading grey--text">&nbsp;</h1>
    <v-layout row wrap justify-center>
      <v-flex xs4 v-for="product in product" :key="product.id">
        <v-hover>
          <v-card color="rgb(255, 0, 0, 0.2)">
            <v-img :src="product.imagepath" height="250" aspect-ratio="1" class="grey lighten-2"></v-img>
            <v-card-title primary-title>
              <div>
                <v-chip small :class="`${product.title} white--text caption my-2`">{{ product.title }}</v-chip>
                <div>{{ product.description.substr(0,33) }}</div>
                <div>{{ product.description.substr(33,33) }}</div>
                <h4 class="red--text text--lighten-1">Rp. {{Number(product.price).toLocaleString('EN')}}</h4>
              </div>
            </v-card-title>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
    </div>
</template>

<script>
  import productservice from "@/services/ProductService";
  
  export default {
    data() {
      return {
        product: [],
      };
    },
    mounted() {
      const { id } = this.$route.params;
      this.viewProduct(id);
    },
    methods: {
      viewProduct(id) {
        productservice.getViewProduct(id).then((product) => {
          this.product = product
        })
      },
    },
  }
</script>