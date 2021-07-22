import "./style.scss";
import {
  createAddImgButtonMolecule,
  createProductUploadImgMolecule,
} from "@molecules";

const createProductUploadImgListOrganism = ({
  uploadImgList,
  onChangeFileInput,
  onClickCancelButton,
}) => {
  const $imgList = document.createElement("ul");
  const $addImgButton = createAddImgButtonMolecule({
    onChange: onChangeFileInput,
    imgCount: uploadImgList.length,
  });

  $imgList.append($addImgButton);
  uploadImgList.forEach((src, idx) => {
    const $uploadImg = createProductUploadImgMolecule({
      src,
      idx,
      onClickCancelButton,
    });
    const $li = document.createElement("li");
    $imgList.append($li);
    $li.append($uploadImg);
  });
  $imgList.classList.add("product-upload-img-list");

  return $imgList;
};

export default createProductUploadImgListOrganism;
