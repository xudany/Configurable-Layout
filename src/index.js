import ConfigurableGridLayout from '../packages/ConfigurableGridLayout/index.js'
import ConfigurableAbsoluteLayout from '../packages/ConfigurableAbsoluteLayout/index.js'
import ConfigurableLayout from '../packages/ConfigurableLayout/index.js'

const components = [
  ConfigurableGridLayout,
  ConfigurableAbsoluteLayout,
  ConfigurableLayout
];

const install = function (Vue) {
  components.map(component => {
    console.log(component.name);
    Vue.component(component.name, component)
  })
};


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ConfigurableGridLayout,
  ConfigurableAbsoluteLayout,
  ConfigurableLayout
}
