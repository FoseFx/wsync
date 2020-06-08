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
  plugins: [
    (store) => {
      const ws = new WebSocket("ws://localhost:9090");
      ws.onmessage = (e: MessageEvent) => {
        const { data } = e;
        const obj = JSON.parse(data) as { [key: string]: any };

        for (const key in obj) {
          store.commit(key, obj[key]);
        }
      };
    },
  ],
});
