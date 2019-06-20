import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    name: "home",
    component: () => import("../views/home"),
    meta: {
      title: "添加"
    }
  },
  {
    name: "bill",
    component: () => import("../views/bill"),
    meta: {
      title: "记录"
    }
  },
  {
    name: "setting",
    component: () => import("../views/setting"),
    meta: {
      title: "设置"
    }
  },
  {
    path: "*",
    redirect: "/home"
  }
];

// add route path
routes.forEach(route => {
  route.path = route.path || "/" + (route.name || "");
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export { router };
