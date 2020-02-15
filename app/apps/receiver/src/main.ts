import './set-public-path';
import singleSpaVue from 'single-spa-vue';

import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
// import store from './store/index';

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(App),
    router,
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
