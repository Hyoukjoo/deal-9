import "./style.scss";

const textType = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"];
const sizeType = ["large", "medium", "small", "x-small"];

export const getTextElem = ({ type, size, text }) => {
  const isNotSupported = !textType.includes(type) || !sizeType.includes(size);

  if (isNotSupported) {
    throw Error("This type or size is not supported");
  }

  const $textElem = document.createElement(type);

  $textElem.classList.add(size);
  $textElem.textContent = text;

  return $textElem;
};

export const getLinkElem = ({ size }) => {
  const isNotSupported = !sizeType.slice(1).includes(size);

  if (isNotSupported) {
    throw Error("This size is not supported");
  }

  const $linkElem = document.createElement("a");

  $linkElem.classList.add(size);

  return $linkElem;
};
