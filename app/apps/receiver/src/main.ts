import './set-public-path';
import singleSpaVue from 'single-spa-vue';
import Vue from 'vue';

import Receiver from './Receiver.vue';

import router from './router/index';
import store from './store/index';

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h: any) => h(Receiver),
    el: '#component-receiver',
    router,
    store,
  },
});

export const {
  bootstrap,
  mount,
  unmount,
} = vueLifecycles;
