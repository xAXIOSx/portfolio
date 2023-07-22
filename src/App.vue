<template>
  <v-app>
    <v-header>
      <Header @newTab="changeTab"/>
    </v-header>
    <v-main>
      <v-window v-model="tabOfWindow">
        <AboutView/>
        <ContactView/>
        <ProjectsView/>
      </v-window>
    </v-main>
    <v-footer class="bg-blue-grey-darken-4">
      <Footer/>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Header from './components/vHeader.vue';
import Footer from './components/vFooter.vue';
import { AboutView, ContactView, ProjectsView } from "./views/allViews";

let tabOfWindow = ref(null)

function changeTab(tab:number){
  console.log(tab);
  tabOfWindow.value = tab
}

</script>


<style lang="scss">
  .header-tabs .v-slide-group__content {
    display: flex;
    justify-content: space-between;
  }
</style>