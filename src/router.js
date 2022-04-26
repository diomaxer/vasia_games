import {createRouter, createWebHashHistory} from "vue-router";
import Home from "./components/Home.vue";
import Game from "./components/Game.vue";


export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/game', component: Game },
    ]
})
