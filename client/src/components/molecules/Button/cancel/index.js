import "./style.scss";
import { createIconAtom, createButtonAtom } from "@atoms";
import { WHITE } from "@common/styles/color.js";

const createCancelButtonMolecule = ({ onClick }) => {
  const $button = createButtonAtom({ onClick });
  const $icon = createIconAtom({
    type: "close",
    color: WHITE,
    width: "20px",
    height: "20px",
  });

  $button.append($icon);
  $button.classList.add("close-button");

  return $button;
};

export default createCancelButtonMolecule;
