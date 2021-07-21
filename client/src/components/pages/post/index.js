import { createPostTemplate } from "@templates";
import { createProductUploadImgListOrganism } from "@organisms";
import { POST } from "@common/path.js";
import { GRAY3, PRIMARY1 } from "@common/styles/color.js";
import { getRouter } from "@utils/router";
import { replaceDomElement } from "@utils/render";

const state = new Proxy(
  {
    title: "",
    uploadImgList: [],
    categoryList: [
      { id: 1, name: "전자제품" },
      { id: 2, name: "옷" },
    ],
    category: [],
    price: null,
    content: "",
    isValid: false,
    location: "화양동",
  },
  {
    set: stateSetHandler,
  }
);

function stateSetHandler(stateObj, prop, value) {
  stateObj[prop] = value;

  switch (prop) {
    case "title":
      toggleCategoryList();
    case "content":
    case "uploadImgList":
      updateUploadImgList();
    case "category":
    case "price":
    case "content":
      formValidation();
      break;
    case "isValid":
      handleSendButton();
      break;
  }

  return true;
}

const onInputTitle = (e) => (state.title = e.target.value);
const onInputContent = (e) => (state.content = e.target.value);
const onClickBackButton = (_) => getRouter().back();
const onChangeFileInput = (e) => [...e.target.files].forEach(readInputFile);
const onInputPrice = (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, "");
  e.target.value = `₩ ${(+e.target.value).toLocaleString()}`;
  if (e.target.value === "₩ 0") {
    e.target.value = "";
  } else {
    state.price = +e.target.value.substring(2).replace(",", "");
  }
};
const onClickCancelButton = (e) => {
  const $button = e.target.closest("button");
  state.uploadImgList = state.uploadImgList.filter(
    (_, idx) => idx !== +$button.dataset.idx
  );
};
function onClickCategoryButton() {
  this.classList.toggle("active");
  const { categoryId, categoryName } = this.dataset;
  if (this.classList.contains("active")) {
    state.category = [
      ...state.category,
      { id: categoryId, name: categoryName },
    ];
  } else {
    state.category = state.category.filter((c) => c.id !== categoryId);
  }
}

const getPage = () => {
  return createPostTemplate({
    state,
    onInputTitle,
    onInputContent,
    onClickBackButton,
    onChangeFileInput,
    onClickCancelButton,
    onClickCategoryButton,
    onInputPrice,
  });
};

const Post = {
  path: POST,
  getPage,
};

export default Post;

function formValidation() {
  if (
    state.title &&
    state.uploadImgList.length &&
    state.category.length &&
    state.content
  ) {
    state.isValid = true;
  } else {
    state.isValid = false;
  }
}

function handleSendButton() {
  const $checkIcon = document.getElementById("check-icon");
  $checkIcon.style.stroke = state.isValid ? PRIMARY1 : GRAY3;

  const $sendButton = $checkIcon.closest("button");
  $sendButton.disabled = !state.isValid;
}

function toggleCategoryList() {
  const $categoryList = document.querySelector(".category-list");
  if (state.title.length === 1) {
    $categoryList.classList.add("show");
  } else if (!state.title) {
    $categoryList.classList.remove("show");
  }
}

function updateUploadImgList() {
  const $proudctUploadImgList = createProductUploadImgListOrganism({
    uploadImgList: state.uploadImgList,
    onChangeFileInput,
    onClickCancelButton,
  });
  replaceDomElement($proudctUploadImgList);
}

function readInputFile(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    state.uploadImgList = [...state.uploadImgList, e.target.result];
  };
  reader.readAsDataURL(file);
}
