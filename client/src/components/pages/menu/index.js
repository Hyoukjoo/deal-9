import createMenuTemplate from "@templates/menu";
import initState from "@utils/state";

const initialState = {
  selectedTab: 0,
};
const { state, setState } = initState(initialState, createMenuTemplate);

const getPage = () => {
  return createMenuTemplate({ ...state, setState });
};

const Menu = {
  getPage,
};

export default Menu;
