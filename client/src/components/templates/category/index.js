import "./style.scss";
import { createHeaderOrganism } from "@organisms";
import {
  createIconButtonMolecule,
  createCategoryListItemMolecule,
} from "@molecules";
import { createTextAtom } from "@atoms";
import { getRouter } from "@utils/router.js";

const createCategoryTemplate = ({ categoryList }) => {
  const $categoryTemplate = document.createElement("div");
  const router = getRouter();

  const $backButton = createIconButtonMolecule({
    onClick: () => {
      router.back();
    },
    type: "short-arrow-left",
  });
  const $pageName = createTextAtom({
    type: "span",
    size: "medium",
    text: "카테고리",
  });
  const $header = createHeaderOrganism({
    type: "off-white",
    left: $backButton,
    middle: $pageName,
  });

  const $categoryList = document.createElement("ul");
  categoryList.forEach(({ src, name }) => {
    const $categoryListItem = createCategoryListItemMolecule({
      text: name,
      src,
    });
    const $li = document.createElement("li");

    $categoryList.append($li);
    $li.append($categoryListItem);
  });

  $categoryTemplate.append($header, $categoryList);
  $categoryTemplate.classList.add("category-template");

  return $categoryTemplate;
};

export default createCategoryTemplate;
