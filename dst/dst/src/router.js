import { createRouter, createWebHashHistory} from "vue-router";
import Registration from "@/Registration.vue";
import Login from "@/Login.vue";


export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: "/login", component: Login, alias: "/" },
        { path: "/registration", component: Registration },
    ]
})