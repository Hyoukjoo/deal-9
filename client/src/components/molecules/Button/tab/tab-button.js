import { createButtonAtom } from "../../../atoms/Button/button.js";
import { createLinkAtom } from "../../../atoms/Text/link.js";
import "./style.scss";

export const createTabButton = ({ onClick, label }) => {
  const $button = createButtonAtom({ onClick });
  const $label = createLinkAtom({ type: "label", size: "small", text: label });

  $button.classList.add("tab-button");
  $button.append($label);

  return $button;
};
