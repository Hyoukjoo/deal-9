import "./style.scss";
import { createButtonAtom } from "../../../atoms/Button/button.js";
import { createIconAtom } from "../../../atoms/Icon/icon.js";

export const createFabButton = ({ onClick = () => {} }) => {
  const $button = createButtonAtom({ onClick });
  const $icon = createIconAtom({ type: "add" });

  $button.classList.add("fab-button");

  $button.append($icon);

  return $button;
};
