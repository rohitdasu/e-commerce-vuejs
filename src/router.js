import VueRouter from 'vue-router';
import Vue from 'vue';
import home from "./components/Home";

const routes = [
    { path:'', component: home}
]

export const router = new VueRouter({
    mode: 'history',
    routes
});

Vue.use(VueRouter);