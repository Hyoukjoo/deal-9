import "./style.scss";
import { createIconAtom, createLinkAtom, createButtonAtom } from "@atoms";
import { createIconButtonMolecule } from "@molecules";

const createMainHeaderOrganism = ({ location }) => {
  const $header = document.createElement("header");

  const $left = createIconButtonMolecule({ type: "category" });
  $left.classList.add("main-header-left");

  // TODO: dropbox 추가
  const $middle = document.createElement("div");
  $middle.append(
    createIconAtom({ type: "map-pin" }),
    createLinkAtom({ type: "span", size: "medium", text: location || "장소" })
  );
  $middle.classList.add("main-header-middle");

  const $right = document.createElement("div");
  $right.append(
    createIconButtonMolecule({ type: "user" }),
    createIconButtonMolecule({ type: "menu" })
  );
  $right.classList.add("main-header-right");

  $header.append($left, $middle, $right);
  $header.classList.add("main-header");

  return $header;
};

export default createMainHeaderOrganism;
