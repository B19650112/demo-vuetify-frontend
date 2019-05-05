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
      <v-flex xs2 v-for="product in products" :key="product.id">
        <v-hover>
          <v-card :to="{name: 'viewproduct', params: {id:product.ID}}" exact:style="{ cursor: 'pointer'}"
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
    <v-layout row wrap>
      <v-flex xs5>&nbsp;</v-flex>
      <div class="row mt-2">
        <v-btn-toggle v-model="toggle_none">
          <v-btn flat color="teal darken-1" @click="actionPage('0')">
            <v-icon>fast_rewind</v-icon>
          </v-btn>
          <v-btn flat color="teal darken-1" @click="actionPage('1')">
            <v-icon>skip_previous</v-icon>
          </v-btn>
          <v-btn flat color="teal darken-1" @click="actionPage('2')">
            <v-icon>skip_next</v-icon>
          </v-btn>
          <v-btn flat color="teal darken-1" @click="actionPage('3')">
            <v-icon>fast_forward</v-icon>
          </v-btn>
        </v-btn-toggle>
      </div>
    </v-layout>
  </div>
</template>

<script>

import productservice from "@/services/ProductService";

export default {
  data() {
    return {
      moption: "",
      mStart: 0,
      mEnd: 0,
      toggle_none: null,
      mSearch: "",
      xSearch: "",
      startend:[],
      getend:[],
      products: [],
      
    };
  },
  mounted() {
    this.startPage()
  },
  methods: {
    //startPage for: get defaultpage and start mEnd number
    startPage() {
      productservice.getDefaultPage().then(getend => {this.getend = getend
        var data = JSON.parse(JSON.stringify(this.getend))
        this.mEnd = data[0].defaultpage
        this.listProduct();
      })
    },
    listSearch(mSearch) {
      if(this.mSearch != this.xSearch) {
        this.xSearch = this.mSearch
        this.mStart = 0
        this.startPage()
      }
    },
    listProduct() {
      productservice.getListProduct(this.mStart, this.mEnd, this.mSearch).then(products => {
        this.products = products
      });
    },
    
    actionPage(moption) {
      this.moption = moption;
      productservice.getPagination(this.moption, this.mStart, this.mEnd, this.mSearch).then(startend => {
        this.startend = startend
        var data = JSON.parse(JSON.stringify(this.startend))
        this.mStart = data[0].startID
        this.mEnd = data[0].endID
        this.listProduct();
      });
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
