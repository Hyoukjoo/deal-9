import "./style.scss";
import {
  createProductImgMolecule,
  createIconButtonMolecule,
  createTextWithMiddotMolecule,
  createIconWithTextMolecule,
} from "@molecules";
import { createLinkAtom, createTextAtom } from "@atoms";
import { priceFormat } from "@utils/helper.js";

const createProductListItemOrganism = ({
  src,
  title,
  price,
  location,
  timestamp,
  isBookmarked,
  chatCount,
  bookmarkCount,
  isSaler,
}) => {
  const $productListItem = document.createElement("div");

  const $productImg = createProductImgMolecule({ src, type: "large" });

  const $productInfo = document.createElement("section");

  const $productInfoHeader = document.createElement("header");
  const $title = createLinkAtom({ type: "span", size: "medium", text: title });
  // TODO: heart molecule(organism?) api, click event 붙여서 따로 만들기
  const $heart = createIconButtonMolecule({
    type: "heart",
    with: "20px",
    height: "20px",
  });
  //TODO: 드랍다운
  const $menu = createIconButtonMolecule({ type: "menu" });
  const $productInfoHeaderButton = isSaler ? $menu : $heart;
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
  bookmarkCount && $productInfoFooter.append($bookmarkCount);
  chatCount && $productInfoFooter.append($chatCount);

  $productInfo.append($productInfoHeader, $productInfoMain, $productInfoFooter);
  $productListItem.append($productImg, $productInfo);
  $productListItem.classList.add("product-list-item");

  return $productListItem;
};

export default createProductListItemOrganism;
