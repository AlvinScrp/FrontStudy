import Vue from 'vue'
import Vuex from 'vuex'
import shopcart from './shopcart.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: { shopcart }
})
