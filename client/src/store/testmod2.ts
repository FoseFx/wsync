export default {
  namespaced: true,
  state: {
    somebool: false,
  },
  mutations: {
    switchBool(state: any) {
      state.somebool = !state.somebool;
    },
  },
  actions: {},
  getters: {},
};
