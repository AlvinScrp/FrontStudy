import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

let defaultCityName = loadLocalCityName();

function loadLocalCityName() {
  try {
    let local = localStorage.getItem('cityName');
    if (local) {
      return local;
    }
  } catch (e) { console.error(e); }
  return "上海";
}


export default new Vuex.Store({
  state: {
    globalCityName: defaultCityName
  },
  mutations: {
    citychanged(state, city) {
      console.log("citychanged", city);
      state.globalCityName = city.name;
      localStorage.setItem('cityName', city.name);

    }
  }
});
