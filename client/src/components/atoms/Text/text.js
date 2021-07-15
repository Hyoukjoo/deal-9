import "./style.scss";
import { TEXT_TYPE, TEXT_SIZE_TYPE } from "./constant.js";

export const createTextAtom = ({ type, size, text }) => {
  const isNotSupported =
    !TEXT_TYPE.includes(type) || !TEXT_SIZE_TYPE.includes(size);

  if (isNotSupported) {
    throw Error("This type or size is not supported");
  }

  const $textElem = document.createElement(type);

  $textElem.classList.add("text", size);
  $textElem.textContent = text;

  return $textElem;
};