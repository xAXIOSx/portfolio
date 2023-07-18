<template>
  <v-sheet class="bg-green">
    <v-container>
      <v-tabs v-model="tab" class="header-tabs">
        <div>
          <v-tabs-title
            class="logo d-flex flex-column cursor-pointer"
            @click="changeTab(0)"
          >
            <h1 class="font-weight-bold logo-title">AXIOS</h1>
            <h4 class="logo-subtitle">Dmitry</h4>
          </v-tabs-title>
        </div>
        <div class="header-tabs--btns">
          <div class="header-tabs--btns__tabs">
            <v-tab value="0">Projects</v-tab>
            <v-tab value="1">About</v-tab>
            <v-tab value="2">Contact</v-tab>
          </div>
          <div class="header-tabs--btns__theme">
            <v-btn class="theme-changer" rounded="xl" @click="changeTheme">
                <img v-if="store.theme == `light`" src="../assets/imgs/svgs/moon.svg" alt="">
                <img v-else src="../assets/imgs/svgs/weather.svg" alt="">
            </v-btn>
          </div>
        </div>
      </v-tabs>
    </v-container>
  </v-sheet>
</template>

<script setup lang="ts">
import { ref, defineEmits, watch } from "vue";
import { useStore } from '../stores/mainStore'
const store = useStore()
const emits = defineEmits(["newTab"]);

// tab

let tab = ref(null);

function changeTab(newTab: number) {
  tab.value = newTab;
}

watch(tab, () => {
  emits("newTab", parseInt(tab.value));
});

// theme

function changeTheme(){
    store.theme === 'light' ? store.theme = 'dark' : store.theme = 'light'
}


</script>

<style lang="scss">

</style>
