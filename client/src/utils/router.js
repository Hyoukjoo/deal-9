import { render } from "./render.js";

// TODO: String.startsWith 를 사용해서 params 가지고 오기
const routes = {};

let $root;
let isInitRouter = false;

const registerRoute = (route) => {
  routes[route.path] = route.getPage;
};

const push = (pathname, data = {}) => {
  window.history.pushState(data, pathname, window.location.origin + pathname);
  render({
    target: $root,
    getPage: routes[pathname],
    props: { router, pathname: window.location.pathname, data },
  });
};

const back = () => {
  window.history.back();
};

const router = {
  push,
  back,
};

export const initRouter = ($app, routesInfos) => {
  if (isInitRouter) return;

  $root = $app;
  isInitRouter = true;

  routesInfos.forEach(registerRoute);

  window.onpopstate = (e) => {
    const { pathname } = window.location;

    render({
      target: $root,
      getPage: routes[pathname],
      props: { router, pathname },
    });
  };

  render({
    target: $root,
    getPage: routes[window.location.pathname],
    props: { router, pathname: window.location.pathname },
  });
};

export const getRouter = () => {
  if (isInitRouter) {
    return router;
  } else {
    throw Error("라우터가 초기화 되지 않았습니다.");
  }
};
