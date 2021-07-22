import "./style.scss";
import {
  createMainHeaderOrganism,
  createProductListItemOrganism,
} from "@organisms";
import {
  createFabButtonMolecule,
  createIconButtonMolecule,
  createEmptyMolecule,
} from "@molecules";
import { PRIMARY1 } from "@common/styles/color.js";

const createHomeTemplate = ({
  location,
  productList,
  onClickHeart,
  onClickAdd,
  onClickCategory,
  onClickMenu,
  onClickUser,
  onClickProductItem,
}) => {
  const $homeTemplate = document.createElement("div");
  const $header = createMainHeaderOrganism({
    location,
    onClickCategory,
    onClickMenu,
    onClickUser,
  });

  const $main = document.createElement("main");

  const $productList = document.createElement("ul");
  productList.forEach((product) => {
    const $heart = createIconButtonMolecule({
      type: "heart",
      with: "20px",
      height: "20px",
      ...(product.isBookmarked ? { fill: PRIMARY1, color: PRIMARY1 } : {}),
      onClick: onClickHeart(product.isBookmarked),
    });
    const $productListItem = createProductListItemOrganism({
      ...product,
      onClickProductItem,
      productHeaderButton: $heart,
      location,
    });

    $productList.append($productListItem);
  });
  const $addButton = createFabButtonMolecule({
    onClick: onClickAdd,
  });

  const $empty = createEmptyMolecule();

  $main.append(productList.length ? $productList : $empty);

  $homeTemplate.append($header, $main, $addButton);
  $homeTemplate.classList.add("home-template");

  return $homeTemplate;
};

export default createHomeTemplate;
