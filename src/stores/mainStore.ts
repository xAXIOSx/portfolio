import { defineStore } from "pinia";
import { ref } from "vue";
import axios from 'axios'

export const useStore = defineStore("mainStore", () => {
  let theme = ref("light");
  let projects = ref([
    {
      name: `Web-Chat`,
      content: `This chat saves messages and users in the Database, so you can chat here even on different computers!`,
      technologies: [`Vue3`, `Vuex`, `MongoDB`, "socket.io"],
      imgName: "chat",
      gitHub:'chatVue3-sockets-mongoDB',
      id:1
    },
    {
      name: `Favourite-Movies`,
      content: `Here you can select any movie from the Internet that you watched, add to the library. And then pick your favorites`,
      technologies: [`Vue3`, `TypeScript`, "SCSS", "Pinia", "Vite"],
      imgName: "movies",
      gitHub:'favourite-movies',
      id:2
    },
    {
      name: `TextEditor [Beta!]`,
      content: `This is my unfinished text editor`,
      technologies: [`Vue3`, `TypeScript`, "SCSS", "Vuex", "Vue-router"],
      imgName: "editor",
      gitHub:'TextEditor-Unfinished-',
      id:3
    },
    {
      name: `ChartHop`,
      content: `High-quality html + css layout. On the page you will find 2 unusual sliders!`,
      technologies: [`HTML`, `CSS`, "JS", "BootStrap"],
      imgName: "charthop",
      gitHub:'chartHop-HTML-CSS-Bootstrap-',
      id:4
    },
    {
      name: `Cinema`,
      content: `Layout that I made up at the beginning of training`,
      technologies: [`HTML`, `CSS`],
      imgName: "cinema",
      gitHub:'landings-HTML-CSS/tree/master',
      id:5
    },
    {
      name: `Product Fit`,
      content: `Layout that I made up at the beginning of training`,
      technologies: [`HTML`, `CSS`],
      imgName: "productfit",
      gitHub:'landings-HTML-CSS/tree/master',
      id:6
    },
    {
      name: `All Marketings`,
      content: `Layout that I made up at the beginning of training`,
      technologies: [`HTML`, `CSS`],
      imgName: "allmarketings",
      gitHub:'landings-HTML-CSS/tree/master',
      id:7
    },
  ]);
  let stackTechnoligies = ref(['html','css','js','ts','sass','vue','pinia','vuerouter','vuex','mongodb','mongoose','figma'])

  async function sendEmail(data:any) {
    axios.get(`http://localhost:3001/sendEmail?name=${data.name}<${data.email}>&text=${data.text}`,(res:any)=>{
      console.log(res);
    })
  }

  return {
    theme,
    projects,
    stackTechnoligies,
    sendEmail
  };
});
