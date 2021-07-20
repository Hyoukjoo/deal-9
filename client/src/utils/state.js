import { _render } from "@utils/render";

const initState = (initialState, template) => {
  const $root = document.getElementById("app");
  let state = initialState;
  const setState = (newState = {}) => {
    state = {
      ...state,
      ...newState,
    };
    _render($root, template({ ...state, setState }));
  };
  const getState = () => state;

  return { getState, setState };
};

export default initState;
