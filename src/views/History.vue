<template>
  <div>
    <h2 class ="dispaly-1 my-3 text-xs-center indigo--text">History of state leader</h2>
    <v-container class="container no-padding fluid grid-list-xl">
      <v-expansion-panel value v-model="currSection">
        <v-expansion-panel-content v-for="(history,i) in historys" :key="i" :class="{'blue-grey lighten-5': i % 2 === 0}">
          <template v-slot:actions>
            <v-icon color="primary">$vuetify.icons.expand</v-icon>
          </template>
          <div slot="header">{{ history.name }}</div>
          <v-card flat class="text-xs-center ma-1">
            <v-responsive class="pt-1">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="history.photo">
              </v-avatar>
            </v-responsive>
            <v-card-text class="px-4 grey--text"> 
              <div class="font-weight-bold">{{ history.title }}</div>
            </v-card-text>
             <v-card-text class="px-4 grey--text"> 
              <div class="font-weight-normal">{{ history.description }}</div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container>
  </div>
</template>

<script>

  import otherservice from "@/services/OtherService";

  export default {
    data() {
      return {
        currSection: 0,
        historys: [],
      }
    },
    mounted() {
      this.listhistory();
    },
    methods: {
      listhistory() {
        otherservice.getListPerson().then(historys => {this.historys = historys})
      },
    }
  }
</script>