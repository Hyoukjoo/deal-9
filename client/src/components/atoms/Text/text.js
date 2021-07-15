import "./style.scss";
import { textType, textSizeType } from "./constant.js";

export const createTextAtom = ({ type, size, text }) => {
  const isNotSupported =
    !textType.includes(type) || !textSizeType.includes(size);

  if (isNotSupported) {
    throw Error("This type or size is not supported");
  }

  const $textElem = document.createElement(type);

  $textElem.classList.add("text", size);
  $textElem.textContent = text;

  return $textElem;
};
