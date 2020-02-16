import './set-public-path';
import singleSpaVue from 'single-spa-vue';
import Vue from 'vue';

import App from './App.vue';
import router from './router/index';
import store from './store/index';

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h: any) => h(App),
    router,
    store,
  },
});

// eslint-disable-next-line
export const bootstrap = vueLifecycles.bootstrap;
// eslint-disable-next-line
export const mount = vueLifecycles.mount;
// eslint-disable-next-line
export const unmount = vueLifecycles.unmount;
