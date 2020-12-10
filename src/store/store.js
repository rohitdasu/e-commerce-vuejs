import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from "./getters";
import * as mutations from './mutations';
import * as actions from './actions';
import { state } from "./state";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions  
});