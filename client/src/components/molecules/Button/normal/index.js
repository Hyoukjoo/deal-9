import "./style.scss";
import { createButtonAtom, createLinkAtom } from "@atoms";

const BUTTON_SIZE = ["medium", "large"];

const createNormalButtonMolecule = ({
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

export default createNormalButtonMolecule;
