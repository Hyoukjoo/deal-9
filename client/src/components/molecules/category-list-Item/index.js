import "./style.scss";
import { createTextAtom, createImgBoxAtom } from "@atoms";

const createCategoryListItemMolecule = ({ text }) => {
  const $categoryListItem = document.createElement("div");
  const $imgBox = createImgBoxAtom({ type: "small" });
  const $text = createTextAtom({ type: "span", size: "x-small", text });

  $categoryListItem.append($imgBox, $text);
  $categoryListItem.classList.add("category-list-item");

  return $categoryListItem;
};

export default createCategoryListItemMolecule;