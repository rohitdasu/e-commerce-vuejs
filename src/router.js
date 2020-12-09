import VueRouter from 'vue-router';
import Vue from 'vue';
import home from "./components/home/Home";
import items from "./components/items/Items";
import cart from "./components/cart/Cart";
import login from "./components/login/Login";
import finish from "./components/finish/Finish";
import { store } from "./store/store";

const routes = [

    { path:'', name:'Home', component: home},
    
    { path: '/items', name:'Items', component: items},

    { path: '/cart', name:'Cart', component: cart},

    { path: '/login', name:'Login', component: login},

    { path: '/order', name:'Order', component: finish, beforeEnter: (to, from, next) => {
        // ...
        if(to.name !== 'Login' && !store.state.isAuthenticated){
            next({name: 'Login'});
        }
        else next()
    }}

]

export const router = new VueRouter({
    mode: 'history',
    routes
});

Vue.use(VueRouter);