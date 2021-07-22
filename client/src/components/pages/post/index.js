import { createPostTemplate } from "@templates";
import { createProductUploadImgListOrganism } from "@organisms";
import { POST } from "@common/path.js";
import { GRAY3, PRIMARY1 } from "@common/styles/color.js";
import { getRouter } from "@utils/router";
import { replaceDomElement } from "@utils/render";
import { addProductRequest } from "../../../remotes/ProductRemote.js";

const state = new Proxy(
  {
    title: "",
    previewImages: [],
    // TODO IconAtom, DB, state 공유
    images: [],
    categoryList: [
      { id: 1, name: "디지털기기", src: "/public/icons/digital.svg" },
      { id: 2, name: "생활가전", src: "/public/icons/life.svg" },
      { id: 3, name: "가구/인테리어", src: "/public/icons/furniture.svg" },
      { id: 4, name: "게임/취미", src: "/public/icons/game.svg" },
      { id: 5, name: "생활/가공식품", src: "/public/icons/food.svg" },
      { id: 6, name: "스포츠/레저", src: "/public/icons/sport.svg" },
      { id: 7, name: "여성패션/잡화", src: "/public/icons/skirt.svg" },
      { id: 8, name: "남성패션/잡화", src: "/public/icons/clothe.svg" },
      { id: 9, name: "유아동", src: "/public/icons/kids.svg" },
      { id: 10, name: "뷰티/미용", src: "/public/icons/veauti.svg" },
      { id: 11, name: "반려동물", src: "/public/icons/pet.svg" },
      { id: 12, name: "도서/티켓/음반", src: "/public/icons/book.svg" },
      { id: 13, name: "식물", src: "/public/icons/plant.svg" },
      { id: 14, name: "기타 중고 물품", src: "/public/icons/etc.svg" },
    ],
    categories: [],
    price: null,
    content: "",
    isValid: false,
    location: { id: 1, name: "화양동" },
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
    case "previewImages":
      updateUploadImgList();
    case "categories":
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
  state.previewImages = state.previewImages.filter(
    (_, idx) => idx !== +$button.dataset.idx
  );
};
const onClickSendBitton = (e) => {
  addProductRequest(
    state.title,
    state.content,
    state.userId || 1,
    state.location.id,
    state.categories,
    state.images
  )
    .then((ret) => console.log(ret))
    .catch((e) => console.log(e));
};
function onClickCategoryButton() {
  this.classList.toggle("active");
  const { categoryId } = this.dataset;
  if (this.classList.contains("active")) {
    state.categories = [...state.categories, categoryId];
  } else {
    state.categories = state.categories.filter((id) => id !== categoryId);
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
    onClickSendBitton,
  });
};

const Post = {
  path: POST,
  getPage,
};

export default Post;

function formValidation() {
  console.log(state.title);
  console.log(state.previewImages.length);
  console.log(state.categories.length);
  console.log(state.content);
  if (
    state.title &&
    state.previewImages.length &&
    state.categories.length &&
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
    previewImages: state.previewImages,
    onChangeFileInput,
    onClickCancelButton,
  });
  replaceDomElement($proudctUploadImgList);
}

function readInputFile(file) {
  const reader = new FileReader();
  state.images = [...state.images, file];
  reader.onload = (e) => {
    state.previewImages = [...state.previewImages, e.target.result];
  };
  reader.readAsDataURL(file);
}
