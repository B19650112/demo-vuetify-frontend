<template>
  <div>
    <h2 class ="dispaly-1 my-3 text-xs-center indigo--text">List of State Leaders</h2>
    <v-container class="container no-padding fluid grid-list-xl">
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-toolbar color="teal" dark>
              <v-toolbar-side-icon></v-toolbar-side-icon>
              <v-toolbar-title class="white--text">List of Name</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-text-field clearable class="mx-3" flat label="Search" prepend-inner-icon="search" solo-inverted v-model="search"></v-text-field>
           </v-toolbar>
            <v-list class="blue-grey lighten-5" two-line>
              <template v-for="(list, index) in filteredlists" 
                v-bind:filteredlists="filteredlists"
                v-bind:list="list">
                <v-list-tile :key="list.photo" avatar ripple @click="toggle(index)">
                  <v-list-tile-avatar>
                    <img :src="list.photo">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>{{list.title}}</v-list-tile-title>
                    <v-list-tile-sub-title><span class='indigo--text'>{{list.name}}</span> &mdash; {{list.description}}></v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                      <v-icon v-if="selected.indexOf(index) < 0" color="grey lighten-1">star_border</v-icon>
                      <v-icon v-else color="yellow darken-2">star</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
                <!-- agar divider terakhir tidak tercetak/tampil -->
                <v-divider v-if="index + 1 < lists.length" :key="index"></v-divider>
              </template>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

import otherservice from "@/services/OtherService";
import _ from 'lodash';

export default {
  
  data() {
    return {
      selected: [2],
      search: '',      
      lists: []
    }
  },
  computed: {    
    filteredlists() {
      return _.orderBy(this.lists.filter(list => {
        if(!this.search) return this.lists;
          return (list.title.toLowerCase().includes(this.search.toLowerCase()) ||
            list.name.toLowerCase().includes(this.search.toLowerCase())   ||
            list.description.toLowerCase().includes(this.search.toLowerCase()));
      }), 'title');
    },
  },

  mounted() {
      this.listTeam();
  },
  methods: {
    listTeam() {
      otherservice.getListPerson().then(lists => {this.lists = lists})
    },
    toggle(index) {
      const i = this.selected.indexOf(index)
      if (i > -1) {
        this.selected.splice(i, 1)
      } else {
        this.selected.push(index)
      }
    },
  }
};
</script>
