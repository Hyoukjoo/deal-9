import "./common/styles/style.scss";

import { initRouter } from "@utils/router.js";
import routes from "./routes.js";

const $app = document.querySelector("#app");

initRouter($app, routes);
