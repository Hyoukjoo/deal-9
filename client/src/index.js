import "./common/styles/style.scss";
import global from "./global.js";
import { initRouter } from "@utils/router.js";
import routes from "./routes.js";

const $app = document.querySelector("#app");
global($app);
initRouter($app, routes);
