<template>
  <v-app :dark="setTheme">
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vueti</span>
        <span class="font-weight-light">FORM</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon href="https://twitter.com/intent/tweet?text=I just created an astonishing Form with Vuetify Form Generator by @MuhaddiMu. You can create yours at https://git.io/JeW0x 🎉&hashtags=Vue,Vuetify&related=MuhaddiMu" target="_blank" rel="noopener noreferrer" >
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
      <v-btn icon href="https://github.com/MuhaddiMu" target="_blank" rel="noopener noreferrer" >
        <v-icon>mdi-human-greeting</v-icon>
      </v-btn>
      <v-btn icon href="https://github.com/MuhaddiMu/VuetiForm" target="_blank" rel="noopener noreferrer" >
        <v-icon>mdi-github-circle</v-icon>
      </v-btn>
      <v-btn fab text @click="ActivateLightTheme = !ActivateLightTheme">
        <v-icon :color="`${!ActivateLightTheme && 'yellow'}`" :light="true">mdi-brightness-4</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <TheForm />
    </v-content>
  </v-app>
</template>

<script>
import TheForm from './components/TheForm';

export default {
  name: 'App',
  components: {
    TheForm,
  },
  data: () => ({
    ActivateLightTheme: false
  }),
  computed: {
    setTheme() {
      if (this.ActivateLightTheme == true) {
        return (this.$vuetify.theme.dark = false);
      } else {
        return (this.$vuetify.theme.dark = true);
      }
    }
  }
};
</script>
<style>
  html {
    overflow-y: auto !important
  }
</style>