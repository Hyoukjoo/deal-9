import "./style.scss";
import {
  createMainHeaderOrganism,
  createProductListItemOrganism,
} from "@organisms";
import { createFabButtonMolecule, createIconButtonMolecule } from "@molecules";
import { PRIMARY1 } from "@common/styles/color.js";

const createHomeTemplate = ({
  location,
  productList,
  onClickHeart,
  onClickAdd,
  onClickCategory,
  onClickMenu,
  onClickUser,
}) => {
  const $homeTemplate = document.createElement("div");
  const $header = createMainHeaderOrganism({
    location,
    onClickCategory,
    onClickMenu,
    onClickUser,
  });
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
      productHeaderButton: $heart,
      location,
    });

    $productList.append($productListItem);
  });
  const $addButton = createFabButtonMolecule({
    onClick: onClickAdd,
  });

  $homeTemplate.append($header, $productList, $addButton);
  $homeTemplate.classList.add("home-template");

  return $homeTemplate;
};

export default createHomeTemplate;
