export default {
  namespaced: true,
  state: {
    somebool: false,
  },
  mutations: {
    setSomebool(state: any, bool: boolean) {
      state.somebool = bool;
    },
  },
  actions: {},
  getters: {},
};
