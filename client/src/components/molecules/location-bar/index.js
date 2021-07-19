import "./style.scss";
import { createIconAtom, createTextAtom } from "@atoms";

const createLocationBarMolecule = ({ location }) => {
  const $locationBar = document.createElement("div");
  const $icon = createIconAtom({ type: "map-pin" });
  const $locationText = createTextAtom({
    type: "span",
    size: "medium",
    text: location,
  });

  $locationBar.append($icon, $locationText);
  $locationBar.classList.add("location-bar");

  return $locationBar;
};

export default createLocationBarMolecule;
