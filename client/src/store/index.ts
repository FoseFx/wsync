import Vue from "vue";
import Vuex from "vuex";

import testmod1 from "./testmod1";
import testmod2 from "./testmod2";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    someval: 0,
  },
  mutations: {
    setSomeval(state, val: number) {
      state.someval = val;
    },
  },
  actions: {},
  modules: {
    testmod1,
    testmod2,
  },
});
