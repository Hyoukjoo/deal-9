import "./style.scss";
import {
  createImgBoxAtom,
  createIconAtom,
  createTextAtom,
  createInputAtom,
} from "@atoms";
import { GRAY1 } from "@common/styles/color.js";

const createAddImgButtonMolecule = ({ onChange }) => {
  const $label = document.createElement("label");
  const $imgBox = createImgBoxAtom({ type: "medium" });
  const $imgIcon = createIconAtom({ type: "image", color: GRAY1 });
  const $imgCountText = createTextAtom({
    type: "span",
    size: "x-small",
    text: "0 / 10",
  });
  const $fileInput = createInputAtom({ type: "file" });
  $fileInput.multiple = true;
  $fileInput.addEventListener("change", onChange);

  $label.append($imgBox, $fileInput);
  $imgBox.classList.add("add-img-button");
  $imgBox.appendChild($imgIcon);
  $imgBox.appendChild($imgCountText);

  return $label;
};

export default createAddImgButtonMolecule;
