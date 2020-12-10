<template>
    <div class="container h-100 d-flex justify-content-center">
        <div class="row mt-5">
            <md-button @click="gotoFinish" class="md-raised md-primary col-12">
                Login
            </md-button>
        </div>
    </div>
</template>
<script>
    import { store } from '../../store/store';
export default {
    data() {
        return {
            
        }
    },
    methods: {
        gotoFinish() {
            this.$store.commit('SET_AUTH',true);
            if(store.getters.GET_ROUTE_ORDER == true){
                this.$router.push('/order')
            }else{
                this.$router.push('/');
            }
        }
    },
    beforeRouteEnter (to, from, next) {
        if(from.name == 'Cart'){
            store.commit('SET_ROUTE_ORDER',true);
        }
        next();
    }
}
</script>