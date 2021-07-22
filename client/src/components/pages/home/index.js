import { createHomeTemplate } from "@templates";
import { createIconButtonMolecule } from "@molecules";
import { HOME } from "@common/path.js";
import { PRIMARY1 } from "@common/styles/color.js";
import { replaceDomElement } from "@utils/render.js";
import { getRouter } from "@utils/router.js";

const state = {};

const path = HOME;

const dummy = {
  title: "sample_1",
  src: "https://assets.ajio.com/medias/sys_master/root/20210403/xX5W/6068a008aeb269a9e335b3ef/-473Wx593H-461778987-white-MODEL.jpg",
  price: 300000,
  desc: "this is realy good",
  status: "selling",
  timestamp: "1시간 전",
  chatCount: 3,
  bookmarkCount: 2,
  isSaler: false,
  isBookmarked: true,
};

const onClickHeart = (isBookmarked) => (e) => {
  updateHeartButton(!isBookmarked, e);
};
const onClickAdd = () => getRouter().push("/post");
const onClickMenu = () => getRouter().push("/menu");
const onClickUser = () => getRouter().push("/user");
const onClickCategory = () => getRouter().push("/category");

const getPage = () => {
  return createHomeTemplate({
    onClickHeart,
    onClickAdd,
    onClickMenu,
    onClickUser,
    onClickCategory,
    location: "화양동",
    productList: new Array(11).fill(dummy),
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
