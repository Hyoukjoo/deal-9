import { createCategoryTemplate } from "@templates";
import { CATEGORY } from "@common/path.js";

const state = {
  // TODO IconAtom, DB
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
};

const path = CATEGORY;

const getPage = () => {
  return createCategoryTemplate({
    categoryList: state.categoryList,
  });
};

const Category = {
  path,
  getPage,
};

export default Category;
