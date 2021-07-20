import "./style.scss";
import {
  createAddImgButtonMolecule,
  createProductUploadImgMolecule,
} from "@molecules";

const createProductUploadImgListOrganism = ({ uploadImgList }) => {
  const $imgList = document.createElement("ul");
  const $addImgButton = createAddImgButtonMolecule({
    imgCount: uploadImgList.length,
  });

  $imgList.append($addImgButton);
  uploadImgList.forEach((src) => {
    const $uploadImg = createProductUploadImgMolecule({ src });
    const $li = document.createElement("li");
    $imgList.append($li);
    $li.append($uploadImg);
  });
  $imgList.classList.add("product-upload-img-list");
  return $imgList;
};

export default createProductUploadImgListOrganism;
