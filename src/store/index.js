import Vue from 'vue'
import Vuex from 'vuex'

import loading from './plugins/vuex-loading'

/**
 * 导入module
 */
const modules = {}
const context = require.context('./modules', true, /\.js$/)
const keys = context.keys()
keys.forEach(key => {
  const name = key.replace(/(.*\/)*([^.]+).*/gi, '$2')
  modules[name] = context(key).default
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: modules,
  plugins: [loading]
})
