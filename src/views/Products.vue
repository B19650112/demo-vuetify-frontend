<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12 sm6 md5>&nbsp;</v-flex>
      <v-flex xs12 sm6 md3>
        <v-text-field clearable class="mx-3" flat label="Search Product" @keyup.native.enter="listSearch(mSearch)" prepend-inner-icon="search"
          v-model="mSearch">
        </v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs2 v-for="product in displayedProducts" :key="product.id">
        <v-hover>
          <v-card :to="{name:'viewproduct', params: {id:product.ID}}" exact:style="{ cursor: 'pointer'}"
            slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" color="blue-grey lighten-5">
            <v-img :src="product.imagepath" height="135" aspect-ratio="0.2" class="grey lighten-2"></v-img>
            <v-card-title primary-title>
              <div>
                <v-chip small:class="`${product.title} white--text caption my-2`">{{ product.title }}</v-chip>
                <span style="color:#AD1457">{{product.ID}}</span>
                <div style="font-size:10px">{{ product.description.substr(0,33) }}</div>
                <div style="font-size:10px">{{ product.description.substr(33,33) }}&nbsp;</div>
                <h4 class="red--text text--lighten-1">Rp. {{Number(product.price).toLocaleString('EN')}}</h4>
              </div>
            </v-card-title>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
    <v-container fluid class="pa-0">
    <v-layout row wrap>
      
      <v-flex xs4>&nbsp;</v-flex>
        <div class="row mt-2">
          <v-btn-toggle v-model="toggle_none">
            <v-btn outline color="error" depressed small style="min-width:30px;" v-if="page != 1" @click="page=1">
              <v-icon>fast_rewind</v-icon>
            </v-btn>
            <v-btn outline color="error" depressed small style="min-width:30px;" v-if="page != 1" @click="page--">
              <v-icon>chevron_left</v-icon>
            </v-btn>
            <v-btn outline color="error" depressed small style="min-width:30px;" v-for="pageNumber in pages.slice(page-1, page+4)" @click="page=pageNumber"
              :key="pageNumber">{{pageNumber}}
            </v-btn>
            <v-btn outline color="error" depressed small style="min-width:30px;" v-if="page < pages.length" @click="page++" >
                <v-icon>chevron_right</v-icon>
            </v-btn>
            <v-btn outline color="error" depressed small style="min-width:30px;" v-for="pageNumber in pages.slice(pages.length-1, pages.length)" @click="page=pageNumber"
              :key="pageNumber">
                <v-icon>fast_forward</v-icon>
            </v-btn>
          </v-btn-toggle>
      </div>
    </v-layout>
    </v-container>
  </div>
</template>

<script>

import productservice from "@/services/ProductService";

export default {
  
  data() {
    return {
      toggle_none: null,
      mSearch: "",
      xSearch: "",
      products: [],
      page: 1,
      mSisa:0,
      perPage: 12,
      pages: [],
    };
   
  },
  mounted() {
    this.listProduct()
  },
  methods: {   
   listSearch(mSearch) {
      if(this.mSearch != this.xSearch) {
        this.xSearch = this.mSearch
        this.listProduct()
      }
    },
    listProduct() {
      productservice.getListProduct(this.mSearch).then(products => {
        this.products = products
        this.mSisa = this.products.length % this.perPage
      });
    },
    setProducts() {
      let numberOfPages = Math.ceil(this.products.length / this.perPage);
      for (let i = 1; i <= numberOfPages; i++) {
      this.pages.push(i);
      }
    },
    paginate(products) {
      let page = this.page;
      let perPage = this.perPage;
      let from = (page * perPage) - perPage;
      let to = (page * perPage);      
      return products.slice(from, to);
    }
  },
  watch: {
    products(){
      this.setProducts();
    }
  },
  computed: {
    displayedProducts: function () {
      return this.paginate(this.products);
    }
  }
};
</script>

<style>
.product.LazMall {
  border-left: 4px solid tomato;
}
.v-chip.LazMall {
  background: #e91e63;
}
</style>
