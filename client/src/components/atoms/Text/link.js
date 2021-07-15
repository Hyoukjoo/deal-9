import "./style.scss";
import { linkType, linkSizeType } from "./constant.js";

export const createLinkAtom = ({ type, size, text }) => {
  const isNotSupported =
    !linkType.includes(type) || !linkSizeType.includes(size);

  if (isNotSupported) {
    throw Error(`This type or size is not supported`);
  }

  const $linkElem = document.createElement(type);

  $linkElem.classList.add("link", size);
  $linkElem.textContent = text;

  return $linkElem;
};
