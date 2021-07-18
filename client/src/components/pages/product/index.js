import { createTextAtom } from "@atoms/index.js";
import { getRouter } from "@utils/router.js";

const state = {};

const getPage = () => {
  const router = getRouter();

  const $section = document.createElement("section");
  const $title = createTextAtom({ type: "h1", size: "large", text: "product" });
  const $button = document.createElement("button");

  $button.addEventListener("click", (e) => {
    router.back();
  });

  $button.textContent = "back!";

  $section.append($title, $button);

  return $section;
};

const Product = {
  getPage,
};

export default Product;
