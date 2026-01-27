import { createMemoryHistory, createRouter } from 'vue-router'
import CharacterPage from "../components/CharacterPage.vue";
import ListPage from "../components/ListPage.vue";



const routes = [
    { path: '/', component: ListPage},
    { path: '/personaje/:id', component: CharacterPage },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})