<template>
  <nav>
    <v-toolbar dark app color="teal">
      <v-toolbar-side-icon class="white--text lighten-4" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>refresh</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="teallight">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="/foto-budi.jpg" alt="">
          </v-avatar>
          <p class="white--text text-md-center subheading mt-1">
            Budisan
          </p>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
        drawer: true,
        links: [
            { icon: 'remove_shopping_cart', text: 'Home', route: '/' },
            { icon: 'group', text: 'Leaders', route: '/about' },
            { icon: 'streetview', text: 'History', route: '/history' },
            { icon: 'group_add', text: 'Lists', route: '/lists' },
        ]
    }
  }
};
</script>

