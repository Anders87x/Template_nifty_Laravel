/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('buttons-component', require('./components/ButtonsComponent.vue').default);
Vue.component('panels-component', require('./components/PanelsComponent.vue').default);
Vue.component('modals-component', require('./components/ModalsComponent.vue').default);


const app = new Vue({
    el: '#app',
    data :{
        menu:0
    }
});
