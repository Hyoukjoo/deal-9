import { createHomeTemplate } from "@templates";
import { createIconButtonMolecule } from "@molecules";
import { PRIMARY1 } from "@common/styles/color.js";
import { replaceDomElement } from "@utils/render.js";
import { getProductsRequest } from "../../../remotes/ProductRemote.js";
import { getContext } from "../../../context.js";
import { LOGOUT, LOGIN, HOME, POST, MENU, CATEGORY } from "@common/path.js";

const path = HOME;

const onClickHeart = (isBookmarked) => (e) => {
  e.stopPropagation();
  updateHeartButton(!isBookmarked, e);
};

const getPage = ({ router, isLogin, user, ...props }) => {
  const onClickAdd = () => router.push(isLogin ? POST : LOGIN);
  const onClickMenu = () => router.push(isLogin ? MENU : LOGIN);
  const onClickUser = () => router.push(isLogin ? LOGOUT : LOGIN);
  const onClickCategory = () => router.push(isLogin ? CATEGORY : LOGIN);
  const onClickProductItem = (id) => () => router.push("/product", { id });
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
      location: user?.location || "광진구",
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
