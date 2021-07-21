import "./style.scss";
import {
  createCancelButtonMolecule,
  createProductImgMolecule,
} from "@molecules";

const createProductUploadImgMolecule = ({ src, idx, onClickCancelButton }) => {
  const $productUploadImg = document.createElement("div");
  const $img = createProductImgMolecule({ type: "medium", src });
  const $cancelButton = createCancelButtonMolecule({
    onClick: onClickCancelButton,
  });
  $cancelButton.dataset.idx = idx;

  $productUploadImg.append($img, $cancelButton);
  $productUploadImg.classList.add("product-upload-img");

  return $productUploadImg;
};

export default createProductUploadImgMolecule;
