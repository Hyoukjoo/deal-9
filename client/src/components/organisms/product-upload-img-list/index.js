import "./style.scss";
import {
  createAddImgButtonMolecule,
  createProductUploadImgMolecule,
} from "@molecules";

const createProductUploadImgListOrganism = ({
  previewImages,
  onChangeFileInput,
  onClickCancelButton,
}) => {
  const $imgList = document.createElement("ul");
  const $addImgButton = createAddImgButtonMolecule({
    onChange: onChangeFileInput,
    imgCount: previewImages.length,
  });

  $imgList.append($addImgButton);
  previewImages.forEach((src, idx) => {
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
