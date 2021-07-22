import "./style.scss";
import { createIconAtom, createTextAtom } from "@atoms";

const createLocationBarMolecule = ({ location }) => {
  const $locationBar = document.createElement("div");
  const $icon = createIconAtom({
    type: "map-pin",
    width: "16px",
    height: "16px",
  });
  const $locationText = createTextAtom({
    type: "span",
    size: "small",
    text: location,
  });

  $locationBar.append($icon, $locationText);
  $locationBar.classList.add("location-bar");

  return $locationBar;
};

export default createLocationBarMolecule;
