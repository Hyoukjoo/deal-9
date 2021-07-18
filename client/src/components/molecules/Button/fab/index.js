import "./style.scss";
import { createButtonAtom, createIconAtom } from "@atoms";

const createFabButtonMolecule = ({ onClick = () => {} }) => {
  const $button = createButtonAtom({ onClick });
  const $icon = createIconAtom({ type: "add" });

  $button.classList.add("fab-button");

  $button.append($icon);

  return $button;
};

export default createFabButtonMolecule;
