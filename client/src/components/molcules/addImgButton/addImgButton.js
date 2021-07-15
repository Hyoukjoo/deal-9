import "./style.scss";
import { createImgBoxAtom } from "@atoms/imgBox/imgBox.js";
import { createIconAtom } from "@atoms/icon/icon.js";
import { createTextAtom } from "@atoms/text/text.js";

export const createAddImgButtonMolcule = ({ imgCount }) => {
  const $addImgButton = document.createElement("button");
  const $imgBox = createImgBoxAtom({ type: "medium" });
  // TODO: icon 색상 변경
  const $imgIcon = createIconAtom({ type: "image" });
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
