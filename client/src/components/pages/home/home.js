import { getTextElem } from "@atoms/typography/typography.js";
import { getRouter } from "@utils/router.js";

const state = {};

const getPage = () => {
  const router = getRouter();

  const $section = document.createElement("section");
  const $title = getTextElem({ type: "h1", size: "large", text: "home" });
  const $button = document.createElement("button");

  $button.addEventListener("click", (e) => {
    router.push("/product");
  });

  $section.append($title);

  return $section;
};

const Home = {
  getPage,
};

export default Home;
