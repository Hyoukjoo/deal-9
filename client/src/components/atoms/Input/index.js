import "./style.scss";
import { INPUT_SIZE_TYPE } from "./constant.js";

const createInputAtom = ({
  onChange = () => {},
  placeholder = "",
  size = "large",
  type = "text",
}) => {
  const isNotSupportedSize = !INPUT_SIZE_TYPE.includes(size);

  if (isNotSupportedSize) {
    throw Error(`This ${size} size is not supported`);
  }

  const $input = document.createElement("input");

  $input.setAttribute("type", type);
  $input.classList.add("atom", `atom-input-size-${size}`);
  $input.placeholder = placeholder;
  $input.addEventListener("input", onChange);

  return $input;
};

export default createInputAtom;
