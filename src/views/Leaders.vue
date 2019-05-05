<template>
  <div class="leader">
    <h2 class ="dispaly-1 my-3 text-xs-center indigo--text">State Leaders</h2>
    <v-container class="container no-padding fluid grid-list-xl">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="leader in leaders" :key="leader.ID">
          <v-card xs12 md4 class="text-xs-center ma-3 grow">
            <v-jumbotron :gradient="gradient" dark height="200">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="leader.photo">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ leader.name }}</div>
              <div class="gray--text">{{ leader.title }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="green accent-2">
                <v-icon small left>message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
            </v-jumbotron>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

  import otherservice from "@/services/OtherService";

  export default {
    data() {
      return {
        gradient: 'to top, #004D40, #4DD0E1',
        leaders: [],
      }
    },
    mounted() {
      this.listleader();
    },
    methods: {
      listleader() {
        otherservice.getListPerson().then(leaders => {this.leaders = leaders})
      },
    }
  }
</script>

<style>
.grow { 
  transition: all .2s ease-in-out;
}
.grow:hover { 
  transform: scale(1.1); 
}
</style>