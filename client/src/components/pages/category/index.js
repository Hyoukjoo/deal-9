import { createCategoryTemplate } from "@templates";
import { CATEGORY } from "@common/path.js";
import { getContext, setContext } from "../../../context.js";
import { getRouter } from "@utils/router.js";

const path = CATEGORY;

const onClickCategory = (id) => () => {
  if (getContext().selectedCategory === id) {
    console.log("d");
    setContext({ selectedCategory: null });
  } else {
    setContext({ selectedCategory: id });
  }
  getRouter().push("/");
};

const getPage = () => {
  return createCategoryTemplate({
    categoryList: getContext().categoryList,
    selectedCategory: getContext().selectedCategory,
    onClickCategory,
  });
};

const Category = {
  path,
  getPage,
};

export default Category;
