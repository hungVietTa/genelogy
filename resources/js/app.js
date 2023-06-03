/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

import router from "./router";
import "./axios";
import store from "./vuex";
import Toasted from "vue-toasted";
import Chart from "chart.js";
import vSelect from 'vue-select';
import VueCompositionAPI from '@vue/composition-api'
import VueCarousel from 'vue-carousel';
import { provide } from "@vue/composition-api";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "vue-select/dist/vue-select.css";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project

// Optionally install the BootstrapVue icon components plugin

window.Vue = require("vue").default;
import VuePictureSwipe from 'vue-picture-swipe';
Vue.component('vue-picture-swipe', VuePictureSwipe);
Vue.use(VueCarousel);
Vue.use(Toasted,{
  duration: 300, // Set the duration to 3000 milliseconds (3 seconds)
});
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
Vue.use(VueCompositionAPI)
Vue.use(IconsPlugin)
Vue.use(BootstrapVue)
Vue.component("app", require("./App.vue").default);
Vue.component("vue-select", vSelect);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    setup(){
        provide("vuex-store", store);
      },
    router,
    store,
    el: "#app"
});
