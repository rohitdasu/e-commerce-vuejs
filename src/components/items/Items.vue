<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-3 p-3" v-for="x in data" :key="x.id">
                <md-card md-with-hover>
                    <md-ripple>
                        <md-card-header>
                        <div>
                            <img :src="require(`../../assets/images/${x.img}`)">
                        </div>
                        <div class="md-title text-center mt-2">{{x.brand}}</div>
                        <div class="md-subhead text-center mt-2">&#8377; {{x.price}}.00</div>
                        </md-card-header>
                        <md-card-actions>
                        <md-button @click="addToCart(x)" class="md-accent">Add To Cart</md-button>
                        </md-card-actions>
                    </md-ripple>
                </md-card>
            </div>
        </div>
        <md-snackbar :md-duration=2000 :md-active.sync="showSnackbar" md-persistent>
            <span class="h6">Added to cart</span>
        </md-snackbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data:'',
            showSnackbar:false
        }
    },
    created() {
        this.data = this.$store.getters.GET_DUMMY_DATA;
    },
    methods: {
        addToCart(value) {
            this.showSnackbar = true;
            this.$store.commit('ADD_TO_CART',value);
        }
    }
}
</script>