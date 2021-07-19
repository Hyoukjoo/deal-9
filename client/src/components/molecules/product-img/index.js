import "./style.scss";
import { createImgBoxAtom } from "@atoms";

const createProductImgMoleclue = ({ type, src }) => {
  const $imgBox = createImgBoxAtom({ type });
  const $img = document.createElement("img");
  $img.src = src;

  $imgBox.append($img);
  $imgBox.classList.add("product-img");

  return $imgBox;
};

export default createProductImgMoleclue;
