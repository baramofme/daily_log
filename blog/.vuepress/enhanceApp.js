import Vuex from 'vuex'

import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'

import VueGoodTable from 'vue-good-table';

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements to the app
  Vue.use(Vuex)
  Vue.use(VueChartkick, {adapter: Chart})
  Vue.use(VueGoodTable)
  Vue.mixin({})
}
