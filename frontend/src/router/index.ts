import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Top from "../views/top/Top.vue";
import Article from "../views/article/Article.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Top",
    component: Top,
  },
  {
    path: "/article",
    name: "Article",
    component: Article,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
