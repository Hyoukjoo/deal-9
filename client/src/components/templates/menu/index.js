import "./style.scss";
import {
  createHeaderOrganism,
  createTabBarOrganism,
  createMenuTabPageOrganism,
} from "@organisms";
import { createIconButtonMolecule } from "@molecules";
import { createTextAtom } from "@atoms";
import { getRouter } from "@utils/router";

const createMenuTemplate = ({
  selectedTab,
  setState,
  salesList,
  chatList,
  bookmarkList,
  onClickHeart,
  onClickModify,
  onClickDelete,
}) => {
  const router = getRouter();
  const $menuTemplate = document.createElement("div");

  const $backButton = createIconButtonMolecule({
    type: "short-arrow-left",
    onClick: () => {
      router.back();
    },
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

  const dataList = [salesList, chatList, bookmarkList];
  const $tabs = createTabBarOrganism({ selectedTab, setState });
  const $tabPage = createMenuTabPageOrganism({
    tab: selectedTab,
    list: dataList[selectedTab],
    onClickHeart,
    onClickModify,
    onClickDelete,
  });

  $menuTemplate.append($header, $tabs, $tabPage);
  return $menuTemplate;
};

export default createMenuTemplate;
