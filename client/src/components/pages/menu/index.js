import createMenuTemplate from "@templates/menu";
import initState from "@utils/state";
import { MENU } from "@common/path.js";

const salesDummy = {
  title: "sample_1",
  src: "https://assets.ajio.com/medias/sys_master/root/20210403/xX5W/6068a008aeb269a9e335b3ef/-473Wx593H-461778987-white-MODEL.jpg",
  price: 300000,
  desc: "this is realy good",
  status: "selling",
  timestamp: "1시간 전",
  location: "화양동",
  chatCount: 3,
  bookmarkCount: 2,
  isSaler: false,
};

const chatDummy = {
  username: "크롱",
  message: "판매 되었습니까?",
  timestamp: "1시간 전",
  count: 3,
  imgSrc:
    "https://assets.ajio.com/medias/sys_master/root/20210403/xX5W/6068a008aeb269a9e335b3ef/-473Wx593H-461778987-white-MODEL.jpg",
};

const bookmarkDummy = {
  title: "sample_1",
  src: "https://assets.ajio.com/medias/sys_master/root/20210403/xX5W/6068a008aeb269a9e335b3ef/-473Wx593H-461778987-white-MODEL.jpg",
  price: 300000,
  desc: "this is realy good",
  status: "selling",
  timestamp: "1시간 전",
  location: "화양동",
  chatCount: 3,
  bookmarkCount: 2,
  isSaler: false,
};

const initialState = {
  selectedTab: 0,
  salesList: new Array(8).fill(salesDummy),
  chatList: new Array(8).fill(0).map((v) => ({
    ...chatDummy,
    count: Math.floor(Math.random() * 2),
  })),
  bookmarkList: new Array(8).fill(bookmarkDummy),
};

const { getState, setState } = initState(initialState, createMenuTemplate);

const getPage = () => {
  return createMenuTemplate({
    ...getState(),
    setState,
    onClickHeart: () => {},
    onClickModify: () => {},
    onClickDelete: () => {},
  });
};

const Menu = {
  path: MENU,
  getPage,
};

export default Menu;
