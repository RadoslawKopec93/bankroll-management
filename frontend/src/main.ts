import { createApp } from 'vue'
import App from './App.vue'
import {routes} from './router'
import {createPinia} from "pinia";
import {useLoginPageStore} from "@/components/LoginPage/store/LoginPageStore";
import {createRouter, createWebHistory} from "vue-router";
import "element-plus/dist/index.css"
import VueDatePicker from '@vuepic/vue-datepicker';

export async function main(){

    const router = createRouter({
        history: createWebHistory(),
        routes
    })

    //export default router
    const app = createApp(App).use(router).use(createPinia())
    const store = useLoginPageStore();
    app.component('VueDatePicker', VueDatePicker);

/*
    if(!store.token){
        store.setToken("test");
        router.push('/login');
    }*/

    app.mount('#app')
}

main();

