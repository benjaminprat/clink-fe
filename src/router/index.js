import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import WinesIndex from "../views/WinesIndex.vue";
import WinesCreate from "../views/WinesCreate.vue";
import Logout from "../views/Logout.vue";
import Login from "../views/Login.vue";
import Card from "../views/Card.vue";
import Signup from "../views/Signup.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/wines/new",
    name: "WinesCreate",
    component: WinesCreate,
  },
  {
    path: "/wines",
    name: "WinesIndex",
    component: WinesIndex,
  },
  { path: "/login", name: "Login", component: Login },
  { path: "/signup", name: "Signup", component: Signup },

  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: "/cards/:id",
    name: "Card",
    component: Card,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
