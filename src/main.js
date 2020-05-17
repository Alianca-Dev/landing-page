import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import axios from 'axios';
import firebase from 'firebase';
import config from "./config";

import Home from './components/Home.vue';
import Login from './components/Login.vue';
import RecoverPassword from './components/RecoverPassword.vue';
import Register from './components/Register.vue';
import ComplementData from './components/ComplementData.vue';
import LandingPagePerfilDEV from './components/LandingPagePerfilDEV.vue';
import Profile from './components/Profile.vue';
import AreaData from './components/AreaData.vue';
import Pricing from './components/AreaData.vue';
import Projects from './components/Projects.vue';
import Project from './components/Project.vue';
import Contact from './components/Contact.vue';
import Logout from './components/Logout.vue';

Vue.prototype.$axios = axios;
Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  { path: "/", name: "", component: Home },
  { path: "/home", name: "home", component: Home },
  { path: "/login", name: "login", component: Login },
  { path: "/recover-password", name: "recover-password", component: RecoverPassword },
  { path: "/register", name: "register", component: Register },
  { path: "/profile", name: "profile", component: Profile },
  { path: "/landing-profile", name: "landing-profile", component: LandingPagePerfilDEV },
  { path: "/projects", name: "projects", component: Projects },
  { path: "/project", name: "project", component: Project },
  { path: "/contact", name: "contact", component: Contact },
  { path: "/pricing", name: "pricing", component: Pricing },
  { path: "/complement-data", name: "complement-data", component: ComplementData },
  { path: "/area-data", name: "area-data", component: AreaData },
  { path: "/logout", name: "logout", component: Logout },
];

const router = new VueRouter({
  routes
})

console.log(config);

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
  Vue.prototype.$user = user;
  new Vue({
    router,
    loggedUser: user,
    render: h => h(App),
  }).$mount('#app')
});
