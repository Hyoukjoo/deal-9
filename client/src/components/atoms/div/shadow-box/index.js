import "./style.scss";

const createShadowBoxAtom = () => {
  const $div = document.createElement("div");

  $div.classList.add("shadow-box");

  return $div;
};

export default createShadowBoxAtom;
