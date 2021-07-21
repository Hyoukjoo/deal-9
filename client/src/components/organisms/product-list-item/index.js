import "./style.scss";
import {
  createProductImgMolecule,
  createTextWithMiddotMolecule,
  createIconWithTextMolecule,
} from "@molecules";
import { createLinkAtom } from "@atoms";
import { priceFormat } from "@utils/helper.js";

const createProductListItemOrganism = ({
  src,
  title,
  price,
  location,
  timestamp,
  chatCount,
  bookmarkCount,
  productHeaderButton,
}) => {
  const $productListItem = document.createElement("li");

  const $productImg = createProductImgMolecule({ src, type: "large" });

  const $productInfo = document.createElement("section");

  const $productInfoHeader = document.createElement("header");
  const $title = createLinkAtom({ type: "span", size: "medium", text: title });
  const $productInfoHeaderButton = productHeaderButton;
  $productInfoHeader.append($title, $productInfoHeaderButton);

  const $productInfoMain = document.createElement("main");
  const $locationAndTimestamp = createTextWithMiddotMolecule([
    location,
    timestamp,
  ]);
  const $price = createLinkAtom({
    type: "span",
    size: "small",
    text: priceFormat(price, "원"),
  });
  $productInfoMain.append($locationAndTimestamp, $price);
  $productInfo.classList.add("product-list-item-info");

  const $productInfoFooter = document.createElement("footer");
  const $chatCount = createIconWithTextMolecule({
    iconType: "message-square",
    text: chatCount,
  });
  const $bookmarkCount = createIconWithTextMolecule({
    iconType: "heart",
    text: bookmarkCount,
  });
  if (bookmarkCount) {
    $productInfoFooter.append($bookmarkCount);
  }
  if (chatCount) {
    $productInfoFooter.append($chatCount);
  }

  $productInfo.append($productInfoHeader, $productInfoMain, $productInfoFooter);
  $productListItem.append($productImg, $productInfo);
  $productListItem.classList.add("product-list-item");

  return $productListItem;
};

export default createProductListItemOrganism;
