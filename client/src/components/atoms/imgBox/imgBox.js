import "./style.scss";

const imgBoxTypes = ["small", "medium", "large", "gradient"];

export const createImgBoxAtom = ({ type }) => {
  if (!imgBoxTypes.includes(type)) {
    throw Error(`This ${type} type is not supported `);
  }
  const $img = document.createElement("div");
  $img.classList.add("img-box");
  $img.classList.add(`img-box-${type}`);

  return $img;
};
