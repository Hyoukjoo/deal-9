import "./style.scss";
import { createTextAtom } from "@atoms/text/text.js";
import { createImgBoxAtom } from "@atoms/imgBox/imgBox.js";

export const createCategoryListItemMolecule = ({ text }) => {
  const $categoryListItem = document.createElement("div");
  const $imgBox = createImgBoxAtom({ type: "small" });
  const $text = createTextAtom({ type: "span", size: "x-small", text });

  $categoryListItem.append($imgBox, $text);
  $categoryListItem.classList.add("category-list-item");

  return $categoryListItem;
};
