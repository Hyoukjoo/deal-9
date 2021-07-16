import "./style.scss";
import { createButtonAtom } from "@atoms/Button/button.js";
import { createLinkAtom } from "../../../atoms/Text/link.js";

const BUTTON_SIZE = ["medium", "large"];

export const createNormalButton = ({
  onClick,
  label,
  size = "medium",
  disabled = false,
}) => {
  const isNotSupported = !BUTTON_SIZE.includes(size);

  if (isNotSupported) {
    throw Error(`This ${size} size is not supported`);
  }

  const buttonSize = `button-${size}`;
  const fontSize = size === "medium" ? "small" : "medium";

  const $button = createButtonAtom({ onClick });
  const $label = createLinkAtom({ type: "label", size: fontSize, text: label });

  $button.disabled = disabled;
  $button.classList.add("normal-button", buttonSize);

  $button.append($label);

  return $button;
};
