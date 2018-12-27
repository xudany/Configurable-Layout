import Vue from 'vue'
import App from './App'
import setRoute from '../../src/router.js';
import ConfigurableGridLayout from '../../src/index.js'


Vue.config.productionTip = false;

Vue.use(ConfigurableGridLayout)

async function initApp() {

  //设置路由
  let router = await setRoute();

  return new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  });
}


initApp();

