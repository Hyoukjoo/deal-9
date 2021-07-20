import "./style.scss";
import { createTextAtom } from "@atoms";

const createTextWithMiddotMolecule = (textList) => {
  const textWithmiddot = textList.join(" &middot ");
  const $textWithmiddot = createTextAtom({
    type: "span",
    size: "small",
    text: "",
  });

  $textWithmiddot.innerHTML = textWithmiddot;
  $textWithmiddot.classList.add("text-with-middot");

  return $textWithmiddot;
};

export default createTextWithMiddotMolecule;
