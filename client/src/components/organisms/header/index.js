import "./style.scss";

const createHeaderOrganism = ({ type, left, middle, right }) => {
  const $header = document.createElement("header");
  const $emptyEl = document.createElement("div");

  $header.append(left || $emptyEl, middle || $emptyEl, right || $emptyEl);
  $header.classList.add("header", `header-${type}`);

  return $header;
};

export default createHeaderOrganism;
