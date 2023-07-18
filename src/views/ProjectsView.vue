<template>
  <v-window-item key="1" :value="0">
    <v-sheet class="projects-greeting text-center pt-14">
      <v-sheet class="highlighted-greeting"> Hello! I'm Dmitry </v-sheet>
      <v-sheet
        >Junior Frontend Developer
        <span class="text-green font-weight-black text-gradient-green"
          >[Vue.js]</span
        ></v-sheet
      >
    </v-sheet>
    <div class="projects-content">
      <div class="projects-content--visual-effect">
        <img src="../assets/imgs/svgs/wave.svg" alt="" />
        <img src="../assets/imgs/svgs/wave.svg" alt="" />
      </div>
      <div class="projects-content--main bg-green">
        <v-container class="d-flex flex-column align-center gap-20">
          <v-sheet class="text-h3 bg-green text-center font-weight-bold mb-15"
            >My Projects:</v-sheet
          >
          <vProject
            v-for="project in store.projects"
            :project="project"
            :key="project.id"
            :reverse="project.id % 2 == 0"
          />
        </v-container>
      </div>
    </div>
  </v-window-item>
</template>

<script setup lang="ts">
import vProject from "../components/vProject.vue";
import {useStore} from '../stores/mainStore.ts';

const store = useStore()

</script>
