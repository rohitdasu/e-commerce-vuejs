<template>
  <div class="container h-100 d-flex justify-content-center">
    <div class="mt-5 w-50">
      <md-card class="p-5">
        <md-field>
          <label>Username</label>
          <md-input v-model="$store.getters.USER.username"></md-input>
        </md-field>

        <md-field>
          <label>Password</label>
          <md-input type="password" v-model="$store.getters.USER.password"></md-input>
        </md-field>

        <md-card-actions>
          <md-button @click="gotoFinish" class="md-raised md-primary col-12">
            Login
          </md-button>
        </md-card-actions>
      </md-card>
    </div>
  </div>
</template>
<script>
import { store } from "../../store/store";
export default {
  data() {
    return {};
  },
  methods: {
    gotoFinish() {
      this.$store.commit("SET_AUTH", true);
      if (store.getters.GET_ROUTE_ORDER == true) {
        this.$router.push("/order");
      } else {
        this.$router.push("/");
      }
    },
  },
  beforeRouteEnter(to, from, next) {
    if (from.name == "Cart") {
      store.commit("SET_ROUTE_ORDER", true);
    }
    next();
  },
};
</script>