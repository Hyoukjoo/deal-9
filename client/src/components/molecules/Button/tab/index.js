import "./style.scss";
import { createButtonAtom, createLinkAtom } from "@atoms";

const createTabButtonMolecule = ({ onClick, label }) => {
  const $button = createButtonAtom({ onClick });
  const $label = createLinkAtom({ type: "label", size: "small", text: label });

  $button.classList.add("tab-button");
  $button.append($label);

  return $button;
};

export default createTabButtonMolecule;
