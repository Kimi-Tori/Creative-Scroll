import Vuex from 'vuex';

export default new Vuex.Store({
  state: {
    isDarkTheme: false
  },
  mutations: {
    toggleTheme(state) {
      state.isDarkTheme = !state.isDarkTheme;
      localStorage.setItem('isDarkTheme', state.isDarkTheme);
    }
  }
});
