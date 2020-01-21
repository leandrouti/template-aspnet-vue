import Vue from 'vue';

import Hello from './components/Hello.vue';
Vue.component('hello', Hello);

import news from './components/News.vue';
Vue.component('news', news);

new Vue({
  el: '#app',
});




/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
// import 'babel-polyfill';
// import 'intersection-observer';

// require('./bootstrap');

// window.Vue = require('vue');

// alert('test');

// import vuetify from './plugins/vuetify.js';

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('carousel', require('./components/Carousel.vue').default);
// Vue.component('datepicker', require('./components/Datepicker.vue').default);
// Vue.component('gmap', require('./components/Map.vue').default);

// const app = new Vue({
//     vuetify,
//     el: '#app',
// });
