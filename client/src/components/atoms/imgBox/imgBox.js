import "./style.scss";

const imgBoxTypes = ["small", "medium", "large", "gradient"];

export const createImgBoxAtom = ({ type }) => {
  if (!imgBoxTypes.includes(type)) {
    throw Error(`This ${type} type is not supported `);
  }
  const $imgBox = document.createElement("div");
  $imgBox.classList.add("img-box");
  $imgBox.classList.add(`img-box-${type}`);

  return $imgBox;
};
