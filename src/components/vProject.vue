<template>
  <v-card class="project-card d-flex w-75">
    <v-card
      class="project-card--img-block w-50 ma-5 d-flex align-center elevation-24"
      height="400px"
    >
      <v-img
        width="100%"
        :src="`../src/assets/imgs/projects/${project.imgName}.png`"
        cover
      >
    </v-img>
    <a class="hover-icon text-green" target="_blank" :href="`https://github.com/xAXIOSx/${project.gitHub}`">
        <v-btn height="65px">
          GitHub
          <span>
            <img width="50" height="50" src="../assets/imgs/icons/github.png" alt=""/>
          </span>
        </v-btn>
    </a>
    </v-card>
    <div class="d-flex flex-column justify-space-between w-50">
      <v-sheet class="project-card--text-block">
        <v-card-title class="text-center text-h4 ma-6">{{
          project.name
        }}</v-card-title>
        <v-card-text>{{ project.content }}</v-card-text>
      </v-sheet>
      <v-sheet class="align-self-end mr-5 mt-15">
        
      </v-sheet>
      <v-sheet class="pa-6">
        <v-sheet class="text-h6">TechStack:</v-sheet>
        <v-sheet class="d-flex flex-wrap projects-card--cards-stack gap-20">
          <v-card
            elevation="5"
            min-width="100px"
            height="40px"
            class="d-flex justify-center align-center text-h5 font-weight-medium float-left pa-2"
            v-for="project in props.project.technologies"
            >{{ project }}</v-card
          >
        </v-sheet>
      </v-sheet>
    </div>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps({
  project: { type: Object },
});
</script>
