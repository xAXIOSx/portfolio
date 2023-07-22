<template>
  <v-window-item key="3" :value="2">
    <v-container>
      <v-form @submit="submitEmail" class="contact w-25 d-flex flex-column gap-40">
        <h3 class="text-h2">Contact.</h3>
        <v-text-field :rules="nameRules" v-model="name" label="Name"></v-text-field>
        <v-text-field :rules="emailRules" v-model="email" label="Your email"></v-text-field>
        <v-textarea :rules="textRules" v-model="text" label="Message"></v-textarea>
        <v-btn type="submit" block class="mt-2">Submit</v-btn>
        <img
          class="contact__ico"
          src="../assets/imgs/icons/icons8-gmail.svg"
          alt=""
        />
      </v-form>
    </v-container>
  </v-window-item>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStore } from '../stores/mainStore'

const store = useStore()

let name = ref('')
let email = ref('')
let text = ref('')


let nameRules = ref([
  (value:any) => {
    if (value) return true;

    return "Name is required.";
  },
  (value:any) => {
    if (value?.length <= 20) return true;

    return "Name must be less than 20 characters.";
  },
]);

let emailRules = ref([
  (value:any) => {
    if (value) return true;

    return "E-mail is requred.";
  },
  (value:any) => {
    if (/.+@.+\..+/.test(value)) return true;

    return "E-mail must be valid.";
  },
]);

let textRules = ref([
  (value:any) => {
    if (value) return true;

    return "Message is requred.";
  }
]);

function submitEmail() {
  name = name.value
  email = email.value
  text = text.value
  store.sendEmail({name,email,text})
}

</script>
