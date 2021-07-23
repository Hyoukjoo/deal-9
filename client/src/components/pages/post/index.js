import { createPostTemplate } from "@templates";
import { createProductUploadImgListOrganism } from "@organisms";
import { POST } from "@common/path.js";
import { GRAY3, PRIMARY1 } from "@common/styles/color.js";
import { getRouter } from "@utils/router";
import { replaceDomElement } from "@utils/render";
import { addProductRequest } from "../../../remotes/ProductRemote.js";
import { getContext } from "../../../context.js";

const initState = () =>
  new Proxy(
    {
      title: "",
      previewImages: [],
      categoryList: getContext().categoryList,
      images: [],
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

let state = initState();

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
const onChangeFileInput = (e) => [...e.target.files].forEach(readInputFile);
const onClickBackButton = (_) => {
  state = initState();
  getRouter().back();
};
const onInputPrice = (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, "");
  e.target.value = `₩ ${(+e.target.value).toLocaleString()}`;
  if (e.target.value === "₩ 0") {
    e.target.value = "";
  } else {
    state.price = +e.target.value.substring(2).replaceAll(",", "");
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
    state.price,
    state.userId || 1,
    state.location.id,
    state.categories,
    state.images
  )
    .then((ret) => {
      state = initState();
      getRouter().push("/");
    })
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
