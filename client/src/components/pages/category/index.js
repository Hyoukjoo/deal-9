import { createCategoryTemplate } from "@templates";

const state = {};

const dummy = {
  name: "전자제품",
  src: "data:image/png;base64,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",
};

const getPage = () => {
  return createCategoryTemplate({
    categoryList: new Array(14).fill(0).map((v) => dummy),
  });
};

const Category = {
  getPage,
};

export default Category;