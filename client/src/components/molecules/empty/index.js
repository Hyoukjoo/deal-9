import "./style.scss";
import { createTextAtom } from "@atoms";

const createEmptyMolecule = () => {
  const $empty = document.createElement("div");
  const $text = createTextAtom({ text: "텅" });

  $empty.append($text);
  $empty.classList.add("empty");

  return $empty;
};

export default createEmptyMolecule;
