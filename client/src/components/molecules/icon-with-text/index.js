import "./style.scss";
import { createIconAtom, createTextAtom } from "@atoms";
import { GRAY1 } from "@common/styles/color.js";

const createIconWithTextMolecule = ({ iconType, text }) => {
  const $iconWithText = document.createElement("div");

  // TODO: message-square color가 안 변한다..!
  const $icon = createIconAtom({
    type: iconType,
    // color: GRAY1,
    with: 16,
    height: 16,
  });
  const $text = createTextAtom({ type: "span", size: "small", text });

  $iconWithText.append($icon, $text);
  $iconWithText.classList.add("icon-with-text");

  return $iconWithText;
};

export default createIconWithTextMolecule;
