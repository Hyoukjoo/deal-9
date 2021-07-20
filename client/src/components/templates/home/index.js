import "./style.scss";
import {
  createMainHeaderOrganism,
  createProductListItemOrganism,
} from "@organisms";
import { createFabButtonMolecule } from "@molecules";
import { getRouter } from "@utils/router.js";

const createHomeTemplate = ({ location, productList }) => {
  const router = getRouter();
  const $homeTemplate = document.createElement("div");
  const $header = createMainHeaderOrganism({ location });
  const $productList = document.createElement("ul");
  productList.forEach((product) => {
    const $li = document.createElement("li");
    const $productListItem = createProductListItemOrganism({
      ...product,
      location,
    });

    $productList.append($li);
    $li.append($productListItem);
  });
  const $addButton = createFabButtonMolecule({
    onClick: () => {
      router.push("/post");
    },
  });

  $homeTemplate.append($header, $productList, $addButton);
  $homeTemplate.classList.add("home-template");

  return $homeTemplate;
};

export default createHomeTemplate;
