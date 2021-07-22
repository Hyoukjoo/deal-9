import "./style.scss";

import { createButtonAtom, createIconAtom, createLinkAtom } from "@atoms";
import { PRIMARY2 } from "@common/styles/color.js";

const createLocationButtonMolecule = ({
  location = "",
  addLocation = () => {},
  removeLocation = () => {},
} = {}) => {
  const hasLocation = location.trim().length > 0;

  const $button = createButtonAtom({});
  $button.classList.add("location-button");

  if (hasLocation) {
    const $locationLabel = createLinkAtom({
      type: "label",
      size: "small",
      text: location,
    });
    const $removeIcon = createIconAtom({ type: "close", color: PRIMARY2 });

    $button.classList.add("has-location");

    $removeIcon.addEventListener("click", removeLocation);

    $button.append($locationLabel, $removeIcon);
  } else {
    const $addIcon = createIconAtom({ type: "add", color: PRIMARY2 });

    $button.addEventListener("click", addLocation);

    $button.append($addIcon);
  }

  return $button;
};

export default createLocationButtonMolecule;
