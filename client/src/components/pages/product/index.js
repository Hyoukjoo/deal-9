import { createTextAtom } from "@atoms";
import { getRouter } from "@utils/router.js";
import { PRODUCT } from "@common/path.js";

const state = {};

const path = PRODUCT;

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
  path,
  getPage,
};

export default Product;
