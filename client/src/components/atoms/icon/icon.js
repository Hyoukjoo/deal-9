import "./style.scss";

const iconType = [
  "add",
  "category",
  "check",
  "close",
  "heart",
  "image",
  "log-out",
  "map-pin",
  "menu",
  "message-square",
  "more-vertical",
  "send",
  "short-arrow-down",
  "short-arrow-left",
  "short-arrow-right",
  "user",
];

export const createIconAtom = ({ type }) => {
  if (!iconType.includes(type)) {
    throw Error(`This ${type} type is not supported `);
  }

  const $img = document.createElement("img");

  $img.classList.add("atom-icon");
  $img.src = `/public/icons/${type}.svg`;

  return $img;
};
