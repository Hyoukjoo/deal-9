import "./style.scss";

import { createButtonAtom, createIconAtom, createLinkAtom } from "@atoms";
import { GRAY1 } from "@common/styles/color.js";

const createStatusButtonMolecule = ({ onClick, status }) => {
  const $button = createButtonAtom({ onClick });
  const $buttonLabel = createLinkAtom({
    type: "label",
    text: status,
    size: "small",
  });
  const $arrowIcon = createIconAtom({
    type: "short-arrow-down",
    width: 12,
    height: 12,
    color: GRAY1,
  });

  $button.classList.add("status-button");
  $button.append($buttonLabel, $arrowIcon);

  return $button;
};

export default createStatusButtonMolecule;
