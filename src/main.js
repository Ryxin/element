import Vue from 'vue';
import App from '@/App.vue';

// 导入自己写的element组件
import '@/plugins/element'

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount('#app');