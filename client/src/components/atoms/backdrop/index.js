import "./style.scss";

const createBackdropAtom = () => {
  const $div = document.createElement("div");

  $div.classList.add("backdrop");

  return $div;
};

export default createBackdropAtom;
