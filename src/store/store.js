import Vue from 'vue'
import Vuex from 'vuex'
import data from '../assets/dummy-data/dummy-data.json'

import * as getters from "./getters";
import * as mutations from './mutations';
import * as actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    isAuthenticated:false,
    dummyData:data,
    cartData:[]
  },
  getters,
  mutations,
  actions  
});