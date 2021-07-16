// 페이지를 유틸로 불러오는게 아니라 index.js 로 불러서 처리하는건 어떨까요?
// 너무 직접 붙어버리는거 같기도 하고, 유틸이라는 폴더에 페이지가 들어오는게 부자연스러운 거 같아요!
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
