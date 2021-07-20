import { render } from "@utils/render";

const initState = (initialState, template) => {
  const $root = document.getElementById("app");
  let state = initialState;
  const setState = (newState) => {
    state = {
      ...state,
      ...newState,
    };
    render($root, template({ ...state, setState }));
  };

  return { state, setState };
};

export default initState;
