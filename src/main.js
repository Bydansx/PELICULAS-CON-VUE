import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {router} from "./router/main.router.js";

createApp(App).use(router).mount('#app') //identificador de index html para que se rendericen todos los componentes vue.
