import { getTextElem } from "@atoms/typography/typography.js";

const state = {};

const getPage = () => {
  const $section = document.createElement("section");
  const $title = getTextElem({ type: "h1", size: "large", text: "product" });

  $section.append($title);

  return $section;
};

const Product = {
  getPage,
};

export default Product;
