import "./style.scss";
import {
  createProductImgMolecule,
  createTextWithMiddotMolecule,
  createIconWithTextMolecule,
} from "@molecules";
import { createLinkAtom } from "@atoms";
import { priceFormat, timeAgo } from "@utils/helper.js";

const createProductListItemOrganism = ({
  thumbnail,
  title,
  price,
  location,
  timestamp,
  chatCount,
  bookmarkCount,
  productHeaderButton,
  onClickProductItem,
  id,
}) => {
  const $productListItem = document.createElement("li");
  if (onClickProductItem) {
    $productListItem.addEventListener("click", onClickProductItem(id));
  }

  const $productImg = createProductImgMolecule({
    src: thumbnail,
    type: "large",
  });

  const $productInfo = document.createElement("section");

  const $productInfoHeader = document.createElement("header");
  const $title = createLinkAtom({ type: "span", size: "medium", text: title });
  const $productInfoHeaderButton = productHeaderButton;
  $productInfoHeader.append($title, $productInfoHeaderButton);

  const $productInfoMain = document.createElement("main");
  const $locationAndTimestamp = createTextWithMiddotMolecule([
    location,
    timeAgo(timestamp),
  ]);
  const $price = createLinkAtom({
    type: "span",
    size: "small",
    text: price === null ? "가격 미정" : priceFormat(price, "원"),
  });
  $productInfoMain.append($locationAndTimestamp, $price);
  $productInfo.classList.add("product-list-item-info");

  const $productInfoFooter = document.createElement("footer");
  const $chatCount = createIconWithTextMolecule({
    iconType: "message-square",
    text: chatCount || 0,
  });
  const $bookmarkCount = createIconWithTextMolecule({
    iconType: "heart",
    text: bookmarkCount || 0,
  });
  $productInfoFooter.append($bookmarkCount);
  $productInfoFooter.append($chatCount);

  $productInfo.append($productInfoHeader, $productInfoMain, $productInfoFooter);
  $productListItem.append($productImg, $productInfo);
  $productListItem.classList.add("product-list-item");

  return $productListItem;
};

export default createProductListItemOrganism;
