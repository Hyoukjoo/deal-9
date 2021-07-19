import "./style.scss";
import { createLinkAtom, createTextAtom } from "@atoms";

const createInfoSalerMolecule = ({ username, location }) => {
  const $infoSaler = document.createElement("div");

  const $left = createLinkAtom({
    type: "span",
    size: "medium",
    text: "판매자정보",
  });

  const $right = document.createElement("div");
  const $username = createLinkAtom({
    type: "span",
    size: "medium",
    text: username,
  });
  const $location = createTextAtom({
    type: "span",
    size: "small",
    text: location,
  });
  $right.append($username, $location);

  $infoSaler.append($left, $right);
  $infoSaler.classList.add("info-saler");

  return $infoSaler;
};

export default createInfoSalerMolecule;
