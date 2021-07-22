import { createProductTemplate } from "@templates";
import { PRODUCT } from "@common/path.js";
import { getContext, setContext } from "../../../context.js";
import { getRouter } from "@utils/router.js";
import { getProductRequest } from "../../../remotes/ProductRemote.js";

const path = PRODUCT;

const onClickBackButton = () => getRouter().back();
const onClickModify = () => {};
const onClickDelete = () => {};

const getPage = (props) => {
  const productId = props?.data?.id;
  if (!productId) {
    getRouter().back();
  }
  return getProductRequest(productId).then((product) => {
    return createProductTemplate({
      onClickBackButton,
      onClickModify,
      onClickDelete,
      ...product,
    });
  });
};

const Category = {
  path,
  getPage,
};

export default Category;
