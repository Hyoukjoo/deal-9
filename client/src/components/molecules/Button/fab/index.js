import "./style.scss";
import { createButtonAtom, createIconAtom } from "@atoms";
import { WHITE } from "@common/styles/color.js";

const createFabButtonMolecule = ({ onClick = () => {} }) => {
  const $button = createButtonAtom({ onClick });
  const $icon = createIconAtom({ type: "add", color: WHITE });

  $button.classList.add("fab-button");

  $button.append($icon);

  return $button;
};

export default createFabButtonMolecule;
