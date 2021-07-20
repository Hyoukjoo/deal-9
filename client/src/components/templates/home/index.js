import "./style.scss";
import {
  createMainHeaderOrganism,
  createProductListItemOrganism,
} from "@organisms";

const createHomeTemplate = ({ location, productList }) => {
  const $homeTemplate = document.createElement("div");
  const $header = createMainHeaderOrganism({ location });
  const $productList = document.createElement("ul");
  productList.forEach((product) => {
    const $productListItem = createProductListItemOrganism({
      ...product,
      location,
    });

    $productList.append($productListItem);
  });

  $homeTemplate.append($header, $productList);
  $homeTemplate.classList.add("home-template");

  return $homeTemplate;
};

export default createHomeTemplate;
