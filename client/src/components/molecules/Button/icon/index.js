import "./style.scss";
import { createIconAtom, createButtonAtom } from "@atoms";

const createIconButtonMolecule = ({
  type,
  color,
  onClick,
  width,
  height,
  fill,
}) => {
  const $iconButton = createButtonAtom({ onClick });
  const $icon = createIconAtom({ type, color, width, height, fill });

  $iconButton.appendChild($icon);
  $iconButton.classList.add("icon-button");

  return $iconButton;
};

export default createIconButtonMolecule;
