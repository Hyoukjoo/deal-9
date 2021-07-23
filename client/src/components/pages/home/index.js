import { createHomeTemplate } from "@templates";
import { createIconButtonMolecule } from "@molecules";
import { HOME } from "@common/path.js";
import { PRIMARY1 } from "@common/styles/color.js";
import { replaceDomElement } from "@utils/render.js";
import { getRouter } from "@utils/router.js";
import { getProductsRequest } from "../../../remotes/ProductRemote.js";
import { getContext } from "../../../context.js";

const state = {};

const path = HOME;

const onClickHeart = (isBookmarked) => (e) => {
  e.stopPropagation();
  updateHeartButton(!isBookmarked, e);
};
const onClickAdd = () => getRouter().push("/post");
const onClickMenu = () => getRouter().push("/menu");
const onClickUser = () => getRouter().push("/user");
const onClickCategory = () => getRouter().push("/category");
const onClickProductItem = (id) => () => getRouter().push("/product", { id });

const getPage = () => {
  const locationId = getContext().selectedLocation;
  const categoryId = getContext().selectedCategory;
  return getProductsRequest(locationId, categoryId).then((productList) => {
    return createHomeTemplate({
      onClickHeart,
      onClickAdd,
      onClickMenu,
      onClickUser,
      onClickCategory,
      onClickProductItem,
      location: "화양동",
      productList,
    });
  });
};

const Home = {
  path,
  getPage,
};

export default Home;

function updateHeartButton(isBookmarked, e) {
  const $oldheartButton = e.target.closest("button");
  const $newHeartButton = createIconButtonMolecule({
    type: "heart",
    with: "20px",
    height: "20px",
    ...(isBookmarked ? { fill: PRIMARY1, color: PRIMARY1 } : {}),
    onClick: onClickHeart(isBookmarked),
  });

  replaceDomElement($newHeartButton, $oldheartButton);
}
