import "./style.scss";
import { createIconAtom } from "@atoms";

const createIconButtonMolecule = ({ type }) => {
  const $iconButton = document.createElement("button");
  const $icon = createIconAtom({ type });

  $iconButton.appendChild($icon);
  $iconButton.classList.add("icon-button");

  return $iconButton;
};

export default createIconButtonMolecule;
