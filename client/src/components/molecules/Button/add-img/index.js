import "./style.scss";
import { createImgBoxAtom, createIconAtom, createTextAtom } from "@atoms";
import { GRAY1 } from "@common/styles/color.js";

const createAddImgButtonMolecule = ({ imgCount }) => {
  const $addImgButton = document.createElement("button");
  const $imgBox = createImgBoxAtom({ type: "medium" });
  const $imgIcon = createIconAtom({ type: "image", color: GRAY1 });
  const $imgCountText = createTextAtom({
    type: "span",
    size: "x-small",
    text: `${imgCount} / 10`,
  });

  $addImgButton.appendChild($imgBox);
  $addImgButton.classList.add("add-img-button");
  $imgBox.appendChild($imgIcon);
  $imgBox.appendChild($imgCountText);

  return $addImgButton;
};

export default createAddImgButtonMolecule;
