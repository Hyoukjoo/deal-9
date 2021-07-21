import "./style.scss";
import { createTextareaAtom, createTextAtom, createInputAtom } from "@atoms";
import {
  createIconButtonMolecule,
  createLocationBarMolecule,
} from "@molecules";
import {
  createHeaderOrganism,
  createProductUploadImgListOrganism,
  createCategoryListOrganism,
} from "@organisms";
import { GRAY3 } from "@common/styles/color";

const createPostTemplate = ({
  state,
  onInputTitle,
  onClickBackButton,
  onChangeFileInput,
  onClickCancelButton,
  onClickCategoryButton,
  onInputContent,
  onInputPrice,
}) => {
  const $postTemplate = document.createElement("div");
  const $main = document.createElement("main");
  const $backButton = createIconButtonMolecule({
    type: "short-arrow-left",
    onClick: onClickBackButton,
  });
  const $pageName = createTextAtom({
    type: "span",
    size: "medium",
    text: "글쓰기",
  });
  const $sendButton = createIconButtonMolecule({
    type: "check",
    color: GRAY3,
    disabled: true,
    onClick: () => {
      console.log("d");
    },
  });
  const $header = createHeaderOrganism({
    type: "off-white",
    left: $backButton,
    middle: $pageName,
    right: $sendButton,
  });
  const $uploadImgList = createProductUploadImgListOrganism({
    uploadImgList: state.uploadImgList,
    onChangeFileInput,
    onClickCancelButton,
  });
  const $postTitle = document.createElement("div");
  const $titleInput = createInputAtom({
    onChange: onInputTitle,
    placeholder: "글 제목",
    size: "large",
    type: "text",
    custom: "post-input",
  });
  const $categoryList = createCategoryListOrganism({
    categoryList: state.categoryList,
    onClickCategoryButton,
  });
  $postTitle.append($titleInput, $categoryList);
  $postTitle.classList.add("post-input-wrapper");

  const $postPrice = document.createElement("div");
  const $priceInput = createInputAtom({
    onChange: onInputPrice,
    placeholder: "₩ 가격(선택사항)",
    size: "large",
    type: "text",
    custom: "post-input",
  });
  $postPrice.append($priceInput);
  $postPrice.classList.add("post-input-wrapper");

  const $postContent = document.createElement("div");
  const $contentInput = createTextareaAtom({
    onChange: onInputContent,
    placeholder: "게시글 내용을 작성해주세요.",
  });
  $postContent.append($contentInput);
  $postContent.classList.add("post-input-wrapper");

  const $footer = document.createElement("footer");
  const $locationBar = createLocationBarMolecule({ location: state.location });

  $postTemplate.append($header, $main, $footer);
  $main.append($uploadImgList, $postTitle, $postPrice, $postContent);
  $footer.append($locationBar);
  $postTemplate.classList.add("post-template");

  return $postTemplate;
};

export default createPostTemplate;
