import "./style.scss";
import { createTextAtom } from "@atoms";
import { createProductImgMolecule } from "@molecules";

const createCategoryListItemMolecule = ({ text, src }) => {
  const $categoryListItem = document.createElement("div");
  const $productImg = createProductImgMolecule({ type: "small", src });
  const $text = createTextAtom({ type: "span", size: "x-small", text });

  $categoryListItem.append($productImg, $text);
  $categoryListItem.classList.add("category-list-item");

  return $categoryListItem;
};

export default createCategoryListItemMolecule;
