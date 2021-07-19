import "./style.scss";
import { createTextAtom, createLinkAtom } from "@atoms";
import { createProductImgMoleclue } from "@molecules";
import { priceFormat } from "../../../utils/helper.js";

const createInfoProductMoleCule = ({ src, title, price, status }) => {
  console.log(src, title, price, status);
  const $infoProduct = document.createElement("div");

  const $productImg = createProductImgMoleclue({ type: "small", src });

  const $productDescription = document.createElement("div");
  const $title = createTextAtom({
    type: "span",
    size: "medium",
    text: title,
  });
  const $price = createTextAtom({
    type: "span",
    size: "x-small",
    text: priceFormat(price, "원"),
  });
  $productDescription.append($title, $price);
  $productDescription.classList.add("info-product-description");

  // TODO: 버튼.....?
  const $status = createLinkAtom({
    type: "span",
    size: "medium",
    text: status,
  });

  $infoProduct.append($productImg, $productDescription, $status);
  $infoProduct.classList.add("info-product");

  return $infoProduct;
};

export default createInfoProductMoleCule;
