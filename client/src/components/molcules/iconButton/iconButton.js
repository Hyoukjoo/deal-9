import "./style.scss";
import { createIconAtom } from "@atoms/icon/icon.js";

export const createIconButtonMolcule = ({ type }) => {
  const $iconButton = document.createElement("button");
  const $icon = createIconAtom({ type });

  $iconButton.appendChild($icon);
  $iconButton.classList.add("icon-button");

  return $iconButton;
};
