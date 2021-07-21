import "./style.scss";
import { createButtonAtom, createLinkAtom } from "@atoms";

const createCategoryButtonMolecule = ({ onClick, label, categoryId }) => {
  const $button = createButtonAtom({ onClick });
  const $label = createLinkAtom({ type: "label", size: "small", text: label });

  $button.classList.add("category-button");
  $button.append($label);
  $button.dataset.categoryId = categoryId;
  $button.dataset.categoryName = label;

  return $button;
};

export default createCategoryButtonMolecule;
