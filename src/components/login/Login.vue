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
export default {
    methods: {
        gotoFinish() {
            this.$store.commit('SET_AUTH',true);
            this.$router.push('/');
            console.log(this.$store.getters.GET_AUTH);
        }
    }
}
</script>