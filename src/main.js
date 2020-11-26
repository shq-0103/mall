import Vue from 'vue'
import axios from 'axios'
//import VueAxios from 'vue-axios'
import router from './router'
import App from './App.vue'
import env from './env'

//mock开关
const mock = true;
if (mock) {
  require('./mock/api')
}
//根据前端的跨越方式做调整 eg: /a/b /api/a/b=> /a/b
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
//根据环境变量获取不同的请求地址
axios.defaults.baseURL = env.baseURL;
//接口错误拦截
axios.interceptors.response.use(function (response) {
 let res= response.data;//取接口值
  if (res.status == 0) {//成功
    return res.data;
  } else if(res.status==10) {//未登陆
    window.location.href = '/#/login';
  } else {
    alert(res.msg);
}

});

//Vue.use(VueAxios.axios);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
