// Additional polyfills
import 'custom-event-polyfill'
import 'url-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import globals from './globals'
import Popper from 'popper.js'
import firebase from 'firebase';
import config from "./config";
import axios from 'axios';
import NotificationMixin from "./mixins/NotificationMixin"
import Notifications from 'vue-notification'

Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false

Vue.use(BootstrapVue)
Vue.use(Notifications);
Vue.mixin(NotificationMixin)
Vue.mixin({
  data: globals
})

axios.defaults.baseURL = "localhost:8000"

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: config.FIREBASE_API_KEY,
  authDomain: config.FIREBASE_AUTH_DOMAIN,
  databaseURL: config.FIREBASE_DATABASE_URL,
  projectId: config.FIREBASE_PROJECT_ID,
  storageBucket: config.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: config.FIREBASE_MESSAGING_SENDER_ID,
  appId: config.FIREBASE_APP_ID,
  measurementId: config.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    user.getIdToken().then(function(idToken) {
      Vue.prototype.$axios.defaults.headers.common.Authorization = `Bearer ${idToken}`;
    }).catch(function(error) {
      console.log(error);
      Vue.prototype.$user = null;
    });
    Vue.prototype.$user = user;
  }

  new Vue({
    router,
    loggedUser: user,
    render: h => h(App)
  }).$mount('#app')
});
