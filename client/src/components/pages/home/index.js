import { createHomeTemplate } from "@templates";
import { HOME } from "@common/path.js";

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
};

const getPage = () => {
  return createHomeTemplate({
    location: "화양동",
    productList: new Array(11).fill(0).map((v) => dummy),
  });
};

const Home = {
  path,
  getPage,
};

export default Home;
