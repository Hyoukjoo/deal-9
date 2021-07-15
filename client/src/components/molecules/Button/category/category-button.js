import "./style.scss";

import { createButtonAtom } from "../../../atoms/Button/button.js";
import { createLinkAtom } from "../../../atoms/Text/link.js";

export const createCategoryButton = ({ onClick, label }) => {
  const $button = createButtonAtom({ onClick });
  const $label = createLinkAtom({ type: "label", size: "small", text: label });

  $button.classList.add("category-button");
  $button.append($label);

  return $button;
};
