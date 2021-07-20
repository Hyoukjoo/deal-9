import { Home, Product, Category, Menu } from "@pages";
import { render } from "./render.js";

const routes = {};

let $root;
let isInitRouter = false;

const push = (pathname, data = {}) => {
  const component = routes[pathname];
  window.history.pushState(data, pathname, window.location.origin + pathname);
  render($root, component.getPage());
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

  registerRoutes("/", Home);
  registerRoutes("/product", Product);
  registerRoutes("/category", Category);
  registerRoutes("/menu", Menu);

  window.onpopstate = (e) => {
    const component = routes[window.location.pathname];
    render($root, component.getPage());
  };

  render($root, routes[window.location.pathname].getPage());
};

export const getRouter = () => {
  if (isInitRouter) {
    return router;
  } else {
    throw Error("라우터가 초기화 되지 않았습니다.");
  }
};
