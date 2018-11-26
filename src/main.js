import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import VuePaginate from 'vue-paginate'
import VueImg from 'v-img';
import VueClazyLoad from 'vue-clazy-load';



Vue.use(VueImg);
Vue.use(VuePaginate)
Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueClazyLoad);

const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});

Vue.prototype.$eventBus = new Vue()

new Vue({
    el: '#app',
    render: h => h(App),
    router: router
})