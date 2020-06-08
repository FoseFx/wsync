export default {
  namespaced: true,
  state: {
    valmod1: new Date(),
  },
  mutations: {
    setValmod1(state: any, val: string) {
      state.valmod1 = new Date(val);
    },
  },
  actions: {},
  getters: {},
};
