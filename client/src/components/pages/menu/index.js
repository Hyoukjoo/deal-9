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

const chatDummy = [
  {
    username: "크롱",
    message: "판매 되었습니까?",
    timestamp: "1시간 전",
    count: 3,
    imgSrc:
      "https://deal-9.s3.ap-northeast-2.amazonaws.com/uploads/1626967552476_ImageLarge-3.png",
  },
  {
    username: "동진",
    message: "사실 이건 가짜 데이터에요.",
    timestamp: "1시간 전",
    count: 0,
    imgSrc:
      "https://deal-9.s3.ap-northeast-2.amazonaws.com/uploads/1626967472091_ImageLarge-1.png",
  },
  {
    username: "혁주",
    message: "제가 살게요.",
    timestamp: "1시간 전",
    count: 1,
    imgSrc:
      "https://deal-9.s3.ap-northeast-2.amazonaws.com/uploads/1626969740428_ImageLarge-4.png",
  },
];

const initialState = {
  selectedTab: 0,
  salesList: [],
  chatList: chatDummy,
  bookmarkList: [],
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
