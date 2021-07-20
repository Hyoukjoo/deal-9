import { HEADER_TYPE } from "./constant.js";
import "./style.scss";

const createHeaderOrganism = ({ type, left, middle, right }) => {
  const isNotSupported = !HEADER_TYPE.includes(type);

  if (isNotSupported) {
    throw Error(`${type} is not supported header type`);
  }

  const $header = document.createElement("header");
  const $emptyEl = document.createElement("div");

  $header.append(left || $emptyEl, middle || $emptyEl, right || $emptyEl);
  $header.classList.add("header", `header-${type}`);

  return $header;
};

export default createHeaderOrganism;
