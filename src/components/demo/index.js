import Vue from "vue";
import DemoComp from "./demo.vue";

// 实例化一个vue的component的函数
const DemoConstructor = Vue.extend(DemoComp);

const Demo = (options = {}) => {
  const demoInstance = new DemoConstructor({
    data: options
  });

  demoInstance.vm = demoInstance.$mount();
  console.log(demoInstance.$mount());
  document.querySelector("#root").appendChild(demoInstance.vm.$el);

  demoInstance.dom = demoInstance.vm.$el;

  return demoInstance.vm;
};

Demo.install = (Vue, options) => {
  Vue.prototype.$demo = Demo;
};

export default Demo;
