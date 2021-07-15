import { createTextAtom } from "@atoms/text/text.js";
import { getRouter } from "@utils/router.js";
import { createIconAtom } from "../../atoms/icon/icon.js";

const state = {};

const getPage = () => {
  const router = getRouter();

  const $section = document.createElement("section");
  const $title = createTextAtom({ type: "h1", size: "large", text: "home" });
  const $button = document.createElement("button");

  const $icon = createIconAtom({ type: "add" });

  $button.addEventListener("click", (e) => {
    router.push("/product");
  });

  $button.textContent = "product로 이동!";

  $section.append($title, $button, $icon);

  return $section;
};

const Home = {
  getPage,
};

export default Home;
