import "./style.scss";
import { createTabButtonMolecule } from "@molecules";

const createTabBarOrganism = () => {
  const $tabBar = document.createElement("div");
  $tabBar.classList.add("tab-bar");

  ["판매목록", "채팅", "관심목록"].forEach((tab) => {
    const $tabWrapper = document.createElement("div");
    const $tabButton = createTabButtonMolecule({
      onClick: () => {},
      label: tab,
    });
    $tabBar.append($tabWrapper);
    $tabWrapper.append($tabButton);
  });

  return $tabBar;
};

export default createTabBarOrganism;
