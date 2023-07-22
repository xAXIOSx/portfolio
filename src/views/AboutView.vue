<template>
    <v-window-item key="2" :value="1">
        <div class="about-me">
            <v-row class="about-me--short justify-end">
                <v-col class="about-me--short__text text-center mt-15" cols="6">
                    <h3 class="text-h1">About Me</h3>
                    <p class="text-h2 mt-15">My name is Dmitry 🤝. <br> All in all I've been developming for about 2 years.</p>
                </v-col>
                <v-col class="about-me--short__img d-flex justify-content-end" cols="5">
                    <v-img height="600px" src="../src/assets/imgs/me.jpg"></v-img>
                </v-col>
            </v-row>
            <div class="about-me--stack mt-15">
                <v-container>
                    <h3 class="text-h2 text-center">My stack:</h3>
                    <v-row class="stack mt-10">
                        <v-col v-for="t in store.stackTechnoligies" :key="t" cols="3">
                            <a target="_blank" :href="`https://www.google.com/search?q=${t}`" class="text-decoration-none">
                                <v-row class="align-center bg-green ma-1">
                                    <v-col>
                                        <v-card width="120px" height="120px" class="rounded-pill pa-3 d-flex align-center justify-center" elevation="10">
                                            <v-img v-if="t === 'vuerouter' || t === 'vuex'" width="96px" :src="`../src/assets/imgs/stack-icons/icons8-${t}.png`" alt="css"></v-img>
                                            <v-img :src="`../src/assets/imgs/stack-icons/icons8-${t}.svg`" alt="css"></v-img>
                                        </v-card>
                                    </v-col>
                                    <v-col class="d-flex justify-center">
                                        <span class="text-h5 text-uppercase text-white font-weight-bold">
                                            {{ t }}
                                        </span>
                                    </v-col>
                                </v-row>
                            </a>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
            <div class="about-me--detail mb-15">
                <v-container>
                    <h3 class="text-h2 text-center mb-10">Detail</h3>
                    <p class="text-h4">
                        I started on my own, after learning a little bit of HTML and CSS, I took a course at the ProWeb center. I studied for 9 months and there we worked with WebPack, Git, SCSS, MySQL, PHP, Bootstrap library, made many layouts with and without adaptive, did projects in native JS.
    
                        After the courses I started to study Vue (vue router, vueX), mongoDB, WebSockets, JWT, TypeScript.
    
                        All in all I've been developing for about 2 years.
                    </p>
                </v-container>
            </div>
        </div>
    </v-window-item>
</template>

<script setup lang="ts">
import { useStore } from '../stores/mainStore';

const store = useStore()
</script>