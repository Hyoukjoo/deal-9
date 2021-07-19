import "./style.scss";
import { createDividerAtom, createLinkAtom } from "@atoms";
import { priceFormat } from "../../../utils/helper.js";
import {
  createIconButtonMolecule,
  createNormalButtonMolecule,
} from "@molecules";

const createProductBarMolecule = ({ price, buttonText, onClick }) => {
  const $productBar = document.createElement("div");
  const $heart = createIconButtonMolecule({ type: "heart" });
  const $divider = createDividerAtom({ height: "36px" });
  const $price = createLinkAtom({
    type: "span",
    size: "medium",
    text: priceFormat(price),
  });
  const $button = createNormalButtonMolecule({ onclick, label: buttonText });

  $productBar.append($heart, $divider, $price, $button);
  $productBar.classList.add("product-bar");

  return $productBar;
};

export default createProductBarMolecule;
