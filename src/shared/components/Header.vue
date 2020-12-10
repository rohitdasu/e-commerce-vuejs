<template>
    <div>
        <md-toolbar class="md-accent" md-elevation="1">
            <div class="md-title h3" style="flex: 1">
                <router-link to="/" class="text-light">E-Commerce-Vue</router-link>
            </div>
            <md-badge :md-content="$store.getters.GET_CART_DATA.length" class="md-primary">
                <md-button @click="gotoCart" class="md-icon-button">
                <md-icon>shopping_cart</md-icon>
            </md-button>
            </md-badge>
            <md-button @click="authButton" class="md-raised ml-3">{{$store.getters.GET_AUTH==true?'Sign out': 'Sign in'}}</md-button>
        </md-toolbar>
    </div>
</template>

<script>
    export default {
        methods: {
            gotoCart() {
                this.$router.push('/cart');
            },
            authButton(){
                let x = this.$store.getters.GET_AUTH;
                if(x==false){
                    this.$router.push('login');
                }
                else{
                    this.$store.commit('SET_AUTH',!x);
                    this.$router.push('/');
                }
            }
        }
    }
</script>

<style scoped></style>