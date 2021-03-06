import "./style.scss";
import { createIconAtom, createButtonAtom } from "@atoms";

const createIconButtonMolecule = ({
  type,
  color,
  fill,
  width,
  height,
  onClick,
  disabled,
}) => {
  const $iconButton = createButtonAtom({ onClick, disabled });
  const $icon = createIconAtom({
    type,
    color,
    width,
    height,
    fill,
  });
  $iconButton.appendChild($icon);
  $iconButton.classList.add("icon-button");

  return $iconButton;
};

export default createIconButtonMolecule;
