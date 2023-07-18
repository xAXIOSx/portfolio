import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore("mainStore", () => {
  let theme = ref("light");
  let projects = ref([
    {
      name: `WebChat`,
      content: `This chat saves messages and users in the Database, so you can chat here even on different computers!`,
      technologies: [`Vue3`, `MongoDB`, "socket.io"],
      imgName: "chat",
      id:1
    },
    {
      name: `Favourite-Movies`,
      content: `Here you can select any movie from the Internet that you watched, add to the library. And then pick your favorites`,
      technologies: [`Vue3`, `TypeScript`, "Pinia", "Vite"],
      imgName: "movies",
      id:2
    },
  ]);

  return {
    theme,
    projects,
  };
});
