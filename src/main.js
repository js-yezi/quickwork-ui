import Vue from 'vue'
// 导入组件库
import QwUi from './../packages'
import App from './App.vue'

Vue.use(QwUi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
