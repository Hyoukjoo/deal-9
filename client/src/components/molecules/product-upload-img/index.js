import "./style.scss";
import {
  createCancelButtonMolecule,
  createProductImgMolecule,
} from "@molecules";

const createProductUploadImgMolecule = ({ src }) => {
  const $productUploadImg = document.createElement("div");
  const $img = createProductImgMolecule({ type: "medium", src });
  const $cancelButton = createCancelButtonMolecule();

  $productUploadImg.append($img, $cancelButton);
  $productUploadImg.classList.add("product-upload-img");

  return $productUploadImg;
};

export default createProductUploadImgMolecule;
