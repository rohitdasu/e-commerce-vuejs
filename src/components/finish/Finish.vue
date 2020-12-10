<template>
    <div class="container h-100 d-flex justify-content-center align-items-center">
        <div class="h1">
            Order Success
        </div>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.commit('CLEAR_CART_DATA');
        this.$store.commit('SET_ROUTE_ORDER',false);
    }
}
</script>
<style lang="">
    
</style>