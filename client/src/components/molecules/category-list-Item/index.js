import "./style.scss";
import { createTextAtom, createButtonAtom } from "@atoms";
import { createProductImgMolecule } from "@molecules";

const createCategoryListItemMolecule = ({ text, src, isSelected, onClick }) => {
  const $categoryListItem = createButtonAtom({ onClick });
  const $productImg = createProductImgMolecule({ type: "small", src });
  const $text = createTextAtom({ type: "span", size: "x-small", text });

  $categoryListItem.append($productImg, $text);
  $categoryListItem.classList.add("category-list-item");
  if (isSelected) {
    $categoryListItem.classList.add("selected");
  }

  return $categoryListItem;
};

export default createCategoryListItemMolecule;
