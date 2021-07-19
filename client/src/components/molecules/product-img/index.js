import "./style.scss";
import { createImgBoxAtom } from "@atoms";

const createProductImgMoleclue = ({ type, src }) => {
  const $imgBox = createImgBoxAtom({ type });

  $imgBox.classList.add("product-img");

  if (src !== undefined) {
    const $img = document.createElement("img");
    $img.src = src;
    $imgBox.append($img);
  }

  return $imgBox;
};

export default createProductImgMoleclue;
