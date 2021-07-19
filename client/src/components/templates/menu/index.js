import "./style.scss";
import { createHeaderOrganism, createTabBarOrganism } from "@organisms";
import { createIconButtonMolecule } from "@molecules";
import { createTextAtom } from "@atoms";
import { getRouter } from "@utils/router";

const createMenuTemplate = () => {
  const router = getRouter();
  const $menuTemplate = document.createElement("div");

  const $backButton = createIconButtonMolecule({
    type: "short-arrow-left",
    onClick: router.push("/menu"),
  });
  const $pageName = createTextAtom({
    type: "span",
    size: "medium",
    text: "메뉴",
  });
  const $header = createHeaderOrganism({
    type: "off-white",
    left: $backButton,
    middle: $pageName,
  });

  const $tabs = createTabBarOrganism();

  $menuTemplate.append($header, $tabs);
  return $menuTemplate;
};

export default createMenuTemplate;
