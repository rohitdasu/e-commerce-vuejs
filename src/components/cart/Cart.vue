<template>
    <div class="container">
        <md-list class="md-triple-line">
            <md-list-item v-for="x in cartData" :key="x.id">

                <div style="height:150px;width:150px" class="p-4">
                    <img :src="require(`../../assets/images/${x.img}`)">
                </div>
                
                <div class="md-list-item-text">
                    <span class="h3">{{x.brand}}</span>
                    <span class="h4">RS {{x.price}}</span>
                </div>

            </md-list-item>
        </md-list>

        <div v-if="cartData.length>0" class="p-4 w-50 d-flex justify-content-center">
            <md-button @click="gotoFinish" class="md-accent btn btn-block md-raised">Buy Now</md-button>
        </div>

        <div v-if="cartData.length<1" class="d-flex h-100 justify-content-center align-items-center">
            <div class="h2">
                Empty Cart
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            cartData:[]
        }
    },
    created() {
        this.cartData = this.$store.getters.GET_CART_DATA;
    },
    methods: {
        gotoFinish() {
            this.$router.push("/order");
        }
    }
}
</script>
<style scoped>
    
</style>