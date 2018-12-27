import ConfigurableGridLayout from '../packages/ConfigurableGridLayout/index.js'

const components = [
  ConfigurableGridLayout
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
  ConfigurableGridLayout
}
