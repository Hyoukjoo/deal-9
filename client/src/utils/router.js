import Home from "@pages/home/home.js";
import Product from "@pages/product/product.js";
import { render } from "./render.js";

const routes = {};
let $root;
let isInitRouter = false;

const push = (pathname, data = {}) => {
  const component = routes[pathname];
  window.history.pushState(data, pathname, window.location.origin + pathname);
  render($root, component);
};

const back = () => {
  window.history.back();
};

const router = {
  push,
  back,
};

const registerRoutes = (pathname, page) => {
  routes[pathname] = page;
};

export const initRouter = ($app) => {
  if (isInitRouter) return;

  $root = $app;
  isInitRouter = true;

  registerRoutes("/", Home.getPage());
  registerRoutes("/product", Product.getPage());

  window.onpopstate = (e) => {
    const component = routes[window.location.pathname];
    render($root, component);
  };

  render($root, routes[window.location.pathname]);
};

export const getRouter = () => {
  if (isInitRouter) {
    return router;
  } else {
    throw Error("라우터가 초기화 되지 않았습니다.");
  }
};
