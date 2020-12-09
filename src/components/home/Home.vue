<template>
    <div class="container-fluid h-100">
      
    <div class="row p-1 m-2 d-flex justify-content-center">
      <md-menu md-size="medium" md-align-trigger class="mr-2">
        <md-button md-menu-trigger>Men</md-button>
        <md-menu-content>
          <md-menu-item @click="gotoTopWear">Top Wear</md-menu-item>
          <md-menu-item>Bottom Wear</md-menu-item>
          <md-menu-item>Accessories</md-menu-item>
        </md-menu-content>
      </md-menu>
      <md-menu md-size="medium" md-align-trigger class="mr-2">
        <md-button md-menu-trigger>Women</md-button>

        <md-menu-content>
          <md-menu-item>Top Wear</md-menu-item>
          <md-menu-item>Bottom Wear</md-menu-item>
          <md-menu-item>Accessories</md-menu-item>
        </md-menu-content>
      </md-menu>
      <md-menu md-size="medium" md-align-trigger class="mr-2">
        <md-button md-menu-trigger>Kids</md-button>
        <md-menu-content>
          <md-menu-item>Top Wear</md-menu-item>
          <md-menu-item>Bottom Wear</md-menu-item>
          <md-menu-item>Toys</md-menu-item>
        </md-menu-content>
      </md-menu>
    </div>

      <div class="row">
        <img src="../../../src/assets/images/banner.png" alt="banner" class="image">
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
          <img src="../../../src/assets/images/img3of3.png" class="image">
        </div>
        <div class="col-md-4">
          <img src="../../../src/assets/images/img3of2.png" class="image">
        </div>
        <div class="col-md-4">
          <img src="../../../src/assets/images/img3of1.png" class="image">
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
          <img src="../../../src/assets/images/img2of1.png" class="image">
        </div>
        <div class="col-md-6">
          <img src="../../../src/assets/images/img2of2.png" class="image">
        </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    gotoTopWear() {
      this.$router.push('/items');
    }
  },
  created() {
  }
}
</script>

<style scoped>
  .image {
    height: 100%;
    width: 100%;
    padding: 5px;
  }
</style>
