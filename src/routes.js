import Vue from "vue";
import Router from "vue-router";
import MoviesList from "./components/MoviesList.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Movies List",
      component: MoviesList
    }
  ]
});
