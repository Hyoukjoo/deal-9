import "./style.scss";
import { LINK_TYPE, LINK_SIZE_TYPE } from "./constant.js";

export const createLinkAtom = ({ type, size, text }) => {
  const isNotSupported =
    !LINK_TYPE.includes(type) || !LINK_SIZE_TYPE.includes(size);

  if (isNotSupported) {
    throw Error(`This type or size is not supported`);
  }

  const $linkElem = document.createElement(type);

  $linkElem.classList.add("link", `text-${size}`);
  $linkElem.textContent = text;

  return $linkElem;
};
