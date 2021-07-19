import "./style.scss";
import { createIconAtom, createLinkAtom, createButtonAtom } from "@atoms";
import { createIconButtonMolecule } from "@molecules";
import { WHITE } from "@common/styles/color.js";

const createMainHeaderOrganism = ({ location }) => {
  const $header = document.createElement("header");

  const $left = document.createElement("div");
  const $categoryButton = createIconButtonMolecule({
    type: "category",
    color: WHITE,
  });
  $left.append($categoryButton);
  $left.classList.add("main-header-left");

  // TODO: dropdown 추가
  const $middle = document.createElement("div");
  $middle.append(
    createIconAtom({ type: "map-pin", color: WHITE }),
    createLinkAtom({ type: "span", size: "medium", text: location || "장소" })
  );
  $middle.classList.add("main-header-middle");

  const $right = document.createElement("div");
  $right.append(
    createIconButtonMolecule({ type: "user", color: WHITE }),
    createIconButtonMolecule({ type: "menu", color: WHITE })
  );
  $right.classList.add("main-header-right");

  $header.append($left, $middle, $right);
  $header.classList.add("main-header");

  return $header;
};

export default createMainHeaderOrganism;
