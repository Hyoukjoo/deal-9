import "./style.scss";
import { getRouter } from "@utils/router";
import { createIconAtom, createTextAtom, createInputAtom } from "@atoms";
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

const createPostTemplate = ({ uploadImgList, location }) => {
  const router = getRouter();
  const $postTemplate = document.createElement("div");
  const $main = document.createElement("main");
  const $backButton = createIconButtonMolecule({
    type: "short-arrow-left",
    onClick: () => {
      router.back();
    },
  });
  const $pageName = createTextAtom({
    type: "span",
    size: "medium",
    text: "글쓰기",
  });
  const $checkIcon = createIconAtom({ type: "check", color: GRAY3 });
  const $header = createHeaderOrganism({
    type: "off-white",
    left: $backButton,
    middle: $pageName,
    right: $checkIcon,
  });
  const $uploadImgList = createProductUploadImgListOrganism({ uploadImgList });
  const $postTitle = document.createElement("div");
  const $titleInput = createInputAtom({
    onChange: () => {},
    placeholder: "글 제목",
    size: "large",
    type: "text",
    custom: "post-input",
  });
  const $categoryList = createCategoryListOrganism({
    categoryList: [
      { id: 1, name: "hi" },
      { id: 2, name: "가전제품" },
      { id: 1, name: "hi" },
      { id: 2, name: "가전제품" },
      { id: 1, name: "hi" },
      { id: 1, name: "hi" },
      { id: 1, name: "hi" },
      { id: 2, name: "가전제품" },
    ],
  });
  $postTitle.append($titleInput, $categoryList);
  $postTitle.classList.add("post-input-wrapper");

  const $postPrice = document.createElement("div");
  const $priceInput = createInputAtom({
    onChange: () => {},
    placeholder: "₩ 가격(선택사항)",
    size: "large",
    type: "text",
    custom: "post-input",
  });
  $postPrice.append($priceInput);
  $postPrice.classList.add("post-input-wrapper");

  const $postContent = document.createElement("div");
  const $contentInput = createInputAtom({
    onChange: () => {},
    placeholder: "게시글 내용을 작성해주세요.",
    size: "large",
    type: "text",
    custom: "post-input",
  });
  $postContent.append($contentInput);
  $postContent.classList.add("post-input-wrapper");

  const $footer = document.createElement("footer");
  const $locationBar = createLocationBarMolecule({ location });

  $postTemplate.append($header, $main, $footer);
  $main.append($uploadImgList, $postTitle, $postPrice, $postContent);
  $footer.append($locationBar);
  $postTemplate.classList.add("post-template");

  return $postTemplate;
};

export default createPostTemplate;
