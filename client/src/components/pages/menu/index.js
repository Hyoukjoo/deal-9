import createMenuTemplate from "@templates/menu";

const state = {};

const getPage = () => {
  return createMenuTemplate();
};

const Menu = {
  getPage,
};

export default Menu;
